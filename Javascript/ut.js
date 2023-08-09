const mobile_nav = document.querySelector('.mobile-navbar-btn')
const nav_header = document.querySelector('.navbar')
const description = document.querySelector('.description')
const toggleNavbar = () => {
  console.log('object')
  nav_header.classList.toggle('active')
  description.classList.toggle('search-boxnew')
}
mobile_nav.addEventListener('click', () => toggleNavbar())

let slideIndex = 1
showSlides(slideIndex)


function plusSlides(n) {
  showSlides((slideIndex += n))
}


function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cc33a40adcmsh339bbad1bef2299p1ab06djsncbcd33f445ea',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
}
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
let arr = [ 'dehradun', 'Nainital', 'Mussoorie']

async function updateWeather() {
  for (let i = 0; i < arr.length; i++) {
    await getWeather(arr[i], i)
  }
  const nodeList = document.querySelectorAll('.example')
  for (let i = 0; i < nodeList.length; i++) {
    console.log(ans)
    let val = ans[i]
    console.log(`:${ans[i]}`)
    nodeList[i].innerText = ` ${val}`
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
