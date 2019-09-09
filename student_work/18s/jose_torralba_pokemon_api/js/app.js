// Gets Input, Button & Scroll Button Back by ID
var pokemonSearchBar = document.getElementById('pokemon-search');
var pokemonRandomButton = document.getElementById('random-pokemon');
var scrollButton = document.getElementById('scroll-btn');

// Gets Pokemon Sprite Container and Section by ID
var pokeImgBox = document.getElementById('pokemon-sprite');
var pokeContainer = document.getElementById('poke-box');

// Gets Pokeball and Pokeball Section by ID
var pokeSection = document.getElementById('pokeball-section');
var pokeBallImg = document.getElementById('pokeball-img');

// Gets Pokemon in Input
pokemonSearchBar.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {

        var value = this.value;
        pokeballAnimation(); 
        getRandomPokemon(value);
        getRandomPokemonDescription(value);
        hiddenButtonPress();
        pokeContainer.innerHTML = "";
    }
})

pokemonRandomButton.addEventListener('click', function(event) {

    var randomPokemon = Math.round(Math.random() * 800);
    pokeballAnimation();
    getRandomPokemon(randomPokemon);
    getRandomPokemonDescription(randomPokemon);
    pokeContainer.innerHTML = "";
})


function getRandomPokemonDescription(getPokemon) {

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${getPokemon}`)
    .then(function (response) {

        response.json()
        .then(function (pokemon) {

            var pokeInfoDiv = document.createElement('div');
            setTimeout(function () {

                pokeInfoDiv.innerHTML = `
                <div class="row">
                    <div class="pokemon-box__info">
                        <p>
                            ${pokemon.flavor_text_entries[1].flavor_text}
                        </p>
                    </div>
                </div>
                `;
                pokeContainer.appendChild(pokeInfoDiv)
            }, 600)
        })
    })
}


function getRandomPokemon(getPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemon}`)

    .then(function (response) {
        response.json()

        .then(function (pokemon) {
            console.log(pokemon)
            // Refreshes Results
            pokeImgBox.innerHTML = "";

            // Gets Pokemon Data
            var getPokemonName = pokemon.name;
            var getPokemonSprite = pokemon.sprites.front_default;
            var getDexEntry = 'Dex. Entry: ' + pokemon.id;
            var getPokemonWeigth = 'Weight: ' + pokemon.weight + ' lbs.';
            var getPokemonHeight = 'Height: ' + pokemon.height + 'm';

            // Pokemon Sprite
            var pokeSprite = document.createElement('img')
            pokeSprite.src = getPokemonSprite;
            pokeSprite.classList = "pokemon-section__sprite"
            pokeImgBox.append(pokeSprite);

            // Pokemon Name
            const pokeName = document.createElement('h2')
            pokeName.textContent = getPokemonName;
            pokeName.classList = 'pokemon-box__name';
            pokeContainer.append(pokeName)

            // Pokemon Type 1
            var pokeType1 = pokemon.types[0].type.name;
            var pokeTypeColor1 = document.createElement('p');
            pokeTypeColor1.textContent = pokemon.types[0].type.name;
            pokeTypeColor1.classList = 'pokemon-box__type';
            pokeContainer.append(pokeTypeColor1)

            // If Pokemon has more that 1 Type
            if (pokemon.types.length == 2) {
                var pokeType2 = pokemon.types[1].type.name;
                var pokeTypeColor2 = document.createElement('p');
                pokeTypeColor2.textContent = pokemon.types[1].type.name;;
                pokeTypeColor2.classList = 'pokemon-box__type';
                pokeContainer.append(pokeTypeColor2)
    
            } else {
                var pokeType2 = null;
            }

            getPokemonTypeColor(pokeType1, pokeTypeColor1, pokeType2, pokeTypeColor2);
            getPokemonStats(getDexEntry, getPokemonWeigth, getPokemonHeight);
        })
    })
}


function getPokemonStats(getDexEntry, getPokemonWeigth, getPokemonHeight) {
    // Displays Pokemon Dex Entry, Weigth & Height
    var pokeInfoDiv = document.createElement('div');
    pokeInfoDiv.innerHTML = `
    <div class="row">
        <div class="col-1-of-4">
            <div class="pokemon-box__info">
                <p>
                    ${getDexEntry}
                </p>
            </div>
        </div>
        <div class="col-1-of-4">
            <div class="pokemon-box__info">
                <p>
                    ${getPokemonWeigth}
                </p>
            </div>
        </div>
        <div class="col-1-of-4">
            <div class="pokemon-box__info">
                <p>
                    ${getPokemonHeight}
                </p>
            </div>
        </div>
    </div>
    `;
    pokeContainer.appendChild(pokeInfoDiv)
}


