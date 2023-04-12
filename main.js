const pokeCard = document.getElementById("container")

const btnPrev = document.getElementById("btn-prev")
const btnNext = document.getElementById("btn-next")

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

function callApi(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            let pokeName = responseJson.name
            let pokeId = responseJson.id
            let pokeExperience = responseJson.base_experience
            let pokeWeight = responseJson.weight
            let pokeImg = responseJson.sprites.other.dream_world.front_default
            let pokeType = responseJson.types[0].type.name


            const pokeContainer = document.createElement('div')
            pokeContainer.classList.add("poke-container")
            pokeContainer.innerHTML =
                `<div class="img-container" style= "background-color: var(--${pokeType})">
                <img src="${pokeImg}" alt="">
            </div>
            <p class="poke-id" style= "background-color: var(--${pokeType})">#${pokeId}</p>
            <p class="poke-name">${pokeName}</p>
            <div class="ability">
                <i class="fa-solid fa-flask"></i><span> ${pokeExperience} Exp</span>
                <i class="fa-solid fa-weight-scale"></i><span>${pokeWeight} Kg</span>
            </div>
            <p class="type"><i class="fa-brands fa-uncharted"></i> ${pokeType}</p>`

            if (pokeType == "grass") {
                pokeContainer.style.backgroundColor = "#7c5"
            }
            else if (pokeType == "poison") {
                pokeContainer.style.backgroundColor = "#a59"
            }
            else if (pokeType == "fire") {
                pokeContainer.style.backgroundColor = "#f42"
            }
            else if (pokeType == "ghost") {
                pokeContainer.style.backgroundColor = "#66b"
            }
            else if (pokeType == "water") {
                pokeContainer.style.backgroundColor = "#39f"
            }
            else if (pokeType == "ice") {
                pokeContainer.style.backgroundColor = "#6cf"
            }
            else if (pokeType == "fairy") {
                pokeContainer.style.backgroundColor = "#e9e"
            }
            else if (pokeType == "ground") {
                pokeContainer.style.backgroundColor = "#db5"
            }
            else if (pokeType == "rock") {
                pokeContainer.style.backgroundColor = "#ba6"
            }
            else if (pokeType == "normal") {
                pokeContainer.style.backgroundColor = "#aa9"
            }
            else if (pokeType == "psychic") {
                pokeContainer.style.backgroundColor = "#f59"
            }
            else if (pokeType == "dark") {
                pokeContainer.style.backgroundColor = "#754"
            }
            else if (pokeType == "bug") {
                pokeContainer.style.backgroundColor = "#ab2"
            }
            else if (pokeType == "steel") {
                pokeContainer.style.backgroundColor = "#aab"
            }
            else if (pokeType == "electric") {
                pokeContainer.style.backgroundColor = "#fc3"
            }
            else if (pokeType == "fighting") {
                pokeContainer.style.backgroundColor = "#b54"
            }
            else if (pokeType == "dragon") {
                pokeContainer.style.backgroundColor = "#76e"
            }
            else if (pokeType == "flying") {
                pokeContainer.style.backgroundColor = "#89f"
            }
            else if (pokeType == "ground") {
                pokeContainer.style.backgroundColor = "#db5"
            }


            pokeCard.appendChild(pokeContainer)

        })
}

var a = 1

btnNext.addEventListener("click", () => {
    pokeCard.innerHTML = ``
    if (a == 980) {
        a = 1
    }
    else {
        a += 20
    }

    for (let i = a; i <= a + 19; i++) {
        callApi(i)
    }
})

btnPrev.addEventListener("click", () => {
    pokeCard.innerHTML = ``
    if (a <= 1) {
        a=1
    }
    else {
        a -= 20
    }

    for (let i = a; i <= a + 19; i++) {
        callApi(i)
    }
})


for (let i = a; i <= a + 19; i++) {
    callApi(i)
}

searchBtn.addEventListener("click", () => {
    pokeCard.innerHTML = ``
    callApi(searchInput.value)
})








