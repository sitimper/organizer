from sqlmodel import Field, SQLModel


class Tool(SQLModel):
    type: str
    title: str
    description: str | None
    thumbnail_url: str | None = Field(default=None)
    date_created: str

class Graph(Tool, table=True):
    id: int | None = Field(default=None, primary_key=True)
    graph_number: int = Field(default=0)
    datasets: str | None = Field(default=None)