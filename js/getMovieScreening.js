console.log("Vi er i moviescreening nu")

document.addEventListener("DOMContentLoaded", function (){

    const urlGetMovieScreening = "http://localhost:8080/movieScreenings";
    const movieScreeningTable = document.getElementById("tblMovieScreening");

    let movieScreening = [];

    async function fetchMovieScreeningUrl(url){
        return await fetch(url).then(response => response.json());
        console.log(fetch(url).then(response => response.json()));
    }

    async function fetchMovieScreening(){
        movieScreening = await fetchMovieScreeningUrl(urlGetMovieScreening);
        console.log(movieScreening);
        movieScreening.forEach(createMovieScreeningTable);
    }

    async function actionGetMovieScreening(){
        await fetchMovieScreening();
    }


    function createMovieScreeningTable(movieScreening){
        let cellCount = 0;
        let rowCount = movieScreeningTable.rows.length;
        let row = movieScreeningTable.insertRow((rowCount))

        let cell = row.insertCell(cellCount++);
        cell.innerHTML = movieScreening.movieScreeningTitle;

        cell = row.insertCell(cellCount++);
        cell.innerHTML = movieScreening.is3D;

        cell = row.insertCell(cellCount++);
        cell.innerHTML = movieScreening.movieDate;

        cell = row.insertCell(cellCount++);
        cell.innerHTML = movieScreening.movieTime;

        cell = row.insertCell(cellCount++);
        cell.innerHTML = movieScreening.moviePrice;
    }

    actionGetMovieScreening()

})