from sqlalchemy.orm import Session
from models.models import Todo

def get_todos(db: Session):
    return db.query(Todo).all()


def create_todo(db: Session, title: str, completed: bool = False):
    todo = Todo(Title=title, IsCompleted=completed)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


def complete_todo(db: Session, todo_id: int):
    todo = db.query(Todo).filter(Todo.Id == todo_id).first()
    if not todo:
        return None

    todo.IsCompleted = True
    db.commit()
    db.refresh(todo)
    return todo


def update_todo(db: Session, todo_id: int, data):
    todo = db.query(Todo).filter(Todo.Id == todo_id).first()
    if not todo:
        return None

    if data.title is not None:
        todo.Title = data.title

    if data.completed is not None:
        todo.IsCompleted = data.completed

    db.commit()
    db.refresh(todo)
    return todo


def delete_todo(db: Session, todo_id: int):
    todo = db.query(Todo).filter(Todo.Id == todo_id).first()
    if not todo:
        return None

    db.delete(todo)
    db.commit()
    return True
