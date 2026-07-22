# auth-service

OAuth2 Resource Server validating JWTs issued by Keycloak.

## Keycloak setup (local)
- Realm: `sahyog`
- Client ID: `sahyog-app` (confidential client)
- Issuer URI: `http://localhost:8180/realms/sahyog`

Client secret is never committed. It lives in `.env` (gitignored) and is
injected via environment variable at runtime. See root `.gitignore` and
`infra/docker/.env.example` for the pattern.