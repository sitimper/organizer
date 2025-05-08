import json
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

def delete_chart_datasets_db(session: Session, chart_id: int, datasets: str):
    chart_datasets_list = get_chart_datasets_db(session=session, chart_id=chart_id)

    datasets_list = json.loads(datasets)

    print("DATASETS_LIST_IN_DB: ", chart_datasets_list)
    print("DATASETS_LIST: ", datasets_list)

    for dataset_id in datasets_list:
        dataset = get_chart_dataset_db(session=session, id=dataset_id)
        session.delete(dataset)

    session.commit()
    return chart_datasets_list

def get_chart_labels_db(session: Session, chart_id: int):
     return session.exec(select(Chart.labels).where(Chart.id == chart_id)).first()


def add_chart_labels_db(session: Session, chart_id: int, labels: str):
    chart = get_chart_db(session=session, id=chart_id)
    chart_labels = chart.labels

    labels = labels.split(";")
    for i in range(len(labels)):
        labels[i] = labels[i].strip()
    chart_labels_list: list = json.loads(chart_labels)
    chart_labels_list.extend(labels)
    
    chart.labels = json.dumps(chart_labels_list)

    session.commit()
    session.refresh(chart)

    return chart.labels

def delete_chart_labels_db(session: Session, chart_id: int, labels_indices: str):
    chart = get_chart_db(session=session, id=chart_id)
    chart_labels = chart.labels

    chart_labels_list: list = json.loads(chart_labels)


    labels_indices_list = json.loads(labels_indices)

    chart_labels_list = list(filter(lambda i: chart_labels_list.index(i) not in labels_indices_list, chart_labels_list))
    print(chart_labels_list)

    chart.labels = json.dumps(chart_labels_list)

    session.commit()
    session.refresh(chart)

    return chart.labels