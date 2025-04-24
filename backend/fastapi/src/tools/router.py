from fastapi import APIRouter, HTTPException, status, Form
from dependencies import SessionDep
from .service import get_graph_db, get_graphs_db, create_graph_db

router = APIRouter(
    prefix="/tools",
    tags=["Tools"]
)

@router.get("/graphs/{id}")
async def get_graph(id: int, session = SessionDep):
    graph = get_graph_db(session=session, id=id)
    if graph is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Graph not found"
        )

    return {"tool": graph}

@router.get("/graphs")
async def get_graph(session = SessionDep):
    graphs = get_graphs_db(session=session)
    if graphs is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Graphs not found"
        )
    return {"tools": graphs}


@router.post("/create-graph")
async def create_graph(type: str = Form(), title: str = Form(), description: str | None = Form(), thumbnail_url: str | None = Form(), session = SessionDep):
    graph = create_graph_db(session=session, type=type, title=title, description=description, thumbnail_url=thumbnail_url)
    if graph is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Graph not created"
        )
    return {"graph": graph}