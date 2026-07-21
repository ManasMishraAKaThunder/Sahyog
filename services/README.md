# Sahyog — Backend Services

Spring Boot 3 / Java 21 microservices. Each service is independently
runnable and registers with `discovery-server` (Eureka) once started.

## Run order
1. `discovery-server` (port 8761) — must be running first
2. `config-server` (port 8888)
3. Domain/platform services register with both once up

## Local dev
Each service's real secrets (DB passwords, JWT signing keys, OAuth2 client
secrets) live in a gitignored `application-local.yml`, never in the
committed `application.yml`. See root `.gitignore`.