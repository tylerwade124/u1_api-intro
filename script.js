console.log(`working`)






//added ${textinput}

//- added a form/input searchbar into the html

let button = document.querySelector(`#searchButton`)

//.value pulls the value of the input bar

//WRAPPED ENTIRE FETCH(URL) FUNCTION IN ASYNC FUNCTION OF getData!!


//req and res
// - request and response

//the fetch function fetches the given url since that is the element we are looking for to fetch

//return res.json puts it into json(data) format
//wrapped entire fetch function in getData async function

//use event as paramater
    async function getData (event) {
        //preventing the default behavior of the browser
        event.preventDefault()
        let textInput2 = document.querySelector("#inputBar2").value.toLowerCase()
        let textInput1 = document.querySelector("#inputBar1").value.toLowerCase()
        
        fetch(`https://pokeapi.co/api/v2/${textInput1}/${textInput2}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                if(textInput1 == `berry`) {
                    pokemonName.innerText = res.item.name.toUpperCase()
                    pokemonHeight.innerText = res.firmness.name
                    pokemonWeight.innerText = res.size
                } else {

                //pokemon
                console.log(`success!`, res.name)
                let pokemonName = document.querySelector(`#pokemonName`)
                pokemonName.innerText = res.name.toUpperCase()
                
                console.log(`success!`, res.height, res)
                let pokemonHeight = document.querySelector(`#pokemonHeight`)
                pokemonHeight.innerText = res.height

                console.log(`success!`, res.weight)
                let pokemonWeight = document.querySelector(`#pokemonWeight`)
                pokemonWeight.innerText = res.weight
                
                //berry
               
                }})
            .catch( err => {
                console.log("error!", err)
          })
        }
        

 //res.name and res.weight will pull the data from the url, and the name and weight of the given pokemon, in this instance it pulls geodudes weight and name, his weight being 200

//PSEUDOCODE for next step

//1 Attach event to button (getData - async function)
button.addEventListener(`click`, getData)
//2 Read the input bar value
//3 Find the HTML Element we want to populate
//4 Populate the element, render data to screen


    






// - the .catch function is what happens in case of an error
    // - .then is what it does after the url is fetched, which is console log success!


//no longer cascading
//.then to work properly
// console.log(1);

// fetch(url).then(res => {
//   if (res.ok) {
//     console.log(2);
//   }
// });

// console.log(3);

//.finally - the code is always run, fulfilled or not
//.then - this code is run if the promise is fulfilled
//.catch - this code is run if the promise is rejected (errors)




//at this point we have gotten our website do bring over data from the pokedex API, and when we type in a value or name of the pokemon, and hit the search button it pulls the name of said pokemon and displays the name of the pokemon








