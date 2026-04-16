# Cloud-Based Manufacturing ERP System - Project Documentation

## 1. Project Overview
This project is a cloud-based ERP system developed for small and medium-sized manufacturing companies using **completely free** resources. The system covers material tracking, production orders, inventory management, and basic reporting.

- **Backend:** Spring Boot (Java 17)
- **Frontend:** Vue.js 3 (Composition API)
- **Database:** PostgreSQL (free tier with Neon.tech or ElephantSQL)
- **Deployment:** Backend: Render (free), Frontend: Netlify/Vercel
- **Storage:** GitHub (public repo)
- **CI/CD:** GitHub Actions

---

## 2. Technologies Used (Completely Free)

| Layer           | Technology                    | Free Resource                       |
|----------------|-------------------------------|--------------------------------------|
| Backend        | Spring Boot, Spring Security, JPA/Hibernate | Spring Initializr, IntelliJ CE |
| Frontend       | Vue 3, Vite, Pinia, Vue Router, Axios | VS Code, CDNs                  |
| Database       | PostgreSQL                     | Neon.tech (1GB) / ElephantSQL        |
| API Documentation | Swagger / OpenAPI 3         | springdoc-openapi-ui                |
| Identity Management | JWT (Access + Refresh Token) | N/A (we will write it ourselves)     |
| Logging        | SLF4J + Logback                | Built-in                             |
| Testing        | JUnit 5, Mockito (backend), Vitest (frontend) | -                             |
| CI/CD          | GitHub Actions                 | 2000 minutes/month free              |
| Hosting        | Render (backend), Netlify (frontend) | 750 hours/month free           |

---

## 3. System Architecture (Summary)