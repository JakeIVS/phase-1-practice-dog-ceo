console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(r=>r.json())
    .then((data)=> {
        data.message.forEach((image)=>{
            const img = document.createElement('img')
            const imageContainer = document.querySelector("#dog-image-container")
            img.src = image;
            img.style.width = '25%'
            imageContainer.appendChild(img);
        })
    })
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data=>{
        let breeds = data.message;
        for (let breed in breeds) {
            let li= document.createElement('li');
            let ul= document.querySelector('#dog-breeds')
            li.textContent = breed;
            ul.appendChild(li);
        }
    })
})
