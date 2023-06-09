let movies = [
    {
        name: 'WI  vs IND 317/8 (50)',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'Rudra: The Edge of Darkness',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'The Book of Boba Fett',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
]

// Code to setup the carousel section
let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    slide.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images which is in slider-data.js
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';

    sliders.push(slide);

    //adding sliding effect
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }

}

// code to make it scroll from the first element to the last and set interval 
for(let i = 0; i < 6; i++){
    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);

// video cards (in this card, a video will play when card hovered)
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})