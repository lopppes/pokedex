const pokemonSelectionList = document.querySelectorAll('.pokemon');

const gradientForBackground = {
    pikachu: 'linear-gradient(220.55deg, #FFF500 0%, #FFB800 100%)',
    bulbasaur: 'linear-gradient(220.55deg, #00B960 0%, #00552C 100%)',
    charmander: 'linear-gradient(220.55deg, #FFC328 0%, #E20000 100%)',
    gyarados: 'linear-gradient(220.55deg, #3793FF 0%, #0017E4 100%)',
    gengar: 'linear-gradient(220.55deg, #a500d7 0%, #19087E 100%)',
    dragonite: 'linear-gradient(220.55deg, #FFED46 0%, #FF7EC7 100%)'
};

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const openPokemonCard = document.querySelector('.aberto');
        openPokemonCard.classList.remove('aberto');

        const selectedPokemonId = pokemon.attributes.id.value;
        const cardIdToOpen = 'cartao-' + selectedPokemonId;
        const cardToOpen = document.getElementById(cardIdToOpen);
        cardToOpen.classList.add('aberto');

        const activePokemonInList = document.querySelector('.ativo');
        activePokemonInList.classList.remove('ativo');

        const selectedPokemonInList = document.getElementById(selectedPokemonId);
        selectedPokemonInList.classList.add('ativo');

        const pokemonType = selectedPokemonId;
        const body = document.querySelector('body');
        body.style.background = gradientForBackground[pokemonType];
    });
});
