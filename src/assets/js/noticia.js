const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const noticias = {
    mundial1: {
        titulo: "Inteligência Artificial transforma a indústria tech",
        imagem: "../img/Mundial1.jpg",
        conteudo: `Empresas de tecnologia investem bilhões em IA generativa 
        e machine learning, prometendo revolucionar diversos setores da economia 
        global.`
    },

    mundial2: {
        titulo: "Novo RPG de mundo aberto quebra recordes de vendas",
        imagem: "../img/Mundial2.jpg",
        conteudo: `Lançamento surpreende mercado com mecânicas inovadoras e gráficos 
        de última geração, estabelecendo novo padrão para a indústria.`
    },

    mundial3: {
        titulo: "Missão espacial histórica prepara nova era da exploração lunar",
        imagem: "../img/Mundial3.jpg",
        conteudo: `Agências espaciais internacionais anunciam planos ambiciosos para 
        estabelecer base permanente na Lua até 2030.`
    },

    mundial4: {
        titulo: "Realidade virtual redefine experiência de entretenimento digital",
        imagem: "../img/Mundial4.jpg",
        conteudo: `Novos headsets VR prometem imersão sem precedentes com gráficos 
        realistas e interação avançada.`
    },

    mundial5: {
        titulo: "Veículos elétricos dominam mercado automotivo global",
        imagem: "../img/Mundial5.jpg",
        conteudo: `Vendas de carros elétricos superam expectativas enquanto fabricantes 
        aceleram transição para eletrificação total.`
    }
};

const noticia = noticias[id];

if (!noticia) {
    document.getElementById("titulo").innerText = "Notícia não encontrada";
} else {
    document.getElementById("titulo").innerText = noticia.titulo;
    document.getElementById("imagem").src = noticia.imagem;
    document.getElementById("conteudo").innerHTML = noticia.conteudo;
}