function getPokemonTypeColor(pokeType1, pokeTypeColor1, pokeType2, pokeTypeColor2) {
    // Type 1 Colors
    if (pokeType1 == 'normal') {
        pokeTypeColor1.style.backgroundColor = '#a8a878';

    } else if (pokeType1 == 'fire') {
        pokeTypeColor1.style.backgroundColor = '#f08030';

    } else if (pokeType1 == 'water') {
        pokeTypeColor1.style.backgroundColor = '#6890f0';

    } else if (pokeType1 == 'grass') {
        pokeTypeColor1.style.backgroundColor = '#78c850';

    } else if (pokeType1 == 'electric') {
        pokeTypeColor1.style.backgroundColor = '#f8d030';

    } else if (pokeType1 == 'ice') {
        pokeTypeColor1.style.backgroundColor = '#98d8d7';

    } else if (pokeType1 == 'ground') {
        pokeTypeColor1.style.backgroundColor = '#e0c068';

    } else if (pokeType1 == 'flying') {
        pokeTypeColor1.style.backgroundColor = '#a88ff0';

    } else if (pokeType1 == 'poison') {
        pokeTypeColor1.style.backgroundColor = '#a040a0';

    } else if (pokeType1 == 'fighting') {
        pokeTypeColor1.style.backgroundColor = '#c02f28';

    } else if (pokeType1 == 'psychic') {
        pokeTypeColor1.style.backgroundColor = '#f85888';

    } else if (pokeType1 == 'dark') {
        pokeTypeColor1.style.backgroundColor = '#705848';

    } else if (pokeType1 == 'rock') {
        pokeTypeColor1.style.backgroundColor = '#b8a038';

    } else if (pokeType1 == 'bug') {
        pokeTypeColor1.style.backgroundColor = '#b8a038';
    
    } else if (pokeType1 == 'ghost') {
        pokeTypeColor1.style.backgroundColor = '#b8a038';

    } else if (pokeType1 == 'steel') {
        pokeTypeColor1.style.backgroundColor = '#b8b8d0';

    } else if (pokeType1 == 'dragon') {
        pokeTypeColor1.style.backgroundColor = '#7038f8';
    
    } else if (pokeType1 == 'fairy') {
        pokeTypeColor1.style.backgroundColor = '#ffaec9';
    } 

    // Type 2 Colors
    if (pokeType2 == 'normal') {
        pokeTypeColor2.style.backgroundColor = '#a8a878';

    } else if (pokeType2 == 'fire') {
        pokeTypeColor2.style.backgroundColor = '#f08030';

    } else if (pokeType2 == 'water') {
        pokeTypeColor2.style.backgroundColor = '#6890f0';

    } else if (pokeType2 == 'grass') {
        pokeTypeColor2.style.backgroundColor = '#78c850';

    } else if (pokeType2 == 'electric') {
        pokeTypeColor2.style.backgroundColor = '#f8d030';

    } else if (pokeType2 == 'ice') {
        pokeTypeColor2.style.backgroundColor = '#98d8d7';

    } else if (pokeType2 == 'ground') {
        pokeTypeColor2.style.backgroundColor = '#e0c068';
    
    } else if (pokeType2 == 'flying') {
        pokeTypeColor2.style.backgroundColor = '#a88ff0';

    } else if (pokeType2 == 'poison') {
        pokeTypeColor2.style.backgroundColor = '#a040a0';

    } else if (pokeType2 == 'fighting') {
        pokeTypeColor2.style.backgroundColor = '#c02f28';

    } else if (pokeType2 == 'psychic') {
        pokeTypeColor2.style.backgroundColor = '#f85888';

    } else if (pokeType2 == 'dark') {
        pokeTypeColor2.style.backgroundColor = '#705848';

    } else if (pokeType2 == 'rock') {
        pokeTypeColor2.style.backgroundColor = '#b8a038';

    } else if (pokeType2 == 'bug') {
        pokeTypeColor2.style.backgroundColor = '#b8a038';
    
    } else if (pokeType2 == 'ghost') {
        pokeTypeColor2.style.backgroundColor = '#b8a038';

    } else if (pokeType2 == 'steel') {
        pokeTypeColor2.style.backgroundColor = '#b8b8d0';

    } else if (pokeType2 == 'dragon') {
        pokeTypeColor2.style.backgroundColor = '#7038f8';
    
    } else if (pokeType2 == 'fairy') {
        pokeTypeColor2.style.backgroundColor = '#ffaec9';
    } 
}

// Scroll animation
$("a.scroll").click(function (event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});

// PokeBall Animation
function pokeballAnimation() {
    pokeBallImg.classList.add('rotate-pokeball');
    pokeBallImg.style.width = '300px';
    pokeBallImg.style.height = '300px';
    pokeSection.style.marginTop = '-15rem'

    setTimeout(function () {
        pokeBallImg.classList.remove('rotate-pokeball');
    }, 1000)
}

function removePokeData() {
    pokeBallImg.style.width = '200px';
    pokeBallImg.style.height = '200px';
    pokeSection.style.marginTop = '-35rem'

    pokeBallImg.classList.add('rotate-pokeball');
    setTimeout(function () {
        pokeBallImg.classList.remove('rotate-pokeball');
    }, 1000)

    pokeImgBox.innerHTML = "";
    pokeContainer.innerHTML = "";
}

// Scroll Button
scrollButton.style.opacity = '0';
scrollButton.addEventListener('click', function() {
    removePokeData();
});

function hiddenButtonPress() {
    var hiddenButtonScroll =  document.getElementById('scroll-input')
    hiddenButtonScroll.click();
}


// Window Scroll Event Listener For Scroll Button
window.addEventListener('scroll', function() {
    
    if (window.pageYOffset > 400) {
        scrollButton.style.opacity = '1';
    } else {
        scrollButton.style.opacity = '0';
    }
});