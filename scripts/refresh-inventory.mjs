#!/usr/bin/env node
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

function quote(value) {
  return JSON.stringify(String(value));
}

function run(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });
}

const generatedAt = new Date().toISOString();
const packages = JSON.parse(run("npm access list packages --json"));
const rows = [];

for (const [name, access] of Object.entries(packages).sort()) {
  const meta = JSON.parse(run(`npm view ${quote(name)} --json`));
  const repository = typeof meta.repository === "string" ? meta.repository : meta.repository?.url || "";

  rows.push({
    name,
    access,
    version: meta.version,
    latest: meta["dist-tags"]?.latest,
    description: meta.description || "",
    license: meta.license || "",
    repository,
    homepage: meta.homepage || "",
    deprecated: meta.deprecated || "",
    hasTypes: Boolean(meta.types || meta.typings),
    hasExports: Boolean(meta.exports),
    hasFilesWhitelist: Boolean(meta.files),
    modified: meta.time?.modified || "",
  });
}

mkdirSync("data", { recursive: true });
writeFileSync("data/npm-refresh.json", JSON.stringify({ generatedAt, packages: rows }, null, 2));
console.log(`Wrote data/npm-refresh.json for ${rows.length} packages`);
