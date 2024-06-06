from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import random
from uuid import uuid4


app = FastAPI()

origins = ['http://127.0.0.1:5500']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class Consulta(BaseModel):
    id : Optional [str]
    nome : Optional [str]
    email : Optional [str]
    tel : Optional [str]
    nome_pet : Optional [str]
    data : Optional [str]
    hora : Optional [str]
    pet : Optional [str]
#   idade : int
    sexo : Optional [str]
    procedimento : Optional [str]
    add_ons : Optional [str]

banco : List[Consulta] = []


@app.get('/')
def home():
    return {'message' : 'Seja bem vindo.'}


@app.get('/consultas')
def listar_consultas():
    return banco

@app.get('/consulta/{id}')
def consulta_id(id:str):
    for consulta in banco:
        if consulta.id == id:
            return consulta
    return {"mensagem" : "Consulta não localizada"}

@app.post('/consultas')
def marcar_consulta(consulta : Consulta):
    consulta.id = str(uuid4())
    banco.append(consulta)
    return{'messagem' : 'Consulta agendada com sucesso'}

@app.delete('/consulta/{id}')
def cancelar_consulta(id:str):
    for consulta in banco:
        if consulta.id == id:
            banco.remove(consulta)

    return {"mensagem" : "Consulta cancelada com sucesso"}
