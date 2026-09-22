import { validateGlossaryWorkspace, writePublishedGlossaryRegistry } from "../lib/glossary/validate";

const issues = validateGlossaryWorkspace();
const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");

for (const issue of issues) {
  const loc = issue.file ? `${issue.file}: ` : "";
  console.log(`${issue.severity.toUpperCase()} ${loc}${issue.message}`);
}

writePublishedGlossaryRegistry();
console.log("Wrote content/glossary/registry.json");

if (errors.length > 0) {
  console.error(`Glossary validation failed: ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Glossary validation passed (${warnings.length} warning(s)).`);
