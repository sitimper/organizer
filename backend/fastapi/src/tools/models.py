from sqlmodel import Field, SQLModel


class Tool(SQLModel):
    type: str
    title: str
    description: str | None
    thumbnail_url: str | None = Field(default=None)
    date_created: str