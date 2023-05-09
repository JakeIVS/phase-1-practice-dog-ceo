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
            li.addEventListener('click',()=>{
                li.style.color = 'orange'
            })
        }
    })
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change',()=>{
        let breedList = document.querySelector('#dog-breeds')
        let list = breedList.querySelectorAll('li')
        debugger
        list.forEach(li=>{
            breed = li.textContent
            debugger
            if (breed[0] !== dropdown.value) {
                li.style.display = 'none'
            } else {
                li.style.display = 'list-item'
            }
        })
    })
})
