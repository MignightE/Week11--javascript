const myButton = document.querySelector ('button');

const image = document.querySelector('img');
const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg",];

myButton.addEventListener('click', changeImage);


function changeImage ()  { 

    let randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];

}


    


