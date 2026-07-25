# auth-service

OAuth2 Resource Server validating JWTs issued by Keycloak.

## Keycloak setup (local)
- Realm: `sahyog`
- Client ID: `sahyog-app` — **public client** (no client secret; SPAs can't
  safely hold secrets). Uses Authorization Code Flow with PKCE.
- Issuer URI: `http://localhost:8180/realms/sahyog`

`auth-service` only validates JWTs (issuer + signature) — it never needs
the client secret, because there isn't one. Direct access grants (password
flow) are disabled on the real client; that flow was only ever used for
one-off backend testing via curl, never for real user login.