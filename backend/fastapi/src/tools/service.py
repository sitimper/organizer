from datetime import datetime
from sqlmodel import Session, select
from .models import Graph

def get_graph_db(session: Session, id: int):
    return session.exec(select(Graph).where(Graph.id == id)).first()

def get_graphs_db(session: Session):
    return session.exec(select(Graph)).all()

def create_graph_db(
        session: Session,
        type: str,
        title: str,
        description: str | None = None,
        thumbnail_url: str | None = None,
    ):
    graph = Graph(type=type, title=title, description=description, thumbnail_url=thumbnail_url, date_created=str(datetime.now())[:16])
    if graph is None:
        return None

    session.add(graph)
    session.commit()
    session.refresh(graph)

    return graph