const userInput = document.getElementById('user').value; //estoy atrapando el valor correctamente
console.log(userInput)
window.onload = function(){
    console.log(`${userInput} lo lograste!`)
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&q=${userInput2}&limit=10&offset=10&rating=g&lang=en`)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&q=cat&limit=10&offset=10&rating=g&lang=en`)
    
    // fetch("https://api.giphy.com/v1/gifs/trending?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&limit=100&rating=g")
        .then(function(response){
            return response.json();
        })
        .then(function(info){
            console.log(info.data)
            // let arrGif = info.data.images.original.url
            for (let i = 0; i < info.data.length; i++){
                let gif = "<img src= " + info.data[i].images.original.url + ">";
                gif += "<p>" +  info.data[i].title + "</p>";
                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";                
            }

            let searchButton = document.querySelector(".search-button");
            searchButton.addEventListener("click", function(){
                console.log(userInput2);}
                )}

        )    
    // }    
}
