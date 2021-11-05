let searchButton = document.querySelector('.search-button');
searchButton.onclick = function searchGif() {
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