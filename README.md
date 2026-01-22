# Full Stack Todo App (Dockerized)

A full stack Todo application built using **Python FastAPI**, **React**, and **Microsoft SQL Server**, fully containerized with **Docker Compose**.

This project demonstrates real-world full stack development practices including API design, frontend architecture, database integration, and Docker-based deployment.

---

## 🚀 Tech Stack

### Backend
- **Python**
- **FastAPI**
- **SQLAlchemy**
- **MSSQL** (SQL Authentication)
- **Uvicorn**

### Frontend
- **React**
- **Axios**
- **Bootstrap**
- **Nginx** (for production build)

### Database
- **Microsoft SQL Server 2022**

### DevOps
- **Docker**
- **Docker Compose**

---

## 📁 Project Structure

```text
fullstack-todo-docker-fastapi-react/
│
├── backend/
│   ├── app/
│   │   ├── crud/              # Database logic (Create, Read, Update, Delete)
│   │   │   ├── __init__.py
│   │   │   └── crud.py
│   │   │
│   │   ├── models/            # SQLAlchemy/Database models
│   │   │   ├── __init__.py
│   │   │   └── models.py
│   │   │
│   │   ├── routers/           # API route handlers
│   │   │   └── todos.py
│   │   │
│   │   ├── schemas/          # Pydantic schemas (Validation)
│   │   │   ├── __init__.py
│   │   │   └── schemas.py
│   │   │
│   │   ├── database.py      # Database connection & Session
│   │   └── main.py          # Application entry point
│   │
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .venv/              # Local virtual environment (ignored in Docker & Git)
│
├── frontend/
│   └── todo-ui/
│       ├── node_modules/        # Installed dependencies (ignored in Docker & Git)
│       ├── public/              # Static files
│       │   └── index.html
│       ├── src/
│       │   ├── api/             # API layer (backend communication)
│       │   │   └── todoApi.js
│       │   ├── components/      # Reusable UI components
│       │   │   ├── TodoForm.jsx
│       │   │   ├── TodoItem.jsx
│       │   │   └── TodoList.jsx
│       │   ├── hooks/           # Custom React hooks
│       │   │   └── useTodos.js
│       │   ├── pages/           # Page-level components
│       │   │   └── TodoPage.jsx
│       │   ├── App.js           # Root application component
│       │   ├── App.css          # Global app styles
│       │   ├── index.js          # Application entry point
│       │   ├── index.css         # Global CSS
│       │   ├── App.test.js      # Unit tests
│       │   ├── reportWebVitals.js
│       │   └── setupTests.js
│       ├── .dockerignore        # Files excluded from Docker build
│       ├── .gitignore           # Files excluded from Git
│       ├── Dockerfile           # Frontend Docker configuration
│       └── package.json         # Project metadata and scripts
│
├── docker-compose.yml
└── README.md
```

---

### `app/main.py`

*   Entry point of the FastAPI application
    
*   Initializes the app
    
*   Registers routers
    
*   Configures middleware (CORS, etc.)
    

### `app/database.py`

*   SQLAlchemy database configuration
    
*   Creates database engine and session
    
*   Handles MSSQL connection using SQL Authentication
    

### `app/models/`

*   Contains SQLAlchemy ORM models
    
*   Represents database tables
    
*   Example: `Todo` model maps to the `Todos` table
    

### `app/schemas/`

*   Pydantic models for request and response validation
    
*   Ensures data integrity between client and server
    
*   Separates API contracts from database models
    

### `app/crud/`

*   Contains database business logic (Create, Read, Update)
    
*   Keeps database queries separate from API routes
    
*   Makes the application easier to test and maintain
    

### `app/routers/`

*   Contains API route definitions
    
*   Each router handles a specific feature or domain
    
*   Example: `todos.py` manages all Todo-related endpoints
    

* * *


🔁 Request Flow (How Everything Works Together)
-----------------------------------------------
```
React UI

  ↓

API Router (routers/)

  ↓

Schema Validation (schemas/)

  ↓

Business Logic (crud/)

  ↓

Database Models (models/)

  ↓

MSSQL Database
```

---

🗄️ Database (`db/`)
--------------------

```
db/

└── Todos.sql
```

### Purpose

The `db` folder contains SQL scripts related to database setup and initialization.

### `Todos.sql`

*   Defines the **Todos table**
    
*   Used for manual database initialization or reference

---

### `src/api/`

*   Handles all HTTP communication with the backend
    
*   Uses Axios for API calls
    
*   Keeps API logic separate from UI logic
    

Example:

*   `todoApi.js` → calls FastAPI `/todos` endpoints
    

* * *

### `src/hooks/`

*   Contains custom React hooks
    
*   Encapsulates business logic and state management
    
*   Keeps components clean and focused on UI
    

Example:

*   `useTodos.js` → manages fetching, creating, and updating todos
    

* * *

### `src/components/`

*   Reusable UI components
    
*   Stateless or minimally stateful
    
*   Focused purely on presentation
    

Examples:

*   TodoForm
    
*   TodoList
    
*   TodoItem
    

* * *

### `src/pages/`

*   Page-level components
    
*   Represents full screens or views
    
*   Composes multiple components and hooks together
    

Example:

*   `TodoPage.js` → main Todo screen
    

* * *

### `App.js`

*   Root React component
    
*   Responsible for rendering pages
    
*   Kept intentionally minimal
    

* * *

### `index.js`

*   Application entry point
    
*   Mounts React app to the DOM
    
*   Imports global styles

---



## ✨ Features

- **Create Todo**: Add new tasks to the list.
- **List Todos**: View all existing tasks.
- **Mark Todo as Completed**: Update the status of a task.
- **RESTful API**: Robust backend with validation and error handling built with FastAPI.
- **Clean React Architecture**: Structured frontend using dedicated components, hooks, and API service layers.
- **Persistent Database Storage**: Uses SQL Server running in a Docker container for data persistence.
- **Fully Dockerized Setup**: Ensures a consistent, production-ready workflow with no local dependency conflicts.

---

## 🐳 Getting Started with Docker

The entire application can be built and run with a few simple commands, thanks to Docker Compose.

### Prerequisites

You must have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/furkanGitId/fullstack-todo-docker-fastapi-react.git
   cd fullstack-todo-docker-fastapi-react
   ```

2. **Build and run containers**

   This command will build the images for the React frontend and FastAPI backend, and start all services (including the SQL Server database).

   ```bash
   docker-compose down -v
   docker-compose build --no-cache
   docker-compose up
   ```

3. **Access the application**

   Once the containers are running, you can access the services at the following URLs:

| Service | URL |
| :--- | :--- |
| Frontend | `http://localhost:3000` |
| Backend API | `http://localhost:8000` |
| Swagger Docs | `http://localhost:8000/docs` |
| SQL Server | `localhost:1433` |

---

## 🧪 API Endpoints

The FastAPI backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/todos` | Get all todos |
| `POST` | `/todos` | Create new todo |
| `PUT` | `/todos/{id}` | Mark todo as completed |

---

## 🔐 Database Configuration

The project uses a dedicated SQL Server instance running within the Docker environment.

- **Database**: SQL Server
- **Authentication**: SQL Authentication is used.
- **Credentials**: Defined within the `docker-compose.yml` file for easy configuration.

**Example Connection String (used by the backend service):**

```text
mssql+pyodbc://sa:YourStrong!Passw0rd@mssql:1433/TodoDb
```

---

## 📦 Why Docker?

This project leverages Docker for several key benefits:

- **Consistent Environment**: Guarantees that the application runs the same way on all machines (development, staging, production).
- **Easy Setup**: Eliminates the "it works on my machine" problem and allows new developers to get started instantly.
- **Production-Ready Workflow**: Mimics a real-world deployment scenario.
- **No Local Dependency Conflicts**: Isolates the project's dependencies from your local system.

---

## 📈 Future Improvements

The following features are planned for future development:

- JWT Authentication for secure access.
- `DELETE` and `UPDATE` endpoints for full CRUD functionality.
- Environment-based configurations (e.g., using `.env` files).
- CI/CD pipeline integration.
- Unit and integration tests.

---

## 👨‍💻 Author & Acknowledgements

This project was built as a learning-focused full-stack example to practice real-world development using modern tools and best practices.

⭐ If you like this project, please consider giving it a star on GitHub! Feel free to fork the repository or contribute to its improvement.


---

## ✅ WHAT THIS README DOES WELL

- Explains **what** the project is
- Shows **architecture maturity**
- Recruiters understand it in 30 seconds
- Easy for anyone to run locally
- Looks professional and complete

---

## NEXT OPTIONAL STEPS (HIGHLY RECOMMENDED)

1. Add screenshots (frontend UI)
2. Add `.env.example`
3. Add GitHub topics:
   - `fastapi`
   - `react`
   - `docker`
   - `mssql`
   - `fullstack`

If you want, next I can:
- Review your GitHub repo before publishing
- Improve README wording for recruiters
- Add architecture diagram
- Prepare this as a **portfolio project**

Just tell me 👍

