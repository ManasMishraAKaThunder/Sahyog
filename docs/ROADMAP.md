# Build Roadmap

Realistic build order (each checked phase = built with real, working code and
committed incrementally, not stubbed):

- [ ] **Phase 1 — Frontend dashboard** (React + Vite + Tailwind)
  - [x] Project scaffold, design tokens, routing
  - [ ] App shell: sidebar, topbar, layout
  - [ ] Dashboard home (stat cards, team velocity chart, activity feed)
  - [ ] Teams module (list, detail, members)
  - [ ] Projects module (list, kanban board)
  - [ ] Tasks module (board, table, detail drawer)
  - [ ] Users & Roles/Permissions module
  - [ ] Notifications (WebSocket live feed)
  - [ ] Analytics/Reports module (charts)
  - [ ] Settings, Audit Logs, System Health pages
  - [ ] Auth screens (login, OAuth2 redirect handling)
- [ ] **Phase 2 — Backend platform services**
  - [ ] config-server
  - [ ] discovery-server (Eureka)
  - [ ] api-gateway
  - [ ] auth-service (OAuth2/JWT + Keycloak realm config)
- [ ] **Phase 3 — Domain microservices**
  - [ ] user-service (MySQL)
  - [ ] team-service (MySQL)
  - [ ] project-service (MySQL)
  - [ ] task-service (MySQL + Redis cache)
  - [ ] notification-service (WebSocket + RabbitMQ)
  - [ ] analytics-service (Elasticsearch + Kafka consumer + Spring AI)
- [ ] **Phase 4 — Data & messaging wiring**
  - [ ] Kafka topics for task/project events
  - [ ] RabbitMQ for notification delivery
  - [ ] Redis caching layer
  - [ ] Elasticsearch indexing for search/analytics
- [ ] **Phase 5 — Infra & deployment**
  - [ ] docker-compose full local stack
  - [ ] Kubernetes manifests
  - [ ] Terraform AWS modules
  - [ ] Nginx reverse proxy / load balancer config
- [ ] **Phase 6 — CI/CD & observability**
  - [ ] GitHub Actions pipeline (build, test, sonar, docker push)
  - [ ] Prometheus + Grafana dashboards
  - [ ] ELK logging stack

Each checklist item lands as one or more real commits (feature-scoped, not
padding), so the commit count reflects actual incremental work.