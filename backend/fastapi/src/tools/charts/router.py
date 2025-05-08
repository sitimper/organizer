from fastapi import APIRouter, HTTPException, status, Form
from dependencies import SessionDep
from .service import (
    get_chart_db, 
    get_charts_db, 
    create_chart_db, 
    get_chart_datasets_db, 
    create_chart_dataset_db, 
    delete_chart_datasets_db,
    get_chart_labels_db, 
    add_chart_labels_db,
    delete_chart_labels_db,
)
from .utils import process_chart_dataset

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


@router.get("/charts/{chart_id}/get-chart-labels")
async def get_chart_labels(chart_id: int, session = SessionDep):
    labels = get_chart_labels_db(session=session, chart_id=chart_id)
    if labels is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Datasets not found"
        )

    return {"labels": labels}

@router.post("/charts/{chart_id}/update-chart-labels")
async def add_chart_labels(chart_id: int, labels: str = Form(), session = SessionDep):
    labels = add_chart_labels_db(session=session, chart_id=chart_id, labels=labels)
    if labels is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Datasets not found"
        )

    return {"labels": labels}

@router.post("/charts/{chart_id}/delete-chart-labels")
async def delete_chart_labels(chart_id: int, labels_indices: str = Form(), session = SessionDep):
    labels = delete_chart_labels_db(session=session, chart_id=chart_id, labels_indices=labels_indices)
    if labels is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Datasets not found"
        )

    return {"labels": labels}

@router.get("/charts/{chart_id}/get-chart-datasets")
async def get_chart_datasets(chart_id: int, session = SessionDep):
    datasets = get_chart_datasets_db(session=session, chart_id=chart_id)
    if datasets is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Datasets not found"
        )

    return {"datasets": datasets}
    

@router.post("/charts/{chart_id}/create-chart-dataset")
async def create_chart_dataset(
    chart_id: int,
    data: str = Form(),
    label: str = Form(),
    border_color: str = Form(),
    background_color: str = Form(),
    session = SessionDep
    ):
    dataset_data = process_chart_dataset(label=label, data=data, border_color=border_color, background_color=background_color)
    dataset = create_chart_dataset_db(session=session, chart_id=chart_id, data=dataset_data)
    if dataset is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Dataset not created"
        )
    
    return {"dataset": dataset}

@router.post("/charts/{chart_id}/delete-chart-datasets")
async def delete_chart_datasets(chart_id: int, datasets: str = Form(),  session = SessionDep):
    datasets = delete_chart_datasets_db(session=session, chart_id=chart_id, datasets=datasets)