const formulario = document.getElementById('formulario')
const OPENAI_API_KEY = "";

if (formulario){

    formulario.addEventListener("submit", async (e) => {

        // Impede o recarregamento automatico da página ao clicar no botão
        e.preventDefault();

        pergunta = document.getElementById('campoPergunta').value;

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

    })
}