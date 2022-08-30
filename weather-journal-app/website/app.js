/* Global Variables */
const port = 8080 ;
const BaseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=7e1e9f77cd76ed233300673dba802a7f&units=metric";



// Create a new date instance dynamically with JS
let d = new Date();
let newDate =  d.getDate()+'/'+(d.getMonth()+1)+'/'+ d.getFullYear();
document.getElementById('date').innerHTML = newDate;
// Get Data from openweathermap Function
const GetData = async function(url='')
{
    const req = await fetch(url);
    try {
        const data = await req.json();
        return data
    }
    catch(error)
    {
        console.log("error",error)   
    }
  
}

// Post Data To Server
const PostData = async function (url,Data) {
    const response = await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Data) 
    });
    try{
        const sentdata = await response.json()
        console.log (sentdata);
        return sentdata ;

    }
    catch(error){
        console.log("error",error);
    }
}

// Update The Data of The Web Page
// AKA Get Data From server And Change it in html File
const changeData = async function(url){
    let req ;
    try {
        req = await fetch(url);
    }
    catch(error){
        console.log("error",error);
        alert("please run the local server first");
    }
    try{
        const DATA = await req.json();
        document.getElementById('date').innerHTML=`Date : ${DATA.date}`;
        let emoji ;
        if(DATA.temp < 0){
            emoji = "🥶";
        }else if (DATA.temp <15){
            emoji = "😐" ;
        }else if (DATA.temp <30){
            emoji = "😊" ;
        }else {
            emoji = "🥵" ;
        }
        document.getElementById('temp').innerHTML=`Temp : ${DATA.temp}°C ${emoji}`;
        document.getElementById('content').innerHTML=`user Fellings : ${DATA.feel}`;
    }
    catch(error){
        console.log("error",error)
        alert ("Cant GEt Data from Server");
    }
}

/* Instanse of the app */

const Run = function(){
    const zip = document.getElementById('zip').value;
    if (zip == "")
    {alert ("please enter zip code")}
    const USERfeel =  document.getElementById('feelings').value;
    GetData(BaseURL+zip+apiKey)
    .then(function(data){
        if ( data["message"] == "city not found")
        {alert("wrong Zip Code")}
        PostData('http://localhost:'+port+'/getData',{date : newDate , temp : data.main.temp , feel : USERfeel});
        
    })
    .then(function(){
        changeData('http://localhost:'+port+'/senData');
    })
}
document.getElementById('generate').addEventListener("click",Run)
