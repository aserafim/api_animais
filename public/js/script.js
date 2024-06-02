$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});

// async function carregarAnimais(){
//     const response = await axios.get('http://localhost:8080/animais')
//     const animais = response.data
//     const lista = document.getElementById("lista-animais")

//     lista.innerHTML = ''

//     animais.forEach(animal => {
//         const item = document.createElement('li')
//         item.innerText = animal.nome
//         lista.appendChild(item)
//     });

// }

function manipularFormulario(){
    const form_animal = document.getElementById('formulario-cadastro')
    const input_nome_pai_mae = document.getElementById('nome_pai_mae')
    const input_hora = document.getElementById('hora')
    //const input_sexo = document.getElementById('sexo')
    //const input_cor = document.getElementById('cor')

    form_animal.onsubmit = async (event) =>{
        event.preventDefault()
        const hora = input_hora.value
        //const idade_animal = input_idade.value
        //const sexo_animal = input_sexo.value
        //const cor_animal = input_cor.value
        
        // axios.post('http://localhost:8080/animais',{
        //     id : null,
        //     nome: nome_animal,
        //     idade: Number(idade_animal),
        //     sexo: sexo_animal,
        //     cor: cor_animal
        // })

        //carregarAnimais()
        alert(`O nome do pai/mãe é ${hora}`)

    }
}

// async function preenche_formulario(){
//      const response = await axios.get('http://localhost:8080/animais')
//      const animais = response.data
//      const nome_pai = document.getElementById("nome_pai_mae")
    
//      alert(`O nome do pai/mãe é ${nome_pai}`)

// }

//main
function app(){
    //carregarAnimais()
    //manipularFormulario()
    //alert('App iniciado')
    //preenche_formulario()
    manipularFormulario()
}

//executa a main
app()