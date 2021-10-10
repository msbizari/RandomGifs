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
            let randomIndix = randomGif(arrGif);

            // for (let i = 0; i < arrGif.length; i++){
            let gif = "<img src= " + randomIndix.images.original.url + ">";
            gif += "<p>" + randomIndix.title + "</p>";
            document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";

            let sorprisemeButton = document.querySelector(".wow");
            sorprisemeButton.addEventListener("click", function(){
                window.location.reload(true);
                // e.preventDefault();
                // console.log(this);
                // gif = "<img src= " + (randomIndix + 1).images.original.url + ">";
                // gif += "<p>" + (randomIndix + 1).title + "</p>";
                // document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
                // alert('Hiciste Click!');
            })
                

    
        // })
        // .catch (function(e){
        //     alert("Error! Intente mas tarde");
        // })    
       })
    }  

            


