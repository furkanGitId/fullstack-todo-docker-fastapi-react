from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas import schemas
from database import get_db
from crud import crud
from fastapi import HTTPException

router = APIRouter(prefix="/todos", tags=["todos"])

# GET /todos
@router.get("/get", response_model=list[schemas.TodoResponse])
def read_todos(db: Session = Depends(get_db)):
    try:
        return crud.get_todos(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# POST /todos
@router.post("/add", response_model=schemas.TodoResponse)
def add_todo(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_todo(db, todo.title, completed=todo.completed)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# PUT /todos/{todo_id}
@router.put("/update/{todo_id}", response_model=schemas.TodoResponse)
def update_todo(
    todo_id: int,
    todo: schemas.TodoUpdate,
    db: Session = Depends(get_db)
):
    updated = crud.update_todo(db, todo_id, todo)
    if not updated:
        raise HTTPException(status_code=404, detail="Todo not found")
    return updated


@router.delete("/delete/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_todo(db, todo_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"message": "Deleted"}

