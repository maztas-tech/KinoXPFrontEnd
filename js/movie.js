import {fetchAnyUrl} from "./moduleJson.js";

console.log("er i Movietable")

const urlGetMovies = "http://localhost:8080/movies"

const pbCreateMovieTable = document.getElementById("pbGetMovies")
const tblMovies = document.getElementById("tblMovies")

function createTable(movie) {
    let cellCount = 0
    let rowCount = tblMovies.rows.length
    let row = tblMovies.insertRow(rowCount)

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieID

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieTitle

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieLength

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.genre

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieScreening

}

let movies = []

async function fetchMovies() {
    movies = await fetchAnyUrl(urlGetMovies)
    movies.forEach(createTable)
}

pbCreateMovieTable.addEventListener('click', fetchMovies)

























/*import {fetchAnyUrl} from "./moduleJson";

const urlGetMovies = "http://localhost:8080/movies"

const pbCreateMovieTable = document.getElementById("pbGetMovies")
const tblMovies = document.getElementById("tblMovies")

function createTable(movie) {

    let cellCount = 0
    let rowCount = tblMovies.rows.length
    let row = tblMovies.insertRow(rowCount)
    row.id = movie.movieID

    let cell = row.insertCell(cellCount++)

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieTitle

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieLength

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.genre

    cell = row.insertCell(cellCount++)
    cell.innerHTML = movie.movieScreening

    cell = row.insertCell(cellCount++)
    const pbDelete = document.createElement("input");
    pbDelete.type = "button";
    pbDelete.setAttribute("value", "Slet Movie");
    cell.appendChild(pbDelete);
    pbDelete.className = "btn1"
    cell.appendChild(pbDelete)

    pbDelete.onclick = function () {
        document.getElementById(kommune.navn).remove()
        deleteKommune(kommune)
    }

}

function sortMovies(movies) {
    return movies.sort((movie, kom2) => {
        if (kom1.region.kode > kom2.region.kode) {
            return 1
        } else if (kom2.region.kode > kom1.region.kode) {
            return -1
        } else if (kom1.navn>kom2.navn) {
            return 1
        } else { return -1 }
    })
}

let kommuner = []
async function fetchKommuner() {
    const colhead = document.getElementById("colhead")
    tblKommuner.innerHTML = ""
    tblKommuner.appendChild(colhead)
    kommuner = await fetchAnyUrl(urlKommuner)
    kommuner = sortKommuner(kommuner)
    kommuner.forEach(createTable)
}

let movies = []

async function fetchMovies() {
    movies = await fetchAnyUrl(urlGetMovies)
    movies.forEach(createTable)
}

function actionGetMovies() {
    fetchMovies()
}

pbCreateMovieTable.addEventListener('click', actionGetMovies)


 */