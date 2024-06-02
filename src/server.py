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


@app.get('/animais')
def listar_animais():
    return banco

@app.get('/animais/{id}')
def animal(id:str):
    for animal in banco:
        if animal.id == id:
            return animal
    return {"mensagem" : "Não localizado"}

@app.post('/animais')
def inserir_animal(animal : Consulta):
    animal.id = str(uuid4())
    banco.append(animal)
    return{'messagem' : 'Animal cadastrado com sucesso'}

@app.delete('/animais/{id}')
def remove_animal(id:str):
    for animal in banco:
        if animal.id == id:
            banco.remove(animal)

    return {"mensagem" : "Animal removido com sucesso"}
