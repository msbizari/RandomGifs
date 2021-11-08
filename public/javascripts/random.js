window.onload = function() {
    this.fetch("https://api.giphy.com/v1/gifs/trending?api_key=Jw8tqc0vadsvURd2SkDkVHqcDMnboKhv&limit=60&rating=g")
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
                console.log(randomIndix);
                let gif = "<img src= " + randomIndix.images.original.url + ">";
                gif += "<p>" + randomIndix.title + "</p>";
                document.querySelector("main").innerHTML += '<div class="index-img">' + gif + "</div>";
            }

            randomButton();

            let sorprisemeButton = document.querySelector(".wow");
            sorprisemeButton.addEventListener("click", function(){
                document.querySelector("main").innerHTML = " ";
                randomButton();
                // window.location.reload(true);
            })
       })
    }  

            


