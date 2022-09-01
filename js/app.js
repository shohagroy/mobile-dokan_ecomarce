const toggleSpiner = document.querySelector('.amination-spinar');


const getphone = (search = "" )=>{
toggleSpiner.classList.remove('d-none')

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
                <button class="btn buy-button" onclick="buyNowButton(${cardData.slug})">Buy Now</button>
            </div>
        </div>
    `
    toggleSpiner.classList.add('d-none')
    mainItemContainer.appendChild(cardDiv);

}

const buyNowButton = () =>{

    console.log("buy now button clicked")

}


getphone('iphone')
getphone('samsung')
getphone('oppo')
getphone('huawei')
getphone('watch')


const seeMoreButton = document.getElementById('button-div');

function phones(phoneArray){
    phoneArray.splice(0, 3).forEach(phone =>{
        displayCard(phone);
    })

    document.getElementById('see-more-button1').addEventListener('click', ()=>{

        toggleSpiner.classList.remove('d-none')

        phoneArray.splice(4, 12).forEach(phone =>{
            displayCard(phone);
        })

        seeMoreButton.style.display = "none";
    })

console.log(phoneArray[0])


}



// see all function


// display catagory function 

const displayCatagory = (itemName) =>{
toggleSpiner.classList.remove('d-none')

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
        toggleSpiner.classList.remove('d-none')

        mainItemContainer.textContent = '';
            items.forEach(phone =>{
                displayCard(phone);
            })
            seeAllBtnDiv.style.display = "none";
        })
    }
}


// search function find functin  

const searchPhones = (find)=>{
    toggleSpiner.classList.remove('d-none')
    fetch(`https://openapi.programming-hero.com/api/phones?search=${find}`)
    .then(res => res.json())
    .then(data => callJson(data.data))

    const callJson = (phones)=>{
        mainItemContainer.textContent = '';

        console.log(phones.length);
        if(phones.length == 0){
            console.log(mainItemContainer)
            mainItemContainer.innerHTML = `
            <div class="container text-center">
            <h1 >Your Search <span class="text-danger">"${find}"</span> is ${phones.length},No Result Found ! </h1>
            </div>`

            toggleSpiner.classList.add('d-none')
        }
        else{
            phones.forEach(phone =>{
                displayCard(phone);
            })
        }
        seeMoreButton.style.display = "none";

        }  
}

    const searchArea = document.getElementById('search-fild');

    // enter function 
    searchArea.addEventListener("keyup", (event)=>{
        console.log(event.key)
        if(event.key === "Enter"){
            searchPhones(searchArea.value);
            searchArea.value = "";
        }
    })
    // search button function 
document.getElementById('search-button').addEventListener('click', ()=>{
    searchPhones(searchArea.value);
    searchArea.value = "";

})



