window.onload = function(){

    fetch("https://api.giphy.com/v1/gifs/trending?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&limit=100&rating=g")
        .then(function(response){
            return response.json();
        })
        .then(function(info){
            let searchValue = document.getElementById('#search').value;
            console.log(searchValue);

            console.log(info.data)


            // let arrGif = info.data;
            // function randomGif(arrGif){
            //     return arrGif[Math.floor(Math.random()*arrGif.length)];
            // }
            // let randomIndix = randomGif(arrGif);

            // // for (let i = 0; i < arrGif.length; i++){
            // let gif = "<img src= " + randomIndix.images.original.url + ">";
            // gif += "<p>" + randomIndix.title + "</p>";
            // document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";

            // let sorprisemeButton = document.querySelector(".wow");
            // sorprisemeButton.addEventListener("click", function(){
            //     window.location.reload(true);
            // })
       })
}



/*window.onload = function() {
    let url = "https://api.giphy.com/v1/gifs/search?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&q=&limit=25&offset=0&rating=g&lang=en";
    let searchString = document.querySelector(".search-button").value.trim();
    url = url + searchString;
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(info){
            console.log(info.data);

            // let arrGif = info.data;
            // function randomGif(arrGif){
            //     return arrGif[Math.floor(Math.random()*arrGif.length)];
            // }
            // let randomIndix = randomGif(arrGif);

            // // for (let i = 0; i < arrGif.length; i++){
            // let gif = "<img src= " + randomIndix.images.original.url + ">";
            // gif += "<p>" + randomIndix.title + "</p>";
            // document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";

            // let sorprisemeButton = document.querySelector(".wow");
            // sorprisemeButton.addEventListener("click", function(){
            //     window.location.reload(true);
            //     // e.preventDefault();
            //     // console.log(this);
            //     // gif = "<img src= " + (randomIndix + 1).images.original.url + ">";
            //     // gif += "<p>" + (randomIndix + 1).title + "</p>";
            //     // document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
            //     // alert('Hiciste Click!');
            // })
                

    
        // })
        // .catch (function(e){
        //     alert("Error! Intente mas tarde");
        // })    
       })
    }  
*/
            


/*let searchButton = document.querySelector('.search-button');
searchButton.addEventListener("click", searchGif());

function searchGif(){
    var userInput = document.querySelector("#input").value;
    console.log(userInput);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&q=${userInput}&limit=10&offset=10&rating=g&lang=en`)
    .then(function(response){
        return response.json();
    })
    .then(function(info){
        console.log(info.data)
        // let arrGif = info.data.images.original.url
        for (let i = 0; i < info.data.length; i++){
            let gif = "<img src= " + info.data[i].images.original.url + ">";
            gif += "<p>" +  info.data[i].title + "</p>";
            document.querySelector("figure").innerHTML += "<div>" + gif + "</div>";                
        }
    })
}


/*searchButton.onclick = function searchGif() {
    var userInput = document.querySelector("#input").value;
    console.log(userInput);    



----- index random button -->

window.onload = function() {
    this.fetch("https://api.giphy.com/v1/gifs/trending?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&limit=30&rating=g")
        .then(function(response){
            return response.json();

        })
        .then(function(info){
            console.log(info.data)

            let arrGif = info.data;
            function randomGif(arrGif){
                return arrGif[Math.floor(Math.random()*arrGif.length)];
            }
            function randomButton(){
                let randomIndix = randomGif(arrGif);

                // for (let i = 0; i < arrGif.length; i++){
                let gif = "<img src= " + randomIndix.images.original.url + ">";
                gif += "<p>" + randomIndix.title + "</p>";
                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
            }
            randomButton();
            // document.querySelector(".wow").contentWindow.location.reload(true);
            let sorprisemeButton = document.querySelector(".wow");
            sorprisemeButton.addEventListener("click", window.location.reload(true))
        })
    }

            // {
            //     window.location.reload(true);
                // e.preventDefault();
                // console.log(this);
                // gif = "<img src= " + (randomIndix + 1).images.original.url + ">";
                // gif += "<p>" + (randomIndix + 1).title + "</p>";
                // document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
                // alert('Hiciste Click!');
            // })
                

    
        // })
        // .catch (function(e){
        //     alert("Error! Intente mas tarde");
        // })    
    //    })
    // }

    */