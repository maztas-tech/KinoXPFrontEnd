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
    row.id = movie.movieID;

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
    let img = document.createElement("img")
    img.setAttribute("src", movie.photo)
    img.setAttribute("alt", "hej")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
    cell.appendChild(img)

    cell = row.insertCell(cellCount++)
    const pbDelete = document.createElement("button");
    pbDelete.className = "btn1";
    pbDelete.innerHTML = '<i></i> Delete Movie';  // Tilføj ikonet inde i knappen
    pbDelete.type = "button";
    pbDelete.setAttribute("value", "Delete Movie");
    cell.appendChild(pbDelete);

    pbDelete.onclick = function() {
        document.getElementById(movie.movieID).remove();
        deleteMovie(movie);
    }
}

const pbUpdateMovie = document.getElementById("pbUpdateMovie");
pbUpdateMovie.addEventListener('click', function() {
    window.location.href = "updateMovie.html";
});

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
    tblMovies.innerHTML = `
        <tr>
            <th>Movie ID</th>
            <th>Movie Title</th>
            <th>Movie Length</th>
            <th>Movie Genre</th>
            <th>Movie Screening</th>
            <th>Movie Photo</th>
        </tr>
    `;
    movies = await fetchAnyUrl(urlGetMovies)
    movies.forEach(createTable)
}

pbCreateMovieTable.addEventListener('click', fetchMovies)
