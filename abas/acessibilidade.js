/* Configuração da API de Acessibilidade */
/* VLibras */
fetch('./html/components/vlibras.html')
.then(response => response.text())
.then(data => {
    document.getElementById('my-i-vlibrasImportacao').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar a página', error));