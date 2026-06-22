# Publish Status

Last updated: 2026-06-22

## 2026-06-22 package hardening batch

Source repositories were updated and CI is green for:

| Package | Source repo | Source version | CI | npm publish |
|---|---|---:|---|---|
| `@builtbyecho/agent-wormhole` | `BuiltByEcho/agent-wormhole` | `0.1.3` | green | blocked by npm 2FA / needs trusted publishing or automation token |
| `@builtbyecho/echo-gate` | `BuiltByEcho/echo-gate` | `0.1.3` | green | pending after agent-wormhole publish blocker |
| `@builtbyecho/echo-orbit` | `BuiltByEcho/echo-orbit` | `0.1.2` | green | pending after agent-wormhole publish blocker |
| `@builtbyecho/research` | `BuiltByEcho/research` | `0.5.4` | GitHub release workflow success | published via npm Trusted Publishing/OIDC |

## Blocker

`npm publish --access public` as `builtbyecho` failed with npm `E403`: two-factor authentication or a granular access token with bypass-2FA is required.

Do not remove the source version bumps. The repos are ready for either:

1. npm Trusted Publishing/OIDC configuration, then workflow dispatch/tag release; or
2. a scoped granular automation token with publish rights and bypass-2FA enabled; or
3. an interactive OTP publish session.

No package was unpublished, deprecated, or destructively modified.
