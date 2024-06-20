const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que tem poluição?",
        alternativas: [
            " Ela é geralmente provocada pelo humano e suas atividades. ",
            "Por conta das alteraçõe químicas e físicas da natureza. "
        ]
    },
    {
        enunciado: "Como se forma a lava dos vulcões?",
        alternativas: [
            "Quando as placas tectônicas se chocam. ",
            "Com o tempo chuvoso se forma um abertura no chão. "
        ]
    },
    {
        enunciado: "Como ajudar na poluição?",
        alternativas: [
            "Fazendo multirões para ajudar retirar os lixos da rua.",
            "Jogar lixos em qualquer lugar. "
        ]
    },
    {
        enunciado: "Qual a importância do Meio Ambiente?",
        alternativas: [
            "Onde estão os recursos naturais necessários para a nossa sobrevivência.",
            "Apenas para preservar a natureza."
        ]
    },
    {
        enunciado: "O que é desmatamento?",
        alternativas: [
            "É um processo pelo qual vastas áreas de florestas são deliberadamente removidas ou degradadas.",
            "É um processo pelo qual são implantadas várias árvores em uma determinada região."
        ]
    },
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()