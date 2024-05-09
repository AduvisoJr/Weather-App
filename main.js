const api_key = `e2f1c98f6dd6b3f365b5a895eb231980`;

async function getData() {
    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let res = await fetch(url);

    let data = await res.json();
    append(data);
}

async function getData2(){
    let city = document.getElementById("city").value;

    url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${api_key}`

    let res2 = await fetch(url2);

    let data2 = await res2.json();
}

async function getData3(){
    let city = document.getElementById("city").value;

    url3 = `https://api.weatherapi.com/v1/forecast.json?key=0217941e66574da5b1e130028222705&q=${city}&days=10&`;

    let res3 = await fetch(url3);

    let data3 = await res3.json();

    console.log(data3.forecast.forecastday);
    append3(data3.forecast.forecastday);
    append4(data3.forecast.forecastday);
}

function append3
