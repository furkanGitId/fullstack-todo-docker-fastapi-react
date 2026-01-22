from datetime import datetime
from click import DateTime
from sqlalchemy import Integer, String, Boolean, DateTime
from database import Base
from sqlalchemy.orm import Mapped, mapped_column


class Todo(Base):
    __tablename__ = "Todos"

    # Using Mapped type hints fixes the "Literal[True] is not assignable" error
    Id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    Title: Mapped[str] = mapped_column(String(200), nullable=False)
    IsCompleted: Mapped[bool] = mapped_column(Boolean, default=False)
    CreatedAt: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)