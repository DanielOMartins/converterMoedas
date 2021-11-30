const resultado = document.querySelector('[data-resultado]');

var resultadoConversao = localStorage.getItem('resultado');
resultadoConversao = parseFloat(resultadoConversao);
resultadoConversao = resultadoConversao.toLocaleString({style: 'currency', currency: 'BRL'});


resultadoConversao = document.createTextNode(resultadoConversao);
resultado.appendChild(resultadoConversao);


const resultadoBtn = document.querySelector('[data-resultado-btn]');
resultadoBtn.addEventListener('click', (evento) =>{
    evento.preventDefault();

    window.location.href = './index.html';
})