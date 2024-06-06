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

function manipularFormulario(){
    const form_animal = document.getElementById('formulario-cadastro')
    const input_nome_pai_mae = document.getElementById('nome_pai_mae')
    const input_email = document.getElementById('email')
    const input_tel = document.getElementById('tel')
    const input_nome_pet = document.getElementById('nome_pet')
    const input_data_consulta = document.getElementById('data')
    const input_hora_consulta = document.getElementById('hora')
    const input_pet = document.getElementById('pet')
    const macho = document.getElementById('macho')
    const femea = document.getElementById('femea')
    
    

    form_animal.onsubmit = async (event) =>{
        event.preventDefault()
        const nome_pai_mae = input_nome_pai_mae.value
        const hora = input_hora_consulta.value
        const email = input_email.value
        const tel = input_tel.value
        const nome_pet = input_nome_pet.value
        const data_consulta = input_data_consulta.value
        const pet = input_pet.value
                
        axios.post('http://localhost:8080/consultas',{
            id : "null",
            nome : String(nome_pai_mae),
            email : String(email),
            tel : String(tel),
            nome_pet : String(nome_pet),
            data : String(data_consulta),
            hora : String(hora),
            pet : String(pet),
            sexo : document.querySelector('input[name="sexo"]:checked').value,
            procedimento : "string",
            add_ons : "string"
        })
        
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