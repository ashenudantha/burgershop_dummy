let itemList = [];

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
    carditems.innerHTML = ""; // Clear previous cards

    let body = "";
    itemList.forEach((item) => {
        body += `
        <div class="col-sm-6 col-md-4 col-lg-3"> 
            <div class="custom-card card shadow-sm">
                <img src="${item.imageUrl}" class="card-img-top rounded" alt="Image">
                <div class="card-body text-center">
                  <h5 class="card-title">${item.itemtype}</h5>
                  <p class="card-text">${item.name}</p>
                  <p class="fw-bold text-danger">${item.price}</p>
                  <a href="#" class="btn btn-warning">Add To Cart</a>
                </div>
            </div>
        </div>`;
    });

    carditems.innerHTML = body;
}
