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
            '</span>hrs</span><span class="last">Last day </span> <span class="previous-period">- '
            + data[i].timeframes.daily.previous + 
            '</span></span></p></div>');
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

  // Change timeframe onclick
  let timeframes = document.querySelectorAll('.report-period');
  timeframes.forEach(timeframe => {
    timeframe.onclick = () => {
      let selectedTimeframe = timeframe.textContent.toLowerCase(),
          allPresent = document.querySelectorAll('.current'),
          allPrevious = document.querySelectorAll('.last'),
          prefix;
      
          
      switch(selectedTimeframe) {
        case 'daily':
          prefix = 'Yesterday  ';
          break;
        case 'weekly':
          prefix = 'Last week - ';
          break;
        default:
          prefix = 'Last month - ';
      }
      
      allPresent.forEach((present, i) => {
        present.textContent = data[i].timeframes[selectedTimeframe].current;
      })
      allPrevious.forEach((previous, i) => {
        previous.textContent = prefix + data[i].timeframes.previous;
      })
      
    }
  })
  
            })
        }
    })