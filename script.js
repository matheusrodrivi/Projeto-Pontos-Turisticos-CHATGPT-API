const formulario = document.getElementById('formulario')
const OPENAI_API_KEY = "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";

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
            document.getElementById('resposta').innerHTML = dados.choices[0].text;
        })
        .catch (() => {
            document.getElementById('resposta').innerHTML = 'Sem resposta'; 
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
            document.getElementById('resposta2').innerHTML = 'Considerando a capital, ' + dados.choices[0].text;
        })
        .catch (() => {
            document.getElementById('resposta2').innerHTML = 'Sem resposta'; 
        });
    });
}

function corHora(){

    var currentTime = new Date().getHours();
    if (13 <= currentTime && currentTime < 22) {

        document.body.style.backgroundColor = "red";

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

    }         
}

if (formulario){
    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();
        corHora();

        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        document.getElementById('resposta3').innerHTML = 'Esses dados foram gerados no dia ' + dia + '/' + mes + '/' + ano;

    });
}
