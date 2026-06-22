# BuiltByEcho npm Ops

Operational inventory, policy, and audit tooling for the `builtbyecho` npm account and `@builtbyecho` package scope.

- Inventory: [`INVENTORY.md`](./INVENTORY.md)
- Policy: [`POLICY.md`](./POLICY.md)
- Machine-readable npm inventory: [`data/npm-packages.json`](./data/npm-packages.json)
- GitHub repo inventory: [`data/github-repos.json`](./data/github-repos.json)

## Refresh inventory

```bash
node scripts/refresh-inventory.mjs
```

## Current stance

`@builtbyecho/*` is canonical. Unscoped duplicates remain available as legacy aliases until they are safely reviewed.
