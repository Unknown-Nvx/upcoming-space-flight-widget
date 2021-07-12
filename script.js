document.body.innerHTML='<div id="launch-widget"><ul id="launch-list"></ul></div>'; // create the widget div & ul container
const ul = document.getElementById('launch-list');

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

  function convertDate(date){
    const datearray = date.split("-");
    return datearray[2] + '-' + datearray[1] + '-' + datearray[0];
}

//fetch API and iterate through results
fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json').then(res => res.json()).then(res => {
  
    const data = res.results;

    data.forEach(e => {
    
    const name = e.name;
    const date = convertDate(e.net.slice(0, 10));
    const hour = e.net.slice(11, 19);

    addLaunch(name, date, hour);
    
    });

    // const launch = document.getElementsByClassName('launch'); // (OnClick event)

    // for(let i = 0; i < launch.length; i++){

    //   launch[i].addEventListener('click', (e) => {
    //     console.log(e);
    // })
    
    // }
    
  }).catch(err => console.log(err))