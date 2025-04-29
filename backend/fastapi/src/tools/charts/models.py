from sqlmodel import Field, Relationship, SQLModel
from tools.models import Tool

class Chart(Tool, table=True):
    id: int | None = Field(default=None, primary_key=True)
    labels: str | None = Field(default=None)
    datasets: list["ChartDataset"] | None = Relationship(back_populates="chart")
    options: str | None = Field(default=None)

class ChartDataset(SQLModel, table=True):
    __tablename__: str = "chart_dataset"

    id: int | None = Field(default=None, primary_key=True)
    data: str | None = Field(default=None)
    chart_id: int = Field(foreign_key="chart.id")
    chart: Chart = Relationship(back_populates="datasets")