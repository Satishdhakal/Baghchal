from fastapi import FastAPI 

app = FastAPI()

@app.get("/homepage")
def index():
    return ('test')