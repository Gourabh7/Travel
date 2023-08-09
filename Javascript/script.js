const mobile_nav = document.querySelector('.mobile-navbar-btn')
const nav_header = document.querySelector('.navbar')
const description = document.querySelector('.description')
const toggleNavbar = () => {
  console.log('object')
  nav_header.classList.toggle('active')
  description.classList.toggle('search-boxnew')
}
mobile_nav.addEventListener('click', () => toggleNavbar())
// console.log(nav_header)

function searchfunc() {
  let array = [
    'ujjain',
    'nanital',
    'bhopal',
    'panchmari',
    'dehradun',
    'mussorie',
  ]

  let variables = document.getElementById('myinput').value.toUpperCase()

  let newelement = document.getElementsByClassName('search-result')

  let mpp = new Map([
    ['ujjain', './mppackage.html#ujjain'],
    ['nanital', './uttarakhand.html#nanital'],
    ['bhopal', './mppackage.html#bhopal'],
    ['panchamari', './mppackage.html#panchamari'],
    ['dehradun', './uttarakhand.html#dehradun'],
    ['mussorie', './uttarakhand.html#mussorie'],
    ['Gopal Mandir', './mppackage.html#ujjain'],
    ['Harsiddhi Temple', './mppackage.html#ujjain'],
    ['Bhairav Temple', './mppackage.html#ujjain'],
    ['Mahakaleshwar Temple', './mppackage.html#ujjain'],
    ['Mangalnath Temple', './mppackage.html#ujjain'],
    ['Ram Ghat', './mppackage.html#ujjain'],
    ['Sandipani Ashram', './mppackage.html#ujjain'],
    ['ved Shala', './mppackage.html#ujjain'],
    ['Triveni_museum', './mppackage.html#ujjain'],
    ['Satpura National Park', './mppackage.html#panchamari'],
    ['Chauragh Temple', './mppackage.html#panchamari'],
    ['Jata Shankar Caves', './mppackage.html#panchamari'],
    ['Christ Church', './mppackage.html#panchamari'],
    ['Dhoopgarh', './mppackage.html#panchamari'],
    ['Handi Khoh', './mppackage.html#panchamari'],
    ['Pandava Caves', './mppackage.html#panchamari'],
    ['Rajat Prapat waterfalls', './mppackage.html#panchamari'],
    ['Bison Lodge', './mppackage.html#panchamari'],
    ['Sair sapata', './mppackage.html#bhopal'],
    ['Gauhar Mahal', './mppackage.html#bhopal'],
    ['Moti Masjid', './mppackage.html#bhopal'],
    ['Taj-ul-Masajid', './mppackage.html#bhopal'],
    ['Upper Lake', './mppackage.html#bhopal'],
    ['van vihar National park', './mppackage.html#bhopal'],
    ['Wind And Waves', './mppackage.html#bhopal'],
    ['Bhojtal', './mppackage.html#bhopal'],
    ['sanchi stupa', './mppackage.html#bhopal'],
    ['robber cave', './uttarakhand.html#dehradun'],
    ['Sahastradhara', './uttarakhand.html#dehradun'],
    ['dehradun zoo', './uttarakhand.html#dehradun'],
    ['regional science centerdehradun tourism', './uttarakhand.html#dehradun'],
    ['clock tower', './uttarakhand.html#dehradun'],
    ['Fun valley', './uttarakhand.html#dehradun'],
    ['shikhar fall', './uttarakhand.html#dehradun'],
    ['har ki dun', './uttarakhand.html#dehradun'],
    ['tapovan temple', './uttarakhand.html#dehradun'],
    ['Naini Lake', './uttarakhand.html#nanital'],
    ['Nainital ropeway', './uttarakhand.html#nanital'],
    ["Land's end", './uttarakhand.html#nanital'],
    ['bhimtal', './uttarakhand.html#nanital'],
    ['Jim Corbett National Park', './uttarakhand.html#nanital'],
    ['Naukuchital', './uttarakhand.html#nanital'],
    ['Khurpa Taal', './uttarakhand.html#nanital'],
    ['Snow View Point', './uttarakhand.html#nanital'],
    ['Naina peak', './uttarakhand.html#nanital'],
    ['Kempty Falls', './uttarakhand.html#mussorie'],
    ["Camel's Back Road", './uttarakhand.html#mussorie'],
    ['Lal Tibba', './uttarakhand.html#mussorie'],
    ['Comapany Garden', './uttarakhand.html#mussorie'],
    ['Cloud End', './uttarakhand.html#mussorie'],
    ['Bhatta Falls', './uttarakhand.html#mussorie'],
    ['Mussoorie Lake', './uttarakhand.html#mussorie'],
    ['Happy Valley', './uttarakhand.html#mussorie'],
    ['Jabarkhet Nature Reserve', './uttarakhand.html#mussorie'],
  ])
  if (variables) {
    let innerHtml = ''
    mpp.forEach(function (value, key) {
      if (key.toUpperCase().indexOf(variables) > -1) {
        innerHtml += `<p class="have"><a href=${value} class="insidehave" >${key}</a></p>`
      }
    })
    document.getElementById('joker').innerHTML = innerHtml
    document.getElementById('joker').style.display = ''
  } else {
    document.getElementById('joker').style.display = 'none'
  }
}

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
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

let newplace = [
  'Gopal Mandir',
  'Harsiddhi Temple',
  'Bhairav Temple',
  'Mahakaleshwar Temple',
  'Mangalnath Temple',
  'Ram Ghat',
  'Sandipani Ashram',
  'ved Shala',
  'Triveni_museum',
  'Satpura National Park',
  'Chauragh Temple',
  'Jata Shankar Caves',
  'Christ Church',
  'Dhoopgarh',
  'Handi Khoh',
  'Pandava Caves',
  'Rajat Prapat waterfalls',
  'Bison Lodge',
  'Sair sapata',
  'Gauhar Mahal',
  'Moti Masjid',
  'Taj-ul-Masajid',
  'Upper Lake',
  'van vihar National park',
  'Wind And Waves',
  'Bhojtal',
  'sanchi stupa',
  'robber cave',
  'Sahastradhara',
  'dehradun zoo',
  'regional science center dehradun tourism',
  'clock tower',
  'Fun valley',
  'shikhar fall',
  'har ki dun',
  'tapovan temple',
  'Naini Lake',
  'Snow View Point',
  'Naina peak',
  'Nainital ropeway',
  "Land's end",
  'bhimtal',
  'Jim Corbett National Park',
  'Naukuchital',
  'Khurpa Taal',
  'Kempty Falls',
  "Camel's Back Road",
  'Lal Tibba',
  'Comapany Garden',
  'Cloud End',
  'Bhatta Falls',
  'Mussoorie Lake',
  'Happy Valley',
  'Jabarkhet Nature Reserve',
]


