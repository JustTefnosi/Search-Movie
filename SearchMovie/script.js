const apiKey = 'ee2b37bc'

function searchMovies() {
    const searchInput = document.querySelector('#searchInput'); // assuming searchInput is an ID
    const searchQuery = searchInput.value; // get the value of the input field
    if(searchQuery.trim() === '' ) { // correct the comparison operator
        alert('Enter movie title' ) // correct the spelling of "title"
        return
    };


    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`; // correct the template literal and the function name

    fetch(apiUrl)
       .then(response => response.json()) // correct the parameter name
       .then(data => {
         if(data.Response === "True")  {
           displayMovies(data.Search); // call the function
           console.log(data.Search); // log the data
         } else {
            alert('Movie not found')
         }
      }) // close the.then block
    .catch(error => {
          console.log('Error', error)
      }) // close the.catch block
}

function displayMovies(movies) {
    const movieResultContainer = document.querySelector('#movieResults');
    movieResultContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML =
        `
        
             <div class="movieCard">
             <div id="movieimgBlock">
             <img src="${movie.Poster}"/>
             </div>
             <h2>${movie.Title}</h2>
             <p>${movie.Year}</p>
               </div>
             </div>
        `;

        movieResultContainer.appendChild(movieElement);
    });
}