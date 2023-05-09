console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(r=>r.json())
    .then((data)=> {
        data.message.forEach((image)=>{
            const img = document.createElement('img')
            const imageContainer = document.querySelector("#dog-image-container")
            img.src = image;
            imageContainer.appendChild(img);
        })
    })
})