'use strict'

async function buscar() {
    const nome = document.getElementById("busca").value;
    const container = document.getElementById("resultado");

    if (!nome) {
        container.innerHTML = "Digite um nome!";
        return;
    }

    container.innerHTML = "";

    try {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`);
        const dados = await resposta.json();

        // Limitar a 3 cards (igual à imagem)
        const personagens = dados.results.slice(0, 3);

        personagens.forEach(p => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${p.image}">
                <p>${p.name} - ${p.status}</p>
                <button onclick="alert('Mais informações sobre ${p.name}')">LEARN MORE</button>
            `;

            container.appendChild(card);
        });

    } catch (erro) {
        container.innerHTML = "Personagem não encontrado 😢";
    }
}