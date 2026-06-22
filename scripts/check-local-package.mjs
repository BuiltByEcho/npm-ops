#!/usr/bin/env node
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`OK   ${message}`);
}

if (!existsSync("package.json")) {
  fail("package.json not found in current directory");
  process.exit();
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const isScoped = typeof pkg.name === "string" && pkg.name.startsWith("@builtbyecho/");

if (isScoped) ok("package is scoped under @builtbyecho");
else fail("package should be scoped under @builtbyecho unless it is a documented legacy alias");

for (const field of ["name", "version", "description", "license", "repository"]) {
  if (pkg[field]) ok(`${field} is present`);
  else fail(`${field} is missing`);
}

if (pkg.type === "module") ok("type=module is explicit");
else console.warn("WARN package type is not explicit module; verify intentionally CommonJS or dual package");

if (pkg.files) ok("files whitelist is present");
else fail("files whitelist is missing");

if (pkg.bin || pkg.exports) ok("bin or exports entry point is present");
else fail("missing bin/exports entry point");

try {
  execSync("npm pack --dry-run --json", { stdio: "inherit", shell: true });
  ok("npm pack dry-run completed");
} catch {
  fail("npm pack dry-run failed");
}
