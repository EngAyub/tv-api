

// https://api.tvmaze.com/search/shows?q=girls

document.querySelector('#search').addEventListener('click',() => {
    let Film = document.querySelector('.search-box').value;
     let newFilm = Film
    fetch(`https://api.tvmaze.com/search/shows?q=${newFilm}`)
    .then((movie) =>{
    return movie.json();
    })
    .then((data) =>{
     console.log(data)
  
      for(let i=0; i< data.length; i++){
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        document.querySelector('.movies-section').appendChild(movieCard);
  
        let movieContainer= document.createElement('div');
        movieContainer.classList.add('movie-image');
        movieCard.appendChild(movieContainer);
  
        let movieImg = document.createElement('img');
        movieImg.src = data[i].show.image.medium;
        movieContainer.appendChild(movieImg);
  
        let title = document.createElement('h3');
        title.classList.add('movie-heading')
        title.innerHTML = data[i].show.name
        movieCard.appendChild(title);
      }
    })  
    })
  
  
  
  
    // console.log(data[0].show.image.medium);
      // data[i].show.name;