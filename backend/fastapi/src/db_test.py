from sqlmodel import Session
from database import engine
from models import Test

def create_test(message):
    test = Test(message=message)

    with Session(engine) as session:
        session.add(test)
        session.commit()

create_test("Hello world")