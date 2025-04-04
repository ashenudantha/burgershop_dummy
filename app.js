let itemList = [];
let cartitems=[];
let cartcount=1;



readJson();

function readJson() {
    fetch("/items.json")
        .then(res => res.json())
        .then(data => {
            itemList = data;
            loadcards();
        });
}

function loadcards() {
    let carditems = document.getElementById("card");
    

    let body = "";
    itemList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3"  data-aos="fade-up"
data-aos-duration="3000"> 
            <div class="custom-card card shadow-sm" >
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
                  <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"    onclick="addtocart('${item.itemno}','${item.price}','${item.imageUrl}','${item.name}','${item.count}')">
                    Add to Cart
                  </button>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
}

function showBurgers() {
    let burgerList=[];
    console.log(itemList);
    
itemList.forEach(element => {
    if (element.itemtype==="Burger") {
        burgerList.push(element);
    }

   });
   console.log(burgerList);
   let carditems = document.getElementById("card");
    

    let body = "";
    burgerList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up"
data-aos-duration="3000"> 
            <div class="custom-card card shadow-sm" >
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
              <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"    onclick="addtocart('${item.itemno}','${item.price}','${item.imageUrl}','${item.name}','${item.count}')">
                Add to Cart
            </button>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
  
}

function showsubmarines() {
    let submarineList=[];

    console.log(itemList);
    
itemList.forEach(element => {
    if (element.itemtype==="Submarine") {
        submarineList.push(element);
    }

   });
   console.log(submarineList);
   let carditems = document.getElementById("card");
    

    let body = "";
    submarineList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up"
data-aos-duration="3000"> 
            <div class="custom-card card shadow-sm" >
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
                  <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"    onclick="addtocart('${item.itemno}','${item.price}','${item.imageUrl}','${item.name}','${item.count}')">
      Add to Cart
</button>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
  
}

function showbeverages() {
    let beverageList=[];
    console.log(itemList);
    
itemList.forEach(element => {
    if (element.itemtype==="Beverage") {
        beverageList.push(element);
    }

   });
   console.log(beverageList);
   let carditems = document.getElementById("card");
    

    let body = "";
    beverageList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up"
data-aos-duration="3000"> 
            <div class="custom-card card shadow-sm" >
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
                  <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"    onclick="addtocart('${item.itemno}','${item.price}','${item.imageUrl}','${item.name}','${item.count}')">
      Add to Cart
</button>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
  
}

function showother() {
    let otherList=[];
    console.log(itemList);
    
itemList.forEach(element => {
    if (element.itemtype === "Chicken" || element.itemtype === "Pasta" || element.itemtype === "Fries") {
        otherList.push(element);
      }

   });
   console.log(otherList);
   let carditems = document.getElementById("card");
    

    let body = "";
    otherList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up"
data-aos-duration="3000"> 
            <div class="custom-card card shadow-sm">
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
                  <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  onclick="addtocart('${item.itemno}','${item.price}','${item.imageUrl}','${item.name}','${item.count}')">
                      Add to Cart
                  </button>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
  
}

// Function to toggle the drawer visibility
function openDrawer() {
    let drawer = document.getElementById('drawer');
    if (drawer) {
        drawer.classList.toggle('open');  // Toggle 'open' class to show or hide the drawer
    }
}

// Load drawer content when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    fetch('component/drawer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('drawer').innerHTML = data;
        })
        .catch(error => console.error("Failed to load drawer content:", error));
});

function addtocart(itemno,price,imageUrl,name,count) {

    let item = cartitems.find(item => item.itemno === itemno);

    if (item) {
        item.count = parseInt(item.count, 10) + 1;
    } else {
        cartitems.push({
            itemno: itemno,
            price: price,
            imageUrl: imageUrl,
            name: name,
            count: 1
        });
    }


    updateUI() 

    
    
}

function updateUI() {
    let draweritems = document.getElementById("drawer-body");
    let body="";
    cartitems.forEach(element => {
        body += `
      <div class="card" style="width: 20rem; height: auto; border-radius: 1rem; overflow: hidden; margin-top:8px; margin-left:2rem; background-color: rgba(142, 118, 79, 0.564);">
    <div class="row g-0 d-flex justify-content-center align-items-center">
        <!-- Left Side: Image -->
        <div class="col-4" style="height: 10rem; overflow: hidden;">
            <img src="${element.imageUrl}" class="card-img-left" style="object-fit: cover; width: 100%; height: 100%;" >
        </div>

        <!-- Right Side: Content -->
        <div class="col-8">
            <div class="card-body" style="padding: .5rem; height: 100%;">
                <p class="card-text" style="font-size: 20px; color:white; margin-bottom: .5rem; margin-left:1rem;">
                    ${element.name}<br>Rs. ${element.price}
                </p>
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-4">
                        <button type="button" class="btn btn-danger" 
                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" onclick="removeitems('${element.itemno}','${element.price}','${element.imageUrl}','${element.name}')">
                            -
                        </button>
                    </div>
                    <div class="col-4">
                        <p class="card-text text-center" style="font-size: 1.2rem; font-weight: bold; margin: 0;">${element.count}</p>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-success" 
                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" onclick="addmore('${element.itemno}','${element.price}','${element.imageUrl}','${element.name}','${element.count}')">
                            +
                        </button>
                    </div>
                </div>           
            </div>
        </div>
    </div>
</div>

        `
    });
  
    draweritems.innerHTML=body;
    
}
function addmore(itemno, price, imageUrl, name) {
    let item = cartitems.find(item => item.itemno === itemno);

    if (item) {
        item.count = parseInt(item.count, 10) + 1;
    } else {
        cartitems.push({
            itemno: itemno,
            price: price,
            imageUrl: imageUrl,
            name: name,
            count: 1
        });
    }

    updateUI(); 
    console.log(cartitems);

}


function removeitems(itemno, price, imageUrl, name) {
    let item = cartitems.find(item => item.itemno === itemno);

    if (item) {
        // Ensure that item.count is a number
        item.count = parseInt(item.count, 10);
    
        // Check if count is greater than 0 before decrementing
        if (item.count > 1) {
            item.count -= 1;
        } else {
            console.log("Cannot reduce count below 1");
            cartitems = cartitems.filter(item => item.itemno !== itemno);

        }
    }

    updateUI(); 
    console.log(cartitems);

}

function showtotal(){
    let total = 0;
    cartitems.forEach(element => {
        let itemprice = parseFloat(element.price);
        let itemcount = parseInt(element.count, 10);

        total += itemprice*itemcount;

    });

    Swal.fire("Total Is : Rs. "+total+".00");



    
    
    console.log(total);
}

function showdone(){
    Swal.fire({
        title: "SUCCESS",
        text: "Order Placed Successfully",
        icon: "success"

        
      });
      cartitems.length=0;
      updateUI();
}

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}
