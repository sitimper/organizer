from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tools.charts.router import router as charts_router

app = FastAPI()

routers = [charts_router]

for router in routers:
    app.include_router(router)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)