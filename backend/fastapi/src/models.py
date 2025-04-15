from sqlmodel import Field, SQLModel

class Test(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    message: str