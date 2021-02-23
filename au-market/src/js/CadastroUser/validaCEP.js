//JS para validação de CEP
const validaCEP = function () {

    //pegando a info do campo cep
    var cep = document.querySelector("#cep")

    const showData = function (result) {
        //loop para autocompletar os campos com o nome equivalente
        for (const campo in result) {
            //verifica
            if (document.querySelector("#" + campo)) {
                //completa o campo
                document.querySelector("#" + campo).value = result[campo]
            }
        }
    }

    let search = cep.value.replace("-", "")
    //opcoes padroes para a requisição da API
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //Requisição
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    showData(data)
                });
        })
        //Verifica se deu erro
        .catch(function (e, message) {
            console.log('Deu Erro: ' + e, message)
        });
}

export default validaCEP