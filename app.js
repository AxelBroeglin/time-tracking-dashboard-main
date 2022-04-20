//Fetch the local JSON file
fetch("./data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        const para = document.createElement("p");
        para.innerText = data[1].title;
        document.body.appendChild(para);
        const test =  data[1].timeframes.weekly.previous;
        console.log(test);
        console.log(data.length);

        for(let i = 0; i < data.length; i++){ 
            const card = document.createElement("section");
            document.body.appendChild(card);
            card.insertAdjacentHTML(`afterbegin`, 
            '<div class="" id=""> <div><h2 class="">' + data[i].title + 
            '</h2><span class="">...</span></div><p class="">' + data[i].timeframes.daily.current +
            'hrs<span class="">Last day - ' + data[i].timeframes.daily.previous + '</span></p></div>')
        }
    })

    // div
    //     div
    //         div 
    //             title ... 
    //         /div
    //         32hrs
    //         last week
    //     /div
    // /div
