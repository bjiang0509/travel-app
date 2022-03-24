import { dateProcess } from "./date";

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here")

    let destination = document.querySelector('#dest').value;
    let departDate = document.querySelector('#start').value;
    let returnDate = document.querySelector('#end').value;
    
    //validations
    if(destination.length === 0 || departDate.length === '' || returnDate === ''){
        alert("all fields required");
        return
    }

    //after validation
    let today = new Date();
    let weatherBase = 'https://api.weatherbit.io/v2.0/forecast/daily';

    let postBody = {
        place: destination,
        weatherBase: weatherBase
    }
    fetch('http://localhost:8080/process-infos', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    })
    .then((res) => {
        return res.json();
    })
    .then((data)=> {
        console.log(data)
        let updateData = {
            departDate: departDate,
            returnDate: returnDate,
            data: data
        }
        updateUI(updateData);
    })
}

const updateUI = (data) => {
    let parent = document.querySelector('#result-container');
    let departure = document.querySelector('#departure');
    let returnDate = document.querySelector('#return');
    let duration = document.querySelector('#duration');
    let weather = document.querySelector('#weather');
    let description = document.querySelector('#description');
    parent.className = 'result';
    departure.innerHTML = `Your departure date: ${data.departDate}`;
    returnDate.innerHTML = `Your return date: ${data.returnDate}`;
    duration.innerHTML = `Your trip will last ${dateProcess(data.departDate, data.returnDate)} days`;
    weather.innerHTML = `The weather of ${data.data.wData.city} is expected to be ${data.data.wData.temp}C, ${data.data.wData.description}.
    The timezone is ${data.data.wData.timezone}`;
    let imageEle = document.createElement('img');
    imageEle.src = data.data.pixData.imageAddress;
    //remove previous image
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
    description.appendChild(imageEle);
}

export {handleSubmit, updateUI}
