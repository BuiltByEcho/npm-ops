# Trusted Publisher Setup Values

Use these npm package settings to let GitHub Actions publish without a per-release OTP or long-lived npm token.

npm docs: https://docs.npmjs.com/trusted-publishers

## Why this is preferred

Trusted Publishing uses GitHub Actions OIDC. npm accepts publishes only from the exact repository/workflow/environment configured below. It avoids storing an npm token in GitHub and avoids manual OTP entry on every publish.

## npm-side entries to add

For each package on npmjs.com, open the package settings/access page and add a trusted publisher with provider **GitHub Actions**.

| npm package | GitHub organization | Repository | Workflow filename | Environment | Allowed actions |
|---|---|---|---|---|---|
| `@builtbyecho/agent-wormhole` | `BuiltByEcho` | `agent-wormhole` | `release.yml` | `npm` | Publish package |
| `@builtbyecho/echo-gate` | `BuiltByEcho` | `echo-gate` | `release.yml` | `npm` | Publish package |
| `@builtbyecho/echo-orbit` | `BuiltByEcho` | `echo-orbit` | `release.yml` | `npm` | Publish package |

## Repo-side status

The source repositories already include `.github/workflows/release.yml` with:

- `permissions: id-token: write`
- GitHub-hosted Ubuntu runner
- Node 22
- npm upgraded to latest for OIDC support
- `npm publish --access public --provenance`
- GitHub environment: `npm`

## After npm-side setup

Run these from a trusted GitHub-authenticated shell to create tags and trigger publishing:

```bash
cd /c/Users/Wdust/Echo/github/BuiltByEcho/agent-wormhole
git tag v0.1.3
git push origin v0.1.3

cd /c/Users/Wdust/Echo/github/BuiltByEcho/echo-gate
git tag v0.1.3
git push origin v0.1.3

cd /c/Users/Wdust/Echo/github/BuiltByEcho/echo-orbit
git tag v0.1.2
git push origin v0.1.2
```

Alternatively, manually dispatch each `release` workflow from GitHub Actions.
