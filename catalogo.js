/*criação da classe planta */
class Planta {
    constructor(nome, sol, agua, area, flor, dificuldade) {
        this.nome = nome;
        this.sol = sol;
        this.agua = agua;
        this.area = area;
        this.flor = flor;
        this.dificuldade = dificuldade;
    }
    /*
    descricao() {
        return nome + " gosta de " + sol + " sol e " + agua + " água. Vive em área " + area + " e " + flor + " flores. É de " + dificuldade + " dificuldade para cuidar."
    }*/
}

/*função para criar descrição dos objetos 
function descricao(nome, sol, agua, area, flor, dificuldade) {
    return nome + " gosta de " + sol + " sol e " + agua + " água. Vive em área " + area + " e " + flor + " flores. É de " + dificuldade + " dificuldade para cuidar."
}

/*armazenando os objetos criados */
function cadastrar() {
    let nomeDaPlanta = document.getElementById("nomeDaPlanta").value
    let qtdeDeSol = document.getElementById("qtdeDeSol").value
    let qtdeDeAgua = document.getElementById("qtdeDeAgua").value
    let tipoDeArea = document.getElementById("tipoDeArea").value
    let haFlores = document.getElementById("haFlores").value
    let nivelDificuldade = document.getElementById("nivelDificuldade").value
    /*let enderecoDaImagem = document.getElementById("enderecoDaImagem").value*/

    //criação de objetos 
    let dadosDaPlanta = new Planta(nomeDaPlanta, qtdeDeSol, qtdeDeAgua, tipoDeArea, haFlores, nivelDificuldade)
    let retorno = dadosDaPlanta.nome + " gosta de " + dadosDaPlanta.sol + " sol e " + dadosDaPlanta.agua + 
                " água. Vive em área " + dadosDaPlanta.area + " e " + dadosDaPlanta.flor + " flores. É de " + 
                dadosDaPlanta.dificuldade + " dificuldade para cuidar."

    //exibição dos objetos em tela 
    document.getElementById("teste1").innerText = "nada"
    document.getElementById("teste2").innerText = "nadinha"

}


/*FALTA FAZER:
    1- ENTENDER PORQUE OS ELEMENTOS NÃO ESTÃO SENDO EXIBIDOS EM TELA DEVIDAMENTE, NEM NOS CAMPOS DE TESTE, NEM NO CARD,
        NEM O NOME/DESCRIÇÃO DA PLANTA E NEM UM TEXTO QUALQUER
    2- ACERTAR EXIBIÇÃO PARA GUIA EXIBIR
    3- ENTENDER ARMAZENAMENTO DE MAIS DE UMA PLANTA E SUA EXIBIÇÃO*/