const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cc33a40adcmsh339bbad1bef2299p1ab06djsncbcd33f445ea',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
}
// let rain = [0, 1, 2, 3, 4, 5]
let ans = [0, 1, 2, 3, 4, 5]
const getWeather = async (city, i) => {
  var response = await (
    await fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
      options,
    )
  ).json()
  // .then((response) => response.json())
  // .then((response) => {
  //   // console.log(response)
  //   //   document.write(response);

  //   // cloud_pct.innerHTML = response.cloud_pct
  //   // temp.innerHTML=  response.temp
  //   // console.log(response.temp)

  //   // console.log(ans)
  //   // console.log(val)
  //   // return response.temp
  //   // feels_like.innerHTML = response.feels_like
  //   // humidity.innerHTML = response.humidity
  //   // min_temp.innerHTML = response.min_temp
  //   // max_temp.innerHTML = response.max_temp
  //   // wind_speed.innerHTML = response.wind_speed
  //   // wind_degrees.innerHTML = response.wind_degrees
  //   // sunrise.innerHTML = response.sunrise
  //   // sunset.innerHTML = response.sunset
  // })
  // .catch((err) => console.log(err))
  ans[i] = response.temp
  // rain[i] = response.cloud_pct
}
// let aloha = document.getElementsByClassName('aloha');
// for(let al=0;al<aloha.length;al++)  {
//   aloha[al].setAttribute("id",'temp');
//   getWeather(aloha[al].innerHTML);
//   console.log(aloha[al].innerHTML);
//   aloha[al].removeAttribute("id",'temp');
// }
// let submit = document.getElementById('submit')

// submit.addEventListener('click',getWeather("delhi"),false);
let arr = ['ujjain', 'Pachmarhi', 'bhopal', 'dehradun', 'Nainital', 'Mussoorie']

async function updateWeather() {
  for (let i = 0; i < arr.length; i++) {
    await getWeather(arr[i], i)
  }
  const nodeList = document.querySelectorAll('.example')
  for (let i = 0; i < nodeList.length; i++) {
    // console.log(ans)
    let val = ans[i]
    // console.log(rain)
    // console.log(`:${ans[i]}`)
    nodeList[i].innerText = ` ${val}  `
    // nodeList[i].innerText =  `${rain[i]}`
  }
}
// let city = document.querySelectorAll('.cityname')

// for (let i = 0; i < city.length; i++) {
//   city[i].style.color = 'red'

// }
// console.log(ans)
// for (let i = 0; i < arr.length; i++) {
//   console.log(ans[i])
// }

updateWeather()
