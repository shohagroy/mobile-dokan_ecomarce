
const getphone = (search = "" )=>{
    const phoneHanterApi = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(phoneHanterApi)
    .then(res => res.json())
    .then(data => phones(data.data))
}


const mainItemContainer = document.getElementById('main-container');

const displayCard = (cardData)=>{
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');

    cardDiv.innerHTML = `
        <div class="card h-100">
            <img src="${cardData.image}" class="card-img-top card-image" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cardData.phone_name}</h5>
                <p class="card-text">${cardData.brand}</p>
            </div>
            <div class="card-footer">
                <button class="btn buy-button"</button>Buy Now</button>
            </div>
        </div>
    `
    mainItemContainer.appendChild(cardDiv);


}


getphone('iphone')
const iPhone = (phoneArray)=>{
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })    
}


getphone('samsung')
const phones = (phoneArray)=>{
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })    
}


getphone('oppo')
const oppo = (phoneArray)=>{
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })    
}


getphone('huawei')
const huawei = (phoneArray)=>{
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })    
}

getphone('watch')
const watch = (phoneArray)=>{
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })    
}


document.getElementById('see-more-button').addEventListener('click', ()=>{
    console.log('click')

    const phone = (phoneArray)=>{
        phoneArray.splice(0, 3).forEach(phone =>{
            displayCard(phone);
        })    
    }

})





// see all function

