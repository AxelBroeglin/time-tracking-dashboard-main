fetch('data.json')
.then(res => res.json())
.then(data => {
  
  data.map(d => {
    let activity = document.createElement('div'),
    tile = document.createElement('div'),
    main = document.createElement('div'),
    title = document.createElement('div'),
    present = document.createElement('div'),
    popup = document.createElement('div'),
    previous = document.createElement('div');
    activity.classList.add('activity');
    tile.classList.add('tile');
    main.classList.add('main');
    title.classList.add('title');
    present.classList.add('present');
    popup.classList.add('popup');
    previous.classList.add('previous');
    document.body.appendChild(activity);
    activity.appendChild(tile);
    tile.appendChild(main);
    tile.appendChild(popup);
    tile.appendChild(previous);
    main.appendChild(title);
    main.appendChild(present);
    title.textContent += d.title;

    
    // Default timeframe == Weekly
    document.querySelector('#weekly').classList.add('active');
    present.textContent = d.timeframes.weekly.current + 'hrs';
    previous.textContent = 'Last week - ' + d.timeframes.weekly.previous + 'hrs';
    
  })
  

  // Change timeframe onclick
  let timeframes = document.querySelectorAll('.link');
  timeframes.forEach(timeframe => {
    timeframe.onclick = () => {
      let selectedTimeframe = timeframe.textContent.toLowerCase(),
          allPresent = document.querySelectorAll('.present'),
          allPrevious = document.querySelectorAll('.previous'),
          prefix;
      
      document.querySelectorAll('.link').forEach(link => link.classList.remove('active'));
      document.querySelector('#' + selectedTimeframe).classList.add('active');
          
      switch(selectedTimeframe) {
        case 'daily':
          prefix = 'Yesterday - ';
          break;
        case 'weekly':
          prefix = 'Last week - ';
          break;
        default:
          prefix = 'Last month - ';
      }
      
      allPresent.forEach((present, i) => {
        present.textContent = data[i].timeframes[selectedTimeframe].current + 'hrs';
      })
      allPrevious.forEach((previous, i) => {
        previous.textContent = prefix + data[i].timeframes[selectedTimeframe].previous + 'hrs';
      })
      
    }
  })
  
})