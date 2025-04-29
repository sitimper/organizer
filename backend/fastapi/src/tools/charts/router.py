from fastapi import APIRouter, HTTPException, status, Form
from dependencies import SessionDep
from .service import get_chart_db, get_charts_db, create_chart_db, get_chart_datasets_db, create_chart_dataset_db

router = APIRouter(
    prefix="/tools",
    tags=["Tools", "Charts"]
)

@router.get("/charts/{id}")
async def get_chart(id: int, session = SessionDep):
    chart = get_chart_db(session=session, id=id)
    if chart is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Chart not found"
        )

    return {"tool": chart}

@router.get("/charts")
async def get_chart(session = SessionDep):
    charts = get_charts_db(session=session)
    if charts is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Charts not found"
        )
    return {"tools": charts}


@router.post("/create-chart")
async def create_chart(
    type: str = Form(),
    title: str = Form(),
    description: str | None = Form(),
    thumbnail_url: str | None = Form(),
    session = SessionDep
    ):
    chart = create_chart_db(session=session, type=type, title=title, description=description, thumbnail_url=thumbnail_url)
    if chart is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Chart not created"
        )
    return {"chart": chart}


@router.get("/charts/{chart_id}/get-chart-datasets")
async def get_chart_datasets(chart_id: int, session = SessionDep):
    datasets = get_chart_datasets_db(session=session, chart_id=chart_id)
    if datasets is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Datasets not found"
        )

    return {"datasets": datasets}

@router.post("/charts/{id}/create-chart-dataset")
async def create_chart_dataset(chart_id: int, data: str, session = SessionDep):
    dataset = create_chart_dataset_db(session=session, chart_id=chart_id, data=data)
    if dataset is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Dataset not created"
        )
    
    return {"dataset": dataset}