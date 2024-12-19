const apiKey="5cc2722256c04a808f8183429241812"
const apiUrl="https://api.weatherapi.com/v1/forecast.json?days=3&"

const search=document.querySelector("#search");
const btn=document.querySelector("#btn");

const icon = document.querySelector("#img-icon");
const iconTwo = document.querySelector("#icon2");
const iconThree = document.querySelector("#icon3");


const now=new Date();
const day = now.getDay();
const month = now.getMonth();
const dayDate = now.getDate();


async function check(city) {
    let res=await fetch(apiUrl+`key=${apiKey}`+`&q=${city}`);
    if(res.status==200){
        let final=await res.json();
        document.querySelector("#weathertable").classList.replace("d-none", "d-block");
        console.log(final);
        dispaly(final.current,final.location);
        displaytwo(final.forecast.forecastday);
        
    }
    if(res.status==400){
        document.querySelector("#weathertable").classList.replace("d-block", "d-none");
    }
}




function dispaly(current,location){
    switch(day){
        case 0:
            document.querySelector("#dayName").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#dayName").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#dayName").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#dayName").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#dayName").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#dayName").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#dayName").innerHTML = "Saturday";
            break;
    }
    switch(month){
        case 0:
            document.querySelector("#da").innerHTML = dayDate + "January";
            break;
        case 1:
            document.querySelector("#da").innerHTML = dayDate + "February";
            break;
        case 2:
            document.querySelector("#da").innerHTML = dayDate + "March";
            break;
        case 3:
            document.querySelector("#da").innerHTML = dayDate + "April";
            break;
        case 4:
            document.querySelector("#da").innerHTML = dayDate + "May";
            break;
        case 5:
            document.querySelector("#da").innerHTML = dayDate + "June";
            break;
        case 6:
            document.querySelector("#da").innerHTML = dayDate + "July";
            break;
        case 7:
            document.querySelector("#da").innerHTML = dayDate + "August";
            break;
        case 8:
            document.querySelector("#da").innerHTML = dayDate + "September";
            break;
        case 9:
            document.querySelector("#da").innerHTML = dayDate + "October";
            break;
        case 10:
            document.querySelector("#da").innerHTML = dayDate + "November";
            break;
        case 11:
            document.querySelector("#da").innerHTML = dayDate + "December";
            break;
    }
    document.querySelector("#name").innerHTML=location.name;
    document.querySelector("#deg").innerHTML=current.temp_c+"°C";
    icon.src=`http:${current.condition.icon}`;
    document.querySelector("#mood").innerHTML = current.condition.text;
    document.querySelector("#umberella").innerHTML ="<img src='image/icon-umberella.png' alt=''> "+ current.humidity + "%";
    document.querySelector("#wind").innerHTML ="<img src='image/icon-wind.png' alt=''> " + current.wind_kph + "km/h";
    document.querySelector("#compass").innerHTML ="<img src='image/icon-compass.png' alt=''> " + current.wind_dir;
    
}

function displaytwo(f){
    
    switch(day+1){
        case 0:
            document.querySelector("#day2").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#day2").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#day2").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#day2").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#day2").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#day2").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#day2").innerHTML = "Saturday";
            break;
    }
    iconTwo.src=`http:${f[1].day.condition.icon}`;
    document.querySelector("#deg2").innerHTML=f[1].day.maxtemp_c + "°C";
    document.querySelector("#tem").innerHTML = f[1].day.mintemp_c + "°";
    document.querySelector("#mood2").innerHTML = f[1].day.condition.text;


    switch(day+2){
        case 0:
            document.querySelector("#day3").innerHTML = "sunday";
            break;
        case 1:
            document.querySelector("#day3").innerHTML = "Monday";
            break;
        case 2:
            document.querySelector("#day3").innerHTML = "Tuesday";
            break;
        case 3:
            document.querySelector("#day3").innerHTML = "Wednesday";
            break;
        case 4:
            document.querySelector("#day3").innerHTML = "Thursday";
            break;
        case 5:
            document.querySelector("#day3").innerHTML = "Friday";
            break;
        case 6:
            document.querySelector("#day3").innerHTML = "Saturday";
            break;
    }
    iconThree.src=`http:${f[2].day.condition.icon}`;
    document.querySelector("#deg3").innerHTML=f[2].day.maxtemp_c + "°C";
    document.querySelector("#temp2").innerHTML = f[2].day.mintemp_c + "°";
    document.querySelector("#mood3").innerHTML = f[2].day.condition.text;
}

btn.addEventListener("click", function(){
    if (search.value != ""){
        check(search.value);
    }
});

