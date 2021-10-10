window.onload = function() {
    this.fetch("https://api.giphy.com/v1/gifs/trending?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&limit=30&rating=g")
        .then(function(response){
            return response.json();

        })
        .then(function(info){
            console.log(info.data)
            for (let i = 0; i < info.data.length; i++){
            let gif = "<img src= " + info.data[i].images.original.url + ">";
            gif += "<p>" +  info.data[i].title + "</p>";
            document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
            }            
        })
    }
