const raiz = document.getElementById('lista');
/*
var xhr = new XMLHttpRequest();
xhr.open('GET',
'http://juliovasquez.pythonanywhere.com/api/funcionarios');

xhr.onload = function() {
    var data = JSON.parse(xhr.response);

    data.funcionarios.forEach(element => {
        // criamos a linha da tabela
        var linha = document.createElement('tr');
        raiz.appendChild(linha);
        
        // Criamos as colunas
        var funcionario = document.createElement('td');
        funcionario.textContent = element.nome_usuario;
        linha.appendChild(funcionario);

        // 
        var hora = document.createElement('td');
        hora.textContent = element.data;
        linha.appendChild(hora);
    });
}
xhr.send();
*/


fetch('http://juliovasquez.pythonanywhere.com/api/funcionarios') // get por padrão
.then(res => {return res.json();})
.then(data => {
    data.funcionarios.forEach(element => {
        // criamos a linha da tabela
        var linha = document.createElement('tr');
        raiz.appendChild(linha);
        
        // Criamos as colunas
        var funcionario = document.createElement('td');
        funcionario.textContent = element.nome_usuario;
        linha.appendChild(funcionario);

        // 
        var hora = document.createElement('td');
        hora.textContent = element.data;
        linha.appendChild(hora);
    });
}) 
.cath(err => {
    console.log('Ocorreu um problema.');
})
.finally(() => {
    console.log('Linha que sempre aparece no final.');
})


/*
https://www.npmjs.com/package/axios
https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
*/