from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# SQLALCHEMY_DATABASE_URL = "mssql+pyodbc://@(localdb)\\MSSQLLocalDB/cli_todo_db?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"

SQLALCHEMY_DATABASE_URL = (
    "mssql+pyodbc://sa:YourStrong!Passw0rd@mssql:1433/cli_todo_db"
    "?driver=ODBC+Driver+17+for+SQL+Server"
)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()