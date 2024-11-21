
//-------------------aside right menu--------------------//
if (location.href.match("index.html")) {
  document.querySelector('.aside-link-home').classList.add('hidden');
};
if (location.href.match("spa.html")) {
  document.querySelector('.aside-link-spa').classList.add('hidden');
};
if (location.href.match("menu.html")) {
  document.querySelector('.aside-link-menu').classList.add('hidden');
};
if (location.href.match("hotel.html")) {
  document.querySelector('.aside-link-hotel').classList.add('hidden');
};
if (location.href.match("enjoy.html")) {
  document.querySelector('.aside-link-enjoy').classList.add('hidden');
};

//-----------------------parallax------------------------//
const parallax = document.querySelectorAll('.para');
const factor = 0.1;

for (let i = 0; i < parallax.length; i++) {
  window.addEventListener('scroll', function () {
    if (parallax[i].getBoundingClientRect().top < window.innerHeight) {
      const difference = parallax[i].getBoundingClientRect().top * factor - window.scrollY * factor
      parallax[i].style.backgroundPositionY = `${difference}px,${difference * 0}px`;
    }
  })
}

//---------------------Hamburger menu------------------------//
const sitemapBtn = document.querySelectorAll(".sitemap-btn");
const sitemap = document.getElementById('sitemap');
const sitemapList = document.querySelectorAll('.sm-list li a');

for (let i = 0; i < sitemapBtn.length; i++) {
  sitemapBtn[i].addEventListener('click', () => {
    for (let i = 0; i < sitemapBtn.length; i++) {
      sitemapBtn[i].classList.toggle('active');
      
    }
    sitemap.classList.toggle('show')

    for(let j=0;j<sitemapList.length;j++){
      sitemapList[j].addEventListener('click',()=>{
        sitemapBtn[i].classList.remove('active');
        sitemap.classList.remove('show');
      })
    }
  })
}


//--------------return top Smooth scroll----------------//
const reTop = document.getElementById('reTop');

reTop.addEventListener('click', () => {
  window.scroll({
    top: window.top,
    behavior: "smooth"
  })
});

//--------------become visible animation----------------//
const secTitle = document.querySelectorAll('.section-title');
const toLeft = document.querySelectorAll('.motionToLeft');
const toTop = document.querySelectorAll('.motionToTop');
const toRight = document.querySelectorAll('.motionToRight');


const eventRun = () => {

  for (let i = 0; i < secTitle.length; i++) {
    const secTitleDis = secTitle[i].getBoundingClientRect().top;

    if (secTitleDis < window.innerHeight * 0.7) {

      if (secTitle[i].classList.contains('active') === false) {
        const tagSecTitle = secTitle[i];
        const texts = tagSecTitle.textContent;
        const textsArray = [];

        tagSecTitle.textContent = "";

        for (let j = 0; j < texts.split('').length; j++) {
          const ts = texts.split('')[j];
          if (ts === ' ') {
            textsArray.push(' ');
          } else {
            textsArray.push(`<span style="animation-delay:${j * 0.1}s;">${ts}</span>`);
          }
        }
        for (k = 0; k < textsArray.length; k++) {
          tagSecTitle.innerHTML += textsArray[k];
        }
        secTitle[i].classList.add('active');
      }
    }
  }

  for (let l = 0; l < toLeft.length; l++) {
    const toLeftDis = toLeft[l].getBoundingClientRect().top;

    if (toLeftDis < window.innerHeight * 0.7) {
      toLeft[l].classList.add('active');
    }
  }

  for (let m = 0; m < toTop.length; m++) {
    const toTopDis = toTop[m].getBoundingClientRect().top;

    if (toTopDis < window.innerHeight * 0.7) {
      toTop[m].classList.add('active');
    }
  }

  for (let n = 0; n < toRight.length; n++) {
    const toRightDis = toRight[n].getBoundingClientRect().top;

    if (toRightDis < window.innerHeight * 0.7) {
      toRight[n].classList.add('active');
    }
  }
}
window.addEventListener('scroll', eventRun);


//--------------accordion menu----------------//
const accordionBtn = document.querySelectorAll('.accordion-list');
const detailBtn = document.querySelectorAll('.detail-btn');

for (let i = 0; i < accordionBtn.length; i++) {
  const accordionTarget = document.querySelectorAll('.accordion-content');
  accordionBtn[i].addEventListener('click', () => {
    accordionBtn[i].classList.toggle('active');
    accordionTarget[i].classList.toggle('active');
  })
}

for (let j = 0; j < detailBtn.length; j++) {
  const accordionTarget = document.querySelectorAll('.detail-content');
  detailBtn[j].addEventListener('click', () => {
    detailBtn[j].classList.toggle('active');
    accordionTarget[j].classList.toggle('active');
  })
}

//----------------------Slide show(Gallery)------------------------//
const currentStyle = document.getElementById('gallery-st');
const liStyle = document.querySelectorAll('.gallery-list li')
const currentImg = document.getElementById('current-image');
const imgList = document.querySelectorAll('.gallery-list li img');

for (let m = 0; m < imgList.length; m++) {
    imgList[m].addEventListener('click', function () {
        if (currentImg.getAttribute('src') !== imgList[m].getAttribute('src')) {
            currentImg.setAttribute('src', this.getAttribute('src'));
            currentStyle.setAttribute('class', liStyle[m].getAttribute('class'));
        }
        stopTimer();
        startTimer();
    })
}

const imgSrcArray = [];
const stSrcArray = [];

for (let n = 0; n < imgList.length; n++) {
    const imgSrc = imgList[n].getAttribute('src');
    imgSrcArray.push(imgSrc);
}
for (let p = 0; p < liStyle.length; p++) {
    const stSrc = liStyle[p].getAttribute('class');
    stSrcArray.push(stSrc);
}

let timer;

function startTimer() {
    timer = setInterval(function () {
        const currentSrc = currentImg.getAttribute('src');
        if (currentSrc == imgSrcArray[0]) {
            currentImg.setAttribute('src', imgSrcArray[1]);
            currentStyle.setAttribute('class', stSrcArray[1]);
        } else if (currentSrc == imgSrcArray[1]) {
            currentImg.setAttribute('src', imgSrcArray[2]);
            currentStyle.setAttribute('class', stSrcArray[2]);
        } else if (currentSrc == imgSrcArray[2]) {
            currentImg.setAttribute('src', imgSrcArray[3]);
            currentStyle.setAttribute('class', stSrcArray[3]);
        } else if (currentSrc == imgSrcArray[3]) {
            currentImg.setAttribute('src', imgSrcArray[4]);
            currentStyle.setAttribute('class', stSrcArray[4]);
        } else if (currentSrc == imgSrcArray[4]) {
            currentImg.setAttribute('src', imgSrcArray[5]);
            currentStyle.setAttribute('class', stSrcArray[5]);
        } else if (currentSrc == imgSrcArray[5]) {
            currentImg.setAttribute('src', imgSrcArray[0]);
            currentStyle.setAttribute('class', stSrcArray[0]);
        }
    }, 7000)
}

function stopTimer() {
    clearInterval(timer);
}

startTimer();


const currentStyle2 = document.getElementById('gallery-st2');
const currentImg2 = document.getElementById('current-image2');
const imgList2 = document.querySelectorAll('.gallery-list2 li img');

for (let m = 0; m < imgList2.length; m++) {
    imgList2[m].addEventListener('click', function () {
        if (currentImg2.getAttribute('src') !== imgList2[m].getAttribute('src')) {
            currentImg2.setAttribute('src', this.getAttribute('src'));
        }
        stopTimer2();
        startTimer2();
    })
}

const imgSrcArray2 = [];
const stSrcArray2 = [];

for (let n = 0; n < imgList2.length; n++) {
    const imgSrc2 = imgList2[n].getAttribute('src');
    imgSrcArray2.push(imgSrc2);
}

let timer2;

function startTimer2() {
    timer2 = setInterval(function () {
        const currentSrc2 = currentImg2.getAttribute('src');
        if (currentSrc2 == imgSrcArray2[0]) {
            currentImg2.setAttribute('src', imgSrcArray2[1]);
        } else if (currentSrc2 == imgSrcArray[1]) {
            currentImg2.setAttribute('src', imgSrcArray2[2]);
        } else if (currentSrc2 == imgSrcArray[2]) {
            currentImg2.setAttribute('src', imgSrcArray2[3]);
        } else if (currentSrc2 == imgSrcArray[3]) {
            currentImg2.setAttribute('src', imgSrcArray2[4]);
        } else if (currentSrc2 == imgSrcArray[4]) {
            currentImg2.setAttribute('src', imgSrcArray2[5]);
        } else if (currentSrc2 == imgSrcArray[5]) {
            currentImg2.setAttribute('src', imgSrcArray2[0]);
        }
    }, 7000)
}

function stopTimer2() {
    clearInterval(timer2);
}

startTimer2();