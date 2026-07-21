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

## IntelliJ setup (multi-module)

Open the `Sahyog` repo root as your IntelliJ project, not individual service
folders — this keeps the whole repo (frontend + backend) in one window.

Each service under `services/` needs to be added as a Maven module manually
the first time, since IntelliJ won't auto-detect nested `pom.xml` files from
the repo root:

1. Open the **Maven** tool window (right-hand vertical tab)
2. Click **+** → select the service's `pom.xml` (e.g.
   `services/discovery-server/pom.xml`)
3. Repeat for every service folder

Once added, each service's `*Application.java` gets a runnable green arrow,
and all services stay visible as separate Maven modules in one project.

**Do this immediately after generating any new service via Spring
Initializr** — before trying to run it — to avoid the "no run option /
Java file outside root folder" error.