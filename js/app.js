
const getphone = (search = "" )=>{
    const phoneHanterApi = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(phoneHanterApi)
    .then(res => res.json())
    .then(data => phones(data.data))
}

const seeAllBtnDiv = document.getElementById('button-div2');
seeAllBtnDiv.style.display = "none";

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
getphone('samsung')
getphone('oppo')
getphone('huawei')
getphone('watch')


function phones(phoneArray){
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })
    

    document.getElementById('see-more-button1').addEventListener('click', ()=>{

        phoneArray.splice(4, 12).forEach(phone =>{
            displayCard(phone);
        })

        const seeMoreButton = document.getElementById('button-div');
        seeMoreButton.style.display = "none";
    })

}

// see all function


// display catagory function 

const displayCatagory = (itemName) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${itemName}`)
    .then(res => res.json())
    .then(data => displayItem(data.data))

    const displayItem = (items)=>{

        mainItemContainer.textContent = '';
        const seeMoreButton = document.getElementById('button-div');
        seeMoreButton.style.display = "none";
        seeAllBtnDiv.style.display = "block";

        items.splice(0,12).forEach(phone =>{
            displayCard(phone);
        })


        document.getElementById('see-all-button').addEventListener('click', ()=>{
        mainItemContainer.textContent = '';
        console.log(items)
            items.forEach(phone =>{
                displayCard(phone);

                console.log(items)
            })
            seeAllBtnDiv.style.display = "none";
        })
    }
}
