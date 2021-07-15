
document.body.innerHTML='<div id="launch-widget"><ul id="launch-list"></ul></div>'; // create the widget div & ul container
const ul = document.getElementById('launch-list');

const launch = document.getElementsByClassName('launch');
const numberOfItems = 10; //put a value between 1-10  

function addLaunch (name, date, hour) {

    // create new li
    let newLi = document.createElement("li");
    newLi.className = 'launch';

    // create title div container
    let titleContainer = document.createElement("div");
    titleContainer.className = 'title-container';
    newLi.appendChild(titleContainer);

    // create h4 in title-container
    let newH4 = document.createElement("h4");
    newH4.className = 'title';
    titleContainer.appendChild(newH4);
    
    // insert title (data) into h4
    let newContent = document.createTextNode(name);
    newH4.appendChild(newContent);

    // create meta div container
    let newMeta = document.createElement("div");
    newMeta.className = 'meta-container';
    newLi.appendChild(newMeta);

    // create new <p> for Date
    let newMetaDate = document.createElement("p");
    newMetaDate.className = 'meta';
    newMeta.appendChild(newMetaDate);

    // create new <p> for Hour
    let newMetaHour = document.createElement("p");
    newMetaHour.className = 'meta';
    newMeta.appendChild(newMetaHour);

    // insert date (data) into newMetaDate
    let newDate = document.createTextNode(date);
    newMetaDate.appendChild(newDate);
    
    // insert hour (data) into newMetaHour
    let newHour = document.createTextNode(hour);
    newMetaHour.appendChild(newHour);

    ul.appendChild(newLi); // insert <li> in <ul>
    
  }


//fetch API and iterate through results
fetch(`https://ll.thespacedevs.com/2.2.0/launch/upcoming/?hide_recent_previous=true&format=json&limit=${numberOfItems}`).then(res => res.json()).then(res => {
  
    const data = res.results;
    let date = null;

    data.forEach(e => {
    
    date = new Date(e.net);
    const name = e.name;
    const strdate = date.getDate() + '-' + (date.getMonth()+1).toString().padStart(2, '0') + '-' + date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, '0') +  ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');

    addLaunch(name, strdate, hour);
    
    });
    
    // for(let i = 0; i < launch.length; i++){
    //   launch[i].addEventListener('click', (e) => {  // (<li> OnClick event)
    //     console.log(e);
    //     //add code here
    // })}

    
  }).catch(err => console.log(err))
