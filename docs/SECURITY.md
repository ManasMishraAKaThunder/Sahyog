# Security & secrets policy

## Rule
No real credential, secret, key, or password is ever committed to this
repo. Every service that needs one reads it from a gitignored `.env` file
or an environment variable at runtime.

## Current secrets inventory (local dev only — none of these are shared)
| Service | Secret | Where it lives |
|---|---|---|
| Keycloak | Admin username/password | `infra/docker/.env` (gitignored) |
| auth-service | Keycloak issuer URI | `.env` (not actually secret, but kept consistent with the pattern) |

Keycloak client `sahyog-app` is a **public client** — no client secret
exists for it, by design (see `services/auth-service/README.md`).

## Before every commit touching `application.yml` or `.env*`
- Confirm no real password, API key, or token is hardcoded
- Confirm the file uses `${ENV_VAR:default}` syntax for anything sensitive
- Confirm `.env` (not `.env.example`) is listed in `.gitignore`