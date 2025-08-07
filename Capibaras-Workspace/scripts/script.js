const botaoAdd = document.getElementById("botaoAdiciona");

const botaoLixeira = document.getElementById("botaoLixeira");

let janelaEhAberta = false;

const main = document.querySelector("main");

const janela = criaJanela();

const janelaExcluir = criaJanelaExcluir();

const botaoExcluir = criaBotaoExcluir();

const botaoCancelar = criaCancelar();

janelaExcluir.appendChild(botaoExcluir);
janelaExcluir.appendChild(botaoCancelar);

const botaoSair = criaSair()

janela.appendChild(botaoSair);

const form = criaForm();

janela.appendChild(form);

const botaoSubmit = criaBotaoSubmit();

form.appendChild(botaoSubmit);

botaoAdd.addEventListener("click", () => abreJanela(janela));
botaoSair.addEventListener("click", () => fechaJanela(janela));
botaoLixeira.addEventListener("click", () => abreJanela(janelaExcluir));
botaoCancelar.addEventListener("click", () => fechaJanela(janelaExcluir));

botaoExcluir.addEventListener("click", function (event) {
    event.preventDefault();

    const trabalho = document.querySelectorAll(".trabalho");

    const trabalhos = document.getElementById("trabalhos");

    for (let i = 0; i < trabalho.length; i++) {
        const titulo = trabalho[i].querySelector(".tituloTrabalho");
        if (titulo.innerHTML == janelaExcluir.nomeTrabalho.value) {
            trabalhos.removeChild(trabalho[i]);
        }
    }

    janelaExcluir.reset();
})

botaoSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const trabalho = obtemTrabalhoDoFormulario(form);

    const divTrabalho = criaTrabalho(trabalho);

    const trabalhos = document.getElementById("trabalhos");

    trabalhos.appendChild(divTrabalho);

    form.reset();

    fechaJanela(janela);
})

function abreJanela(janela) {
    if (!janelaEhAberta) {
        main.appendChild(janela);
        janelaEhAberta = true;
    }
}

function fechaJanela(janela) {
    main.removeChild(janela);
    janelaEhAberta = false;
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

function criaJanelaExcluir() {
    const janelaExcuir = document.createElement("form");
    janelaExcuir.classList.add("janelaExcluir");

    const labelTrabalho = document.createElement("label");
    labelTrabalho.textContent = "Nome do trabalho que será EXCLUIDO:";
    labelTrabalho.htmlFor = "nomeTrabalho";
    const inputNomeTrabalho = document.createElement("input");
    inputNomeTrabalho.type = "text";
    inputNomeTrabalho.name = "nomeTrabalho";
    inputNomeTrabalho.id = "nomeTrabalho";

    janelaExcuir.appendChild(labelTrabalho);
    janelaExcuir.appendChild(inputNomeTrabalho);

    return janelaExcuir;
}

function criaBotaoExcluir() {
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.id = "botaoExcluir";

    return botaoExcluir;
}

function criaCancelar() {
    const botaoCancelar = document.createElement("button");
    botaoCancelar.id = "cancelar";
    botaoCancelar.textContent = "Cancelar";

    return botaoCancelar;
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