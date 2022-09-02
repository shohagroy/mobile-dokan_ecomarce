
// toggle spiner 
const toggleSpiner = document.querySelector('.amination-spinar');

// get phome page api function 
const getphone = (search = "" )=>{
toggleSpiner.classList.remove('d-none')
    const phoneHanterApi = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(phoneHanterApi)
    .then(res => res.json())
    .then(data => phones(data.data))
}


// get see all button function 
const seeAllBtnDiv = document.getElementById('button-div2');
seeAllBtnDiv.style.display = "none";

// main container 
const mainItemContainer = document.getElementById('main-container');

// display card function 
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


// home page search item 
getphone('iphone')
getphone('samsung')
getphone('oppo')
getphone('huawei')
getphone('watch')


// see more button function 
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

        if(phones.length == 0){
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


    // comment carousol controlar function 
    
    const findUser = ()=>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => users(data.results))
    }

        const users = (user)=>{


            console.log(user)

            const commentsCountainer = document.getElementById('comment-filed');
            console.log(commentsCountainer);
            commentsCountainer.innerHTML =`

            <div class="carousel-item active" data-bs-interval="10000">
            <div class="comment-section">
              <div class="d-flex justify-content-center align-items-center flex-column" >
                <img src="${user[0].picture.medium}" alt="" width="100" height="100"> 
              <p>${user[0].name.title}. ${user[0].name.first} ${user[0].name.last}</p>
              </div>
              <div class="commnet-text">
              <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel, accusantium nam sapiente voluptatibus, facilis exercitationem similique harum laborum deserunt blanditiis voluptatum fugit ipsa nobis? Incidunt ex.</P>
              </div>
            </div> 
          </div>
          <div class="carousel-item" data-bs-interval="20000">
            <div class="comment-section">
              <div class="d-flex justify-content-center align-items-center flex-column" >
                <img src="${user[1].picture.medium}" alt="" width="100" height="100"> 
              <p>${user[1].name.title}. ${user[1].name.first} ${user[1].name.last}</p>
              </div>
              <div class="commnet-text">
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel, accusantium nam sapiente voluptatibus, facilis exercitationem similique harum laborum deserunt blanditiis voluptatum fugit ipsa nobis? Incidunt ex.</P>
              </div>
            </div> 
          </div>
          <div class="carousel-item" data-bs-interval="30000">
            <div class="comment-section">
              <div class="d-flex justify-content-center align-items-center flex-column" >
                <img src="${user[2].picture.medium}" alt="" width="100" height="100"> 
              <p>${user[2].name.title}. ${user[2].name.first} ${user[2].name.last}</p>
              </div>
              <div class="commnet-text">
              <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel, accusantium nam sapiente voluptatibus, facilis exercitationem similique harum laborum deserunt blanditiis voluptatum fugit ipsa nobis? Incidunt ex.</P>
              </div>
            </div> 
          </div>

          <div class="carousel-item" data-bs-interval="40000">
            <div class="comment-section">
              <div class="d-flex justify-content-center align-items-center flex-column" >
                <img src="${user[3].picture.medium}" alt="" width="100" height="100"> 
              <p>${user[3].name.title}. ${user[3].name.first} ${user[3].name.last}</p>
              </div>
              <div class="commnet-text">
              <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel, accusantium nam sapiente voluptatibus, facilis exercitationem similique harum laborum deserunt blanditiis voluptatum fugit ipsa nobis? Incidunt ex.</P>
              </div>
            </div> 
          </div>

          <div class="carousel-item">
            <div class="comment-section">
              <div class="d-flex justify-content-center align-items-center flex-column" >
                <img src="${user[4].picture.medium}" alt="" width="100" height="100"> 
              <p>${user[4].name.title}. ${user[4].name.first} ${user[4].name.last}</p>
              </div>
              <div class="commnet-text">
              <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel, accusantium nam sapiente voluptatibus, facilis exercitationem similique harum laborum deserunt blanditiis voluptatum fugit ipsa nobis? Incidunt ex.</P>
              </div>
            </div> 
          </div>

            `

        }

        findUser()
        