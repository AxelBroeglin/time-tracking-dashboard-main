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
            card.classList.add('activities','activity-'+cardClass);
            //Places the loop at the end of Main
            document.getElementById('main').appendChild(card);
            //Creates the HTML elements + the looped objects from JSON.
            card.insertAdjacentHTML(`afterbegin`, 
            '<div class="content" id=""><div class="header"><h2 class="">' 
            + data[i].title + 
            '</h2><span class="">...</span></div><p class="current-hours"><span class="current-hours-count"><span class="current">' 
            + data[i].timeframes.daily.current +
            '</span>hrs</span><span class="last">Last <span class="card-period"> day </span> <span class="previous-period">- '
            + data[i].timeframes.daily.previous + 
            'hrs</span></span></p></div>');
        };

        let cardPeriod = document.querySelectorAll('.card-period');
        let reportPeriod = document.querySelectorAll('.report-period');
        let currentPeriod = document.querySelectorAll('.current');

        for(let period of reportPeriod){
            //to attach an event listener
            period.addEventListener('click', () => {
            //Retrieves the id
            idElt = period.getAttribute('id');
            reportPeriod.forEach((period) => {
                //Adds the active class, or removes it
                period.classList.remove('active');
                });
                if (period.classList.contains("active")) {
                period.classList.remove("active");
                }
                else {
                period.classList.add("active");
                }
            
            //Passes the ID as innerHTML
            //For of to go through the NodeList
            for (let item of cardPeriod) {
                item.innerHTML = idElt;
                };

            //renvoie les bonnes valeurs
            if (idElt == 'day'){
                currentPeriod.innerHTML = data[i].timeframes.daily.current;
                console.log(currentPeriod.innerHTML);
            }
            else if (idElt == 'week'){
                currentPeriod.innerHTML = data[i].timeframes.weekly.current;
                console.log(currentPeriod.innerHTML);
                console.log(data[i].timeframes.weekly.current);
            }
            else {
                currentPeriod.innerHTML = data[i].timeframes.monthly.current;
                console.log(currentPeriod.innerHTML);
                console.log(data[i].timeframes.monthly.current);
                currentPeriod.innerText = currentMonthlyHours;
                console.log(currentPeriod);
            }    
            console.log(idElt);
            })
        }


        let currentDailyHours = data[1].timeframes.daily.current;
        let currentWeeklyHours = data[2].timeframes.weekly.current;
        let currentMonthlyHours = data[1].timeframes.monthly.current;
        console.log(currentWeeklyHours);
    })