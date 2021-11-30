const converterMoeda = (evento) =>{
    evento.preventDefault();

    var moeda = document.querySelector('[data-moeda]');
    moeda = moeda.value + '-BRL';
    //moeda = 'BRL-' + moeda.value;

    const url = `https://economia.awesomeapi.com.br/json/last/${moeda}`;
    const options = {
        method: 'GET',
        mode: 'cors',
        Headers: {
            'content-type':'application/json;charset=utf-8'
        }
    }

    fetch(url, options).then(
        response => response.json()
    ).then(
        data =>{
            localStorage.setItem('resultado', converterValor(data[Object.keys(data)[0]]));
        }
    )
    window.location.href = './resultado.html';
    
}
const converterBtn = document.querySelector('[data-converter]');
converterBtn.addEventListener('click', converterMoeda);

function converterValor(data){
    const valor = parseFloat(document.querySelector('[data-valor]').value);
    const resultado = valor * data.ask;

    return parseFloat(resultado);
}