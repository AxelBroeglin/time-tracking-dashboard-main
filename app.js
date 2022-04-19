fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata))
.then(function(){
    const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);
})
.then(function showHeroes(jsonObj){
    showHeroes(jsonObj)
    console.log(title);
})


//console logs the info, but can't access the info.


