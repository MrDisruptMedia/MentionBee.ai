#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceExtensions = new Set([".cjs", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const ignoredDirectories = new Set([
  ".git",
  ".next",
  "coverage",
  "dist",
  "node_modules",
  "out",
]);
const ignoredFiles = new Set(["scripts/audit-llm-usage.mjs"]);

const providerPatterns = [
  {
    provider: "anthropic",
    pattern:
      /(@anthropic-ai\/sdk|new\s+Anthropic\b|anthropic\.messages\.create\b|claude-[a-z0-9_.-]+)/i,
  },
  {
    provider: "openai",
    pattern:
      /(@openai\/|new\s+OpenAI\b|openai\.(?:chat\.completions|responses)\.create\b|\b(?:gpt|o[134])-[a-z0-9_.-]+)/i,
  },
  {
    provider: "gemini",
    pattern:
      /(@google\/generative-ai|GoogleGenerativeAI\b|\.generateContent\b|gemini-[a-z0-9_.-]+)/i,
  },
  {
    provider: "perplexity",
    pattern:
      /(api\.perplexity\.ai|model\s*:\s*["']sonar[a-z0-9_.-]*["']|sonar-(?:small|medium|large|pro|reasoning)[a-z0-9_.-]*)/i,
  },
];

const finishedReportPages = [
  "app/report/[id]/page.tsx",
  "app/report-outreach/[token]/page.tsx",
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (!ignoredDirectories.has(entry)) {
        walk(fullPath, files);
      }
      continue;
    }

    if (sourceExtensions.has(path.extname(entry))) {
      const normalizedPath = relative(fullPath);
      if (!ignoredFiles.has(normalizedPath)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function relative(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function findProviderMatches(filePath) {
  const source = readFileSync(filePath, "utf8");
  const matches = [];

  for (const { provider, pattern } of providerPatterns) {
    const match = pattern.exec(source);
    if (!match) continue;

    const before = source.slice(0, match.index);
    const line = before.split("\n").length;
    matches.push({
      provider,
      file: relative(filePath),
      line,
      excerpt: match[0],
    });
  }

  return matches;
}

const sourceFiles = walk(root);
const matches = sourceFiles.flatMap(findProviderMatches);

if (matches.length === 0) {
  console.log("No direct Anthropic/OpenAI/Gemini/Perplexity LLM call patterns found.");
} else {
  console.log("Direct LLM provider patterns found:");
  for (const match of matches) {
    console.log(`- ${match.provider}: ${match.file}:${match.line} (${match.excerpt})`);
  }
}

let reportPageViolationCount = 0;
for (const reportPage of finishedReportPages) {
  const absolutePath = path.join(root, reportPage);
  if (!existsSync(absolutePath)) {
    console.log(`Finished report page absent in this repo: ${reportPage}`);
    continue;
  }

  const reportMatches = findProviderMatches(absolutePath);
  if (reportMatches.length === 0) {
    console.log(`Finished report page has no direct LLM provider patterns: ${reportPage}`);
    continue;
  }

  reportPageViolationCount += reportMatches.length;
  for (const match of reportMatches) {
    console.error(
      `Finished report page must not call LLM providers: ${match.file}:${match.line} (${match.excerpt})`,
    );
  }
}

if (reportPageViolationCount > 0) {
  process.exitCode = 1;
}

