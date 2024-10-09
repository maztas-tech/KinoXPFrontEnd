import {fetchAnyUrl, deleteMethod} from "./moduleJson.js";

console.log("er i Movietable")

const urlGetMovies = "http://localhost:8080/movies"
const urlDeleteMovie = "http://localhost:8080/deleteMovie"

const pbCreateMovieTable = document.getElementById("pbGetMovies")
const tblMovies = document.getElementById("tblMovies")

function createTable(movie) {
    let cellCount = 0
    let rowCount = tblMovies.rows.length
    let row = tblMovies.insertRow(rowCount)
    row.id = movie.movieTitle;

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

    cell = row.insertCell(cellCount++)
    const pbDelete = document.createElement("button");
    pbDelete.className = "btn1";
    pbDelete.innerHTML = '<i></i> Delete Movie';  // Tilføj ikonet inde i knappen
    pbDelete.type = "button";
    pbDelete.setAttribute("value", "Delete Movie");
    cell.appendChild(pbDelete);




    pbDelete.onclick = function() {
        document.getElementById(movie.movieTitle).remove();
        deleteMovie(movie);
    }
}

async function deleteMovie(movie) {
    try {
        const url = urlDeleteMovie + "/" + movie.movieID
        const resp = await deleteMethod(url)
        const body = await resp.text();
        alert(body)
    } catch (error) {
        alert(error.message);
        console.log(error);
    }
}



let movies = []

async function fetchMovies() {
    movies = await fetchAnyUrl(urlGetMovies)
    movies.forEach(createTable)
}

pbCreateMovieTable.addEventListener('click', fetchMovies)
