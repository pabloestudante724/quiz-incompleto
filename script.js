const quizData = [
    {
        question: "O que significa o 'Reduzir' nos 5Rs?",
        a: "Diminuir o consumo",
        b: "Reutilizar objetos",
        c: "Reciclar materiais",
        d: "Descartar corretamente",
        correct: "a"
    },
    {
        question: "Qual é um exemplo de 'Reutilizar'?",
        a: "Usar sacolas plásticas várias vezes",
        b: "Jogar fora papel usado",
        c: "Queimar lixo",
        d: "Comprar produtos novos",
        correct: "a"
    },
    {
        question: "O que é 'Reciclar'?",
        a: "Transformar materiais usados em novos produtos",
        b: "Descartar tudo no lixo",
        c: "Usar produtos descartáveis",
        d: "Reparar objetos quebrados",
        correct: "a"
    },
    {
        question: "O que significa 'Recusar'?",
        a: "Aceitar tudo que é oferecido",
        b: "Dizer não a produtos desnecessários",
        c: "Comprar mais do que precisa",
        d: "Doar itens usados",
        correct: "b"
    },
    {
        question: "Qual é a prática de 'Informar?",
        a: "Compartilhar conhecimento sobre sustentabilidade",
        b: "Falar sobre produtos novos",
        c: "Ignorar o problema ambiental",
        d: "Aumentar o consumo",
        correct: "a"
    },
    {
        question: "Como diminuir consumo de energia em data centers?",
        a: "Compra de equipamentos de TI",
        b: "Utilizar Papel Reciclado para impressões",
        c: "Virtualizar servidores para consolidar carga de trabalho",
        d: "Implementação de políticas de trabalho",
        correct: "c"
    },
    {
        question: "Qual dessas é uma prática de sustentabilidade?",
        a: "Manter servidores ativos 24 horas",
        b: "Politicas de reciclagem",
        c: "Deixar de fazer manuntenções",
        d: "Aumentar o consumo",
        correct: "b"
    },
    {
        question: "Qual desses não é um dos 5Rs?",
        a: "Reciclar",
        b: "Repensar",
        c: "Retornar",
        d: "Reduzir",
        correct: "c"
    },
    {
        question: "Qual dessas ações é de TI verde?",
        a: "Contribuir com a poluição do ambiente",
        b: "Aumentar consumo",
        c: "Ignorar o meio ambiente",
        d: "Priorizar fornecedores com selo verde",
        correct: "d"
    },
    {
        question: "Por que se chama Tecnologia Verde?",
        a: "Porque é desenvolvida pra ter impacto mínimo/nulo no ambiente",
        b: "Para desenvolver sites a respeito de conscientização ao ambiente",
        c: "Desenvolver jardins com diversas espécies de plantas",
        d: "Reduzir desmatamento",
        correct: "a"
    },
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quiz.innerHTML = '';
    quizData.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h3>${data.question}</h3>
            <label><input type="radio" name="question${index}" value="a"> ${data.a}</label><br>
            <label><input type="radio" name="question${index}" value="b"> ${data.b}</label><br>
            <label><input type="radio" name="question${index}" value="c"> ${data.c}</label><br>
            <label><input type="radio" name="question${index}" value="d"> ${data.d}</label><br>
        `;
        quiz.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((data, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === data.correct) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = calculateScore();
    resultContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
});

// Carregar o quiz ao iniciar a página
loadQuiz();