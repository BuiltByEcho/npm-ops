# BuiltByEcho npm Package Inventory

Generated: `2026-06-22T13:17:58+00:00`

- npm account: `builtbyecho`
- GitHub account: `BuiltByEcho`
- Packages with read-write access: **22**
- Canonical scoped packages: **18**
- Legacy unscoped aliases: **3**
- Deprecated packages: **1**

## Policy snapshot

- `@builtbyecho/*` is the canonical namespace for new and maintained packages.
- Unscoped duplicates stay installable until usage is mapped, then they should point users to the scoped package.
- Releases should move to GitHub Actions + npm Trusted Publishing/provenance.
- Manual publishes are allowed only for emergency recovery after `npm pack --dry-run` and `npm publish --dry-run`.

## Packages

| Package | Status | Version | GitHub repo | Repo metadata | Types | Exports | Files | Notes |
|---|---:|---:|---|---:|---:|---:|---:|---|
| `@builtbyecho/add-ci` | canonical | `1.1.4` | [BuiltByEcho/add-ci](https://github.com/BuiltByEcho/add-ci) | yes | no | no | no |  |
| `@builtbyecho/agent-brief` | canonical | `0.1.1` | [BuiltByEcho/agent-brief](https://github.com/BuiltByEcho/agent-brief) | yes | no | yes | no |  |
| `@builtbyecho/agent-pack` | canonical | `0.1.0` | [BuiltByEcho/agent-pack](https://github.com/BuiltByEcho/agent-pack) | yes | no | yes | no |  |
| `@builtbyecho/agent-runlog` | canonical | `0.4.4` | [BuiltByEcho/agent-runlog](https://github.com/BuiltByEcho/agent-runlog) | yes | no | yes | no |  |
| `@builtbyecho/agent-storage-sdk` | deprecated | `0.1.2` |  | yes | yes | yes | no | deprecated |
| `@builtbyecho/agent-wormhole` | canonical | `0.1.2` | [BuiltByEcho/agent-wormhole](https://github.com/BuiltByEcho/agent-wormhole) | no | no | yes | no | missing repository field |
| `@builtbyecho/agentor` | canonical | `0.1.0` | [BuiltByEcho/agentor](https://github.com/BuiltByEcho/agentor) | yes | no | yes | no |  |
| `@builtbyecho/agentpass` | canonical | `0.1.1` | [BuiltByEcho/agentpass](https://github.com/BuiltByEcho/agentpass) | yes | yes | yes | no |  |
| `@builtbyecho/blackbox` | canonical | `0.1.0` | [BuiltByEcho/echo-blackbox](https://github.com/BuiltByEcho/echo-blackbox) | yes | no | no | no |  |
| `@builtbyecho/echo-gate` | canonical | `0.1.2` | [BuiltByEcho/echo-gate](https://github.com/BuiltByEcho/echo-gate) | no | no | no | no | missing repository field |
| `@builtbyecho/echo-orbit` | canonical | `0.1.1` |  | no | no | no | no | missing repository field |
| `@builtbyecho/env-probe` | canonical | `1.0.0` | [BuiltByEcho/env-probe](https://github.com/BuiltByEcho/env-probe) | yes | no | no | no |  |
| `@builtbyecho/git-digest` | canonical | `1.0.1` | [BuiltByEcho/git-digest](https://github.com/BuiltByEcho/git-digest) | yes | no | yes | no |  |
| `@builtbyecho/public-api-finder` | canonical | `0.5.11` | [BuiltByEcho/public-api-finder](https://github.com/BuiltByEcho/public-api-finder) | yes | no | no | no |  |
| `@builtbyecho/repo-agent-brief` | canonical | `0.4.1` | [BuiltByEcho/agent-brief](https://github.com/BuiltByEcho/agent-brief) | yes | no | yes | no |  |
| `@builtbyecho/research` | canonical | `0.5.2` | [BuiltByEcho/research](https://github.com/BuiltByEcho/research) | yes | no | yes | no |  |
| `@builtbyecho/trustlog` | canonical | `0.2.1` | [BuiltByEcho/trustlog](https://github.com/BuiltByEcho/trustlog) | yes | no | no | no |  |
| `@builtbyecho/vaultline` | canonical | `0.1.1` | [BuiltByEcho/vaultline](https://github.com/BuiltByEcho/vaultline) | yes | yes | yes | no |  |
| `@builtbyecho/vaultline-sdk` | canonical | `0.1.1` | [BuiltByEcho/vaultline](https://github.com/BuiltByEcho/vaultline) | yes | yes | yes | no |  |
| `agent-runlog` | legacy-alias | `0.4.0` | [BuiltByEcho/agent-runlog](https://github.com/BuiltByEcho/agent-runlog) | yes | no | yes | no | scoped duplicate exists |
| `public-api-finder` | legacy-alias | `0.3.1` | [BuiltByEcho/public-api-finder](https://github.com/BuiltByEcho/public-api-finder) | yes | no | no | no | scoped duplicate exists |
| `repo-agent-brief` | legacy-alias | `0.4.0` | [BuiltByEcho/agent-brief](https://github.com/BuiltByEcho/agent-brief) | yes | no | yes | no | scoped duplicate exists |

## Immediate cleanup queue

### Missing repository metadata

- `@builtbyecho/agent-wormhole`
- `@builtbyecho/echo-gate`
- `@builtbyecho/echo-orbit`

### Unmapped to GitHub repo

- `@builtbyecho/agent-storage-sdk`
- `@builtbyecho/echo-orbit`

### Missing `exports`

- `@builtbyecho/add-ci`
- `@builtbyecho/blackbox`
- `@builtbyecho/echo-gate`
- `@builtbyecho/echo-orbit`
- `@builtbyecho/env-probe`
- `@builtbyecho/public-api-finder`
- `@builtbyecho/trustlog`
- `public-api-finder`

### Missing `files` whitelist

- `@builtbyecho/add-ci`
- `@builtbyecho/agent-brief`
- `@builtbyecho/agent-pack`
- `@builtbyecho/agent-runlog`
- `@builtbyecho/agent-storage-sdk`
- `@builtbyecho/agent-wormhole`
- `@builtbyecho/agentor`
- `@builtbyecho/agentpass`
- `@builtbyecho/blackbox`
- `@builtbyecho/echo-gate`
- `@builtbyecho/echo-orbit`
- `@builtbyecho/env-probe`
- `@builtbyecho/git-digest`
- `@builtbyecho/public-api-finder`
- `@builtbyecho/repo-agent-brief`
- `@builtbyecho/research`
- `@builtbyecho/trustlog`
- `@builtbyecho/vaultline`
- `@builtbyecho/vaultline-sdk`
- `agent-runlog`
- `public-api-finder`
- `repo-agent-brief`

