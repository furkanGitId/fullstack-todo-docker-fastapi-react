from pydantic import BaseModel, Field
from datetime import datetime

class TodoBase(BaseModel):
    title: str
    completed: bool = False

class TodoCreate(TodoBase):
    pass

class TodoUpdate(BaseModel):
    title: str | None = None
    completed: bool | None = None

class TodoResponse(BaseModel):
    id: int = Field(validation_alias="Id")
    title: str = Field(validation_alias="Title")
    completed: bool = Field(validation_alias="IsCompleted")

    class Config:
        from_attributes = True
