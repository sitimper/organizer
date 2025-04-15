from sqlmodel import SQLModel, create_engine
from models import *

db_file_name = "main.db"
db_url = f"sqlite:///backend/databases/{db_file_name}"

engine = create_engine(db_url, echo=True)

if __name__ == "__main__":  
    SQLModel.metadata.create_all(engine)