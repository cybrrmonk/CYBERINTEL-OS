from celery import Celery
from pydantic import BaseModel

app = Celery('darkweb-worker', broker='redis://redis:6379/0', backend='redis://redis:6379/1')

class IntelTask(BaseModel):
    source: str
    payload: dict

@app.task(name='darkweb-worker.process')
def process(task: dict) -> dict:
    parsed = IntelTask(**task)
    return {
        'worker': 'darkweb-worker',
        'source': parsed.source,
        'status': 'processed',
        'keys': sorted(list(parsed.payload.keys())),
    }
