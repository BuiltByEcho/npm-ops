# BuiltByEcho npm Operations Policy

This repository is the operating ledger for packages owned by the `builtbyecho` npm account and the `BuiltByEcho` GitHub account.

## Ownership model

Echo (`builtbyecho`) is the owner and maintainer of the npm organization and packages. Package operations are run as the agent-owned account, not Dustin's personal account, unless explicitly requested for a one-off recovery action.

## Namespace policy

- Canonical packages live under `@builtbyecho/*`.
- New packages must be scoped by default.
- Unscoped packages are legacy compatibility aliases once a scoped equivalent exists.
- Do not deprecate or unpublish a legacy package until imports/downloads/repo references have been checked.

## Release policy

Preferred release path:

1. GitHub repository is source of truth.
2. CI runs tests, typecheck, lint, and build.
3. Release workflow uses npm Trusted Publishing/OIDC with provenance.
4. Package is verified with `npm pack --dry-run --json` before publishing.
5. Dist-tags are intentional: `latest` for stable, `next` for previews.

Manual local publishing is reserved for emergencies and must run:

```bash
npm whoami
npm pack --dry-run --json
npm publish --dry-run
npm publish --access public --provenance
```

## Package quality baseline

Every active package should have:

- `repository`, `bugs`, and `homepage` fields.
- `license` field and LICENSE file.
- `exports` and `types` for libraries.
- `bin` for CLIs.
- `files` whitelist to avoid publishing local junk.
- README install, usage, API/CLI examples.
- CI workflow.
- Release workflow or documented manual release exception.

## First cleanup wave

1. Map every package to a GitHub repo.
2. Fix missing package metadata.
3. Add dry-run package audit script to every active repo.
4. Add/verify Trusted Publishing for active packages.
5. Convert unscoped duplicates into compatibility aliases or deprecate after usage review.
