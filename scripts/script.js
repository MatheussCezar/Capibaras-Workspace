const botaoAdd = document.getElementById("botaoAdiciona");

let janelaAberta = false;

const main = document.querySelector("main");

const janela = criaJanela();

const botaoSair = criaSair()

janela.appendChild(botaoSair);

const form = criaForm();

janela.appendChild(form);

const trabalho = criaTrabalho(form);

const botaoSubmit = criaBotaoSubmit();

form.appendChild(botaoSubmit);

botaoAdd.addEventListener("click", abreJanela);
botaoSair.addEventListener("click", fechaJanela);

botaoSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const trabalho = obtemTrabalhoDoFormulario(form);

    const divTrabalho = criaTrabalho(trabalho);

    const trabalhos = document.getElementById("trabalhos");

    trabalhos.appendChild(divTrabalho);

    form.reset()
})

function abreJanela() {
    if (!janelaAberta) {
        main.appendChild(janela);
        janelaAberta = true;
    }
}

function fechaJanela() {
    main.removeChild(janela);
    janelaAberta = false;
}

function criaJanela() {
    const janela = document.createElement("div");
    janela.classList.add("janela");

    return janela;
}

function criaSair() {
    const botaoSair = document.createElement("button");
    botaoSair.textContent = "x";
    botaoSair.classList.add("sair");

    return botaoSair;
}

function criaForm() {
    const form = document.createElement("form");
    form.classList.add("formulario");

    const divNome = document.createElement("div");
    divNome.classList.add("campo");
    const labelNome = document.createElement("label");
    labelNome.textContent = "Nome do trabalho:";
    labelNome.htmlFor = "nome";
    const nomeInput = document.createElement("input");
    nomeInput.type = "text"
    nomeInput.name = "nome";
    nomeInput.id = "nome";
    nomeInput.classList.add("inputNome");
    nomeInput.placeholder = "Insira o nome do trabalho aqui";
    nomeInput.required = true;
    divNome.appendChild(labelNome);
    divNome.appendChild(nomeInput);

    const divData = document.createElement("div");
    divData.classList.add("campo");
    const labelData = document.createElement("label");
    labelData.textContent = "Data de entrega:";
    labelData.htmlFor = "data";
    const dataInput = document.createElement("input");
    dataInput.type = "date";
    dataInput.name = "data";
    dataInput.id = "data";
    dataInput.classList.add("inputData");
    divData.appendChild(labelData);
    divData.appendChild(dataInput);

    form.appendChild(divNome);
    form.appendChild(divData);

    return form;
}

function obtemTrabalhoDoFormulario(form) {
    const trabalho = {
        nome: form.nome.value,
        data: form.data.value
    };

    return trabalho;
}

function criaTrabalho(trabalho) {
    const divTrabalho = document.createElement("div");
    divTrabalho.classList.add("trabalho");

    const tituloTrabalho = document.createElement("h2");
    tituloTrabalho.classList.add("tituloTrabalho");
    tituloTrabalho.textContent = trabalho.nome;
    divTrabalho.appendChild(tituloTrabalho);

    const dataTrabalhoParagrafo = document.createElement("p")
    dataTrabalhoParagrafo.classList.add("dataEstilo");
    const dataTrabalho = document.createElement("time");
    dataTrabalho.textContent = trabalho.data;

    dataTrabalhoParagrafo.appendChild(dataTrabalho);
    divTrabalho.appendChild(dataTrabalhoParagrafo);

    return divTrabalho;
}

function criaBotaoSubmit() {
    const botaoSubmit = document.createElement("button");
    botaoSubmit.textContent = "Criar";
    botaoSubmit.id = "criar";

    return botaoSubmit;
}