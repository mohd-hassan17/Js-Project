const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    // most popular movies jo upar dikha dega
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // jo search karenge vo dikha dega

    const movieBox = document.querySelector("#movieBox") 

    const getMovies = async(url) => {
        const response = await fetch (url)
        const data = await response.json()
        showMovies(data)

    }

    getMovies(APIURL);

    const showMovies = (data) => {
        movieBox.innerHTML = "";
        // jab movie search karenge to popular movies ko hata ke search wali movies dikha ye ga
        data.results.forEach(
            (result) => {
                // const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
               
                const box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML = `
                    <img src="${IMGPATH  + result.poster_path}" alt="" />
                    <div class="overlay">
                        <div class="title"> 
                            <h2> ${result.original_title}  </h2>
                            <span> ${result.vote_average} <span>
                        </div>
                        <h3>Overview:</h3>
                        <p> 
                            ${result.overview}
                        </p>
                     </div>
                `
                movieBox.appendChild(box)
            }
        )
    }

    const search = document.querySelector("#search")

    search.addEventListener(
        "keyup",
        function(event){
            if(event.target.value != ""){
                getMovies(SEARCHAPI + event.target.value)
            }
                else{
                    getMovies(APIURL);
                }
            
        }

    )
    