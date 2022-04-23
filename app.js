//Fetch the local JSON file
fetch("./data.json")
    .then(function(resp){
        return resp.json();
    })
    //Creates the Data function that will be called all along
    .then(function(data){

        //Creates the loop that will create all the elements, using the number of object in data.
        for(let i = 0; i < data.length; i++){
            //Variable to create a section each time a loop is initiated
            const card = document.createElement("section");
            //'Self care' is 2 words, can't pass as a class, so we split the space, and call the first entry of the array
            let title = data[i].title;
            const cardClass = title.split(" ")[0];
            //Adds classes to the cards using their titles
            card.classList.add('activity-'+cardClass);
            //Places the loop at the end of Main
            document.getElementById('main-container').appendChild(card);
            //Creates the HTML elements + the looped objects from JSON.
            //Will need to be updated with the Daily, Weekly or Monthly registered from the click on the button on the page (so data[i].timeframes.xxx + Last xxx)
            card.insertAdjacentHTML(`afterbegin`, 
            '<div class="" id=""><div><h2 class="">' 
            + data[i].title + 
            '</h2><span class="">...</span></div><p class=""><span class="current">' 
            + data[i].timeframes.daily.current +
            '</span>hrs<span class="last">Last <span class="card-period"> day </span> <span class="previous-period">'
            + data[i].timeframes.daily.previous + 
            '</span></span></p></div>');

            let cardPeriod = document.querySelectorAll('.card-period');
            let reportPeriod = document.querySelectorAll('.report-period');
            let currentPeriod = document.querySelectorAll('.current');
            //let btnsArr = Array.from(btns);
            for(let period of reportPeriod){
                //to attach an event listener
                period.addEventListener('click', () => {
                    //Retrieves the id
                    idElt = period.getAttribute('id');
                    //...to pass it as innerHTML
                    //For of to go through the NodeList
                    for (let item of cardPeriod) {
                        item.innerHTML = idElt;
                    }

                    //Retrieves all the span.current
                    //console.log(currentPeriod);
                    //idElt va servir a faire correspondre le click sur la période avec les valeurs idoines du fichier json
                    // let currentDailyHours = data[i].timeframes.daily.current;
                    // let currentWeeklyHours = data[i].timeframes.weekly.current;
                    // let currentMonthlyHours = data[i].timeframes.monthly.current;
                    //console.log(currentWeeklyHours);
                    //Maintenant il faut faire changer les valeurs par celles amenées du JSON via le click.


                        //renvoie les bonnes valeurs
                        if (idElt == 'day'){
                            currentPeriod.innerHTML = data[i].timeframes.daily.current;
                            console.log(currentPeriod.innerHTML);
                        }
                        else if (idElt == 'week'){
                            currentPeriod.innerHTML = data[i].timeframes.weekly.current;
                            console.log(currentPeriod.innerHTML);
                        }
                        else {
                            for(let i = 0; i < data.length; i++){
                                currentPeriod.innerHTML = data[i].timeframes.monthly.current;
                            }
                            console.log(currentPeriod);
                            console.log(data[i].timeframes.monthly.current);
                                // currentPeriod.innerText = currentMonthlyHours;
                                // console.log(currentPeriod);
                        }   
                })


        //QuerySelectorAll creates a NodeList, not an array. It needs a for of loop to be used
        //Isolates periods from each other...
      
                // for(let i = 0; i < data.length; i++){ 
                //     //console.log(data);
                                   
                // }
            }
        }
    })
