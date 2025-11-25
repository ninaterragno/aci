// PEGAR O ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// BANCO DE NOTÍCIAS
const noticias = {
    mundial1: {
        titulo: "Inteligência Artificial transforma a indústria tech",
        imagem: "/src/assets/img/Mundial1.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial2: {
        titulo: "Novo RPG de mundo aberto quebra recordes de vendas",
        imagem: "/src/assets/img/Mundial2.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial3: {
        titulo: "Missão espacial histórica prepara nova era da exploração lunar",
        imagem: "/src/assets/img/Mundial3.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial4: {
        titulo: "Realidade virtual redefine experiência de entretenimento digital",
        imagem: "/src/assets/img/Mundial4.jpg",
        conteudo: `
            Notícia Completa
        `
    },

    mundial5: {
        titulo: "Veículos elétricos dominam mercado automotivo global",
        imagem: "/src/assets/img/Mundial5.jpg",
        conteudo: `
            Notícia Completa
        `
    },
}