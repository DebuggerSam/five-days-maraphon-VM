const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const mainSlidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;


document.addEventListener('keydown',
  event => {
    if(event.key === 'ArrowUp'){
        changeSlide('up');
    }else if(event.key === 'ArrowDown'){
        changeSlide('down');
    }
  }
)

sidebar.style.top = `-${(mainSlidesCount -1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
})

downBtn.addEventListener('click', () => {
  changeSlide('down');
})

function changeSlide(description){
  if(description === 'up'){
    activeSlideIndex++;
    if(activeSlideIndex === mainSlidesCount)
    {activeSlideIndex = 0;}
  }else if(description === 'down'){
    activeSlideIndex--;
    if(activeSlideIndex< 0)
    {activeSlideIndex = mainSlidesCount - 1;}
  }
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}