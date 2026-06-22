# Trusted Publishing Setup

Preferred release path for active BuiltByEcho npm packages: GitHub Actions OIDC → npm Trusted Publishing → package provenance.

## GitHub workflow baseline

Use this for package repositories after tests/build are in place:

```yaml
name: release

on:
  workflow_dispatch:
  push:
    tags:
      - 'v*'

permissions:
  contents: read
  id-token: write

jobs:
  publish:
    runs-on: ubuntu-latest
    environment: npm
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: https://registry.npmjs.org
      - run: npm ci
      - run: npm test --if-present
      - run: npm run build --if-present
      - run: npm pack --dry-run --json
      - run: npm publish --access public --provenance
```

## npm package settings

For each active package in npm:

1. Open package settings in npm.
2. Add a trusted publisher for the matching GitHub repository.
3. Workflow: `release.yml`.
4. Environment: `npm`.
5. Keep long-lived automation tokens out of GitHub unless a package cannot use trusted publishing.

## Local emergency publish checklist

```bash
npm whoami
npm pack --dry-run --json
npm publish --dry-run
npm publish --access public --provenance
```

Emergency publishes must be followed by a GitHub tag/release reconciliation commit.
