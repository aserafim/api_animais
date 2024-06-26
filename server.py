from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import random
from uuid import uuid4

app = FastAPI()


class Animal(BaseModel):
    id : Optional [str]
    nome : str
    idade : int
    sexo : str
    cor : str

banco : List[Animal] = []


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
def inserir_animal(animal : Animal):
    animal.id = str(uuid4())
    banco.append(animal)
    return{'messagem' : 'Animal cadastrado com sucesso'}

@app.delete('/animais/{id}')
def remove_animal(id:str):
    for animal in banco:
        if animal.id == id:
            banco.remove(animal)

    return {"mensagem" : "Animal removido com sucesso"}
