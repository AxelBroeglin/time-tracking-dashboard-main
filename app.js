// fetch("./data.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata))
// .then(function(){
//     //const text = jsondata;
//     //const obj = JSON.parse(text);
//     const para = document.createElement("p");
//     //para.innerText = obj.name;
//     document.body.appendChild(para);
// })
// // .then(function showHeroes(jsonObj){
// //    showHeroes(jsonObj);
// //  });


// //console logs the info, but can't access the info.

fetch("./data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[1].title);
        const para = document.createElement("p");
        para.innerText = data[1].title;
        document.body.appendChild(para);
    })
