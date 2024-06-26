async function carregarAnimais(){
    const response = await axios.get('http://localhost:8080/animais')
    const animais = response.data
    const lista = document.getElementById("lista-animais")

    lista.innerHTML = ''

    animais.forEach(animal => {
        const item = document.createElement('li')
        item.innerText = animal.nome
        lista.appendChild(item)
    });

}

function manipularFormulario(){
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')
    const input_idade = document.getElementById('idade')
    const input_sexo = document.getElementById('sexo')
    const input_cor = document.getElementById('cor')

    form_animal.onsubmit = async () =>{
        event.preventDefault()
        const nome_animal = input_nome.value
        const idade_animal = input_idade.value
        const sexo_animal = input_sexo.value
        const cor_animal = input_cor.value
        
        axios.post('http://localhost:8080/animais',{
            id : null,
            nome: nome_animal,
            idade: Number(idade_animal),
            sexo: sexo_animal,
            cor: cor_animal
        })

        carregarAnimais()

    }


}

//main
function app(){
    carregarAnimais()
    manipularFormulario()
}

//executa a main
app()