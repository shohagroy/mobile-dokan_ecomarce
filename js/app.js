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
                <button class="btn buy-button" onclick="buyNowButton('${cardData.slug}')">Buy Now</button>
            </div>
        </div>
    `
    toggleSpiner.classList.add('d-none')
    mainItemContainer.appendChild(cardDiv);

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








    // buy now button function 
    const buyNowButton = (selectPhone) =>{

    toggleSpiner.classList.remove('d-none')

        // buy now page function 
        fetch(`https://openapi.programming-hero.com/api/phone/${selectPhone}`)
        .then(res => res.json())
        .then(data => displayPhone(data.data));

        const displayPhone = (phoneDetails)=>{
            document.getElementById('main-page-container').style.display = "none";
            document.getElementById('mobile-details-container').innerHTML = `
            <div class="container my-5">
            <div class=" mobile-container">
            <div class="row d-flex">
                <div class="col-12 col-sm-12 col-md-5 bg-light">
                <img src="${phoneDetails.image}" class="img-fluid w-100 p-3" alt="image">
                <h3 class="text-center">${phoneDetails.name}</h3>
                <button class="w-100 btn buy-button">Make Payment</button>
                </div>
    
                <div class="col-12 col-sm-12 col-md-7">
                <h4 class="text-center p-2 bg-light">Full Specifications</h4>
                <div>
                    <table class="table table-striped table-bordered">
                    <thead>
                    </thead>
                    <tbody class="table-group-divider">
                        
                        <tr>
                        <td>Brand</td>
                        <td>${phoneDetails.brand}</td>
                        </tr>
                        <tr>
                        <td>First Release	</td>
                        <td>${phoneDetails.releaseDate}</td>
                        </tr>
                        <tr>
                        <td>Connectivity</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Bluetooth</td>
                        <td>${phoneDetails.others.Bluetooth}</td>
                        </tr>
                        <tr>
                        <td>GPS</td>
                        <td>${phoneDetails.others.GPS}</td>
                        </tr>
                        <tr>
                        <td>NFC</td>
                        <td>${phoneDetails.others.NFC}</td>
                        </tr>
                        <tr>
                        <td>Radio</td>
                        <td>${phoneDetails.others.Radio}</td>
                        </tr>
                        <tr>
                        <td>USB</td>
                        <td>${phoneDetails.others.USB}</td>
                        </tr>
                        <tr>
                        <td>WLAN</td>
                        <td>${phoneDetails.others.WLAN}</td>
                        </tr>
                        <tr>
                        <td>Main Features</td>
                
                        </tr>
                        <tr>
                        <td>CHipset</td>
                        <td>${phoneDetails.mainFeatures.chipSet}</td>
                        </tr>
                        <tr>
                        <td>Display Size</td>
                        <td>${phoneDetails.mainFeatures.displaySize}</td>
                        </tr>
                        <tr>
                        <td>Memory</td>
                        <td>${phoneDetails.mainFeatures.memory}</td>
                        </tr>
                        <tr>
                        <td>Sensors</td>
                        <td>${phoneDetails.mainFeatures.sensors[0]}, ${phoneDetails.mainFeatures.sensors[1]}, ${phoneDetails.mainFeatures.sensors[2]}, ${phoneDetails.mainFeatures.sensors[3]}, ${phoneDetails.mainFeatures.sensors[4]}, ${phoneDetails.mainFeatures.sensors[5]}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
            </div>`
            toggleSpiner.classList.add('d-none')

        }
    }