let postDiv = document.getElementById("fetch");

fetch ("https://jsonplaceholder.typicode.com/todos")
 .then(response => response.json()) 
.then(posts => {   
    posts.forEach(post => {
        let postSection = document.createElement("section");
        if (post.completed == true){
            postSection.classList.add("green");
        } 
        else {
            postSection.classList.add("red");
        } 
       
        let title = document.createTextNode(post.title);
        let baliseTitre = document.createElement("h2");

        baliseTitre.appendChild(title);
        postSection.appendChild(baliseTitre);
        postDiv.appendChild(postSection);
    });
});
    

