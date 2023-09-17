const formulario = document.getElementById('formulario')
const OPENAI_API_KEY = "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";
//corHora();

if (formulario){

    formulario.addEventListener("submit", async (e) => {

        // Impede o recarregamento automatico da página ao clicar no botão
        e.preventDefault();

        let pergunta = document.getElementById('campoPergunta').value;
        let inicioPergunta = 'Descreva 5 pontos turisticos de, citando apenas os seus nomes sem escrever como eles são, apenas a lista numerica com os pontos turisticos, faça em uma lista onde cada ponto fique em baixo do outro';
        pergunta = inicioPergunta + pergunta;

        //Associação com o chatGpt
        await fetch ("https://api.openai.com/v1/completions", {
        
            method: "POST",

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY
            },

            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: pergunta,
                max_tokens: 2048,
                temperature: 0.5
            }),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            //document.getElementById('resposta').innerHTML = dados.choices[0].text;
        })
        .catch (() => {
            //document.getElementById('resposta').innerHTML = 'Sem resposta'; 
        });
    document.getElementById('botao').value = "Descobrindo!";
    });
}

if (formulario){

    formulario.addEventListener("submit", async (e) => {

        // Impede o recarregamento automatico da página ao clicar no botão
        e.preventDefault();

        let pergunta = document.getElementById('campoPergunta').value;
        let pais = pergunta;
        let inicioPergunta = 'me de a previsão do tempo dos proximos 5 dias, fale o dia e a temperatura maxima e minima, e se vai chover ou não, quando dizer os dias escreva segunda feira etc, considere esses dados da  capital do país mas não cite ela.';
        pergunta = inicioPergunta + pergunta;
       
        //Associação com o chatGpt
        await fetch ("https://api.openai.com/v1/completions", {
        
            method: "POST",

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY
            },

            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: pergunta,
                max_tokens: 2048,
                temperature: 0.5
            }),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            //document.getElementById('resposta2').innerHTML = 'Considerando a capital, ' + dados.choices[0].text;
        })
        .catch (() => {
            //document.getElementById('resposta2').innerHTML = 'Sem resposta'; 
        });
        document.getElementById('botao').value = "Descobrir";
    });
}

//Função da cor de fundo padrão ao abrir o site // aplicativo
/*function corHora(){

    var currentTime = new Date().getHours();
    if (6 <= currentTime && currentTime < 7) {

        document.body.style.backgroundColor = "white";

    }else if (7 <= currentTime && currentTime < 8) {

        document.body.style.backgroundColor = "aliceblue";

    }else if (8 <= currentTime && currentTime < 9) {

        document.body.style.backgroundColor = "#E6E6FA";
        
    }else if (9 <= currentTime && currentTime < 10) {

        document.body.style.backgroundColor = "#E0FFFF";
        
    }else if (10 <= currentTime && currentTime < 11) {

        document.body.style.backgroundColor = "#FFFFF0";

    }else if (11 <= currentTime && currentTime < 12) {
            
        document.body.style.backgroundColor = "#FFFACD";
    }else if (13 <= currentTime && currentTime < 14) {

        document.body.style.backgroundColor = "white";

    }else if (15 <= currentTime && currentTime < 16) {

        document.body.style.backgroundColor = "aliceblue";

    }else if (17 <= currentTime && currentTime < 18) {

        document.body.style.backgroundColor = "#E6E6FA";
        
    }else if (19 <= currentTime && currentTime < 20) {

        document.body.style.backgroundColor = "#E0FFFF";
        
    }else if (21 <= currentTime && currentTime < 22) {

        document.body.style.backgroundColor = "#FFFFF0";

    }else if (23 <= currentTime && currentTime < 24) {
                
        document.body.style.backgroundColor = "#FFFACD";

    }else if (0 <= currentTime && currentTime < 1) {

        document.body.style.backgroundColor = "white";

    }else if (1 <= currentTime && currentTime < 2) {

        document.body.style.backgroundColor = "aliceblue";

    }else if (2 <= currentTime && currentTime < 3) {
            
        document.body.style.backgroundColor = "#E6E6FA";

    }else if (3 <= currentTime && currentTime < 4) {
            
        document.body.style.backgroundColor = "#E0FFFF";

    }else if (4 <= currentTime && currentTime < 5) {
                
        document.body.style.backgroundColor = "#FFFFF0";

    }else if (5 <= currentTime && currentTime < 6) {
                        
        document.body.style.backgroundColor = "#FFFACD";
    }   
}*/

//Função que altera a cor ao clicar no botão
/*function corBotao(){

    var numero = Math.floor(Math.random() * 5) + 1;
    
    if (numero == 1) {
        document.body.style.backgroundColor = "blue";
    }else if (numero == 2) {
        document.body.style.backgroundColor = "red";
    }else if (numero == 3) {
        document.body.style.backgroundColor = "green";
    }else if (numero == 4) {
        document.body.style.backgroundColor = "yellow";
    }else if (numero == 5) {
        document.body.style.backgroundColor = "purple";
    }

}*/

if (formulario){
    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();
        corBotao();

        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        
        //document.getElementById('resposta3').innerHTML = 'Esses dados foram gerados no dia ' + dia + '/' + mes + '/' + ano;

    });
}

function sendMessage(){
    let pergunta = document.getElementById('campoPergunta').value;
    let inicioPergunta = 'Me mostre os pontos turisticos de ' + pergunta;

    var status = document.getElementById('status');
    var botao = document.getElementById('botao');

    status.innerHTML = 'Descobrindo...';
    // atenção a isso
    botao.disabled = true;
    botao.style.cursor = 'not-allowed';

    

}
