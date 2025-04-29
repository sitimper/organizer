from datetime import datetime
from sqlmodel import Session, select
from .models import Chart, ChartDataset

def get_chart_db(session: Session, id: int):
    return session.exec(select(Chart).where(Chart.id == id)).first()

def get_charts_db(session: Session):
    return session.exec(select(Chart)).all()

def create_chart_db(
        session: Session,
        type: str,
        title: str,
        description: str | None = None,
        thumbnail_url: str | None = None,
    ):
    chart = Chart(type=type, title=title, description=description, thumbnail_url=thumbnail_url, date_created=str(datetime.now())[:16])
    if chart is None:
        return None

    session.add(chart)
    session.commit()
    session.refresh(chart)

    return chart


def get_chart_dataset_db(session: Session, id: int):
    return session.exec(select(ChartDataset).where(ChartDataset.id == id)).first()

def get_chart_datasets_db(session: Session, chart_id: int):
    return session.exec(select(ChartDataset).where(ChartDataset.chart_id == chart_id)).all()

def create_chart_dataset_db(session: Session, chart_id: int, data: str):
    chart = get_chart_db(session=session, id=chart_id)
    dataset = ChartDataset(chart_id=chart_id, data=data)
    if dataset is None:
        return None
    
    chart.datasets.append(dataset)
    session.add(dataset)
    session.commit()
    session.refresh(dataset)

    return dataset