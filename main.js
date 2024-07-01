const animals=[
    "dogs", "dogs", "Cats", "dogs", "cats", "dogs", "dogs", "ants", "ants"
];

function template(animal) {
    return `<div class="col-md-6 col-lg-4 p-2">
            <div class="card">
                <div class="card-body p-0">
                    <img src="./Untitled.svg" alt="thumbnail" class="w-100 rounded-top ">

                    <p class="text-start p-3">
                        This is a wider card with supporting text
                        below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </p>

                    <div class="justify-content-between row">
                        <div class="d-flex m-3 col">
                            <button type="button" class="btn btn-outline-secondary">view</button>
                            <button class="btn btn-outline-secondary">edit</button>
                        </div>
                        <span class="col col-md-2 my-auto">${animal}</span>
                    </div>
                </div>
            </div>
        </div>`;
}


function filtering(input) {
    let data = ``;
    animals.filter( (animal) =>
        animal.includes(input)
    ).forEach(function (animal){
        return data += template(animal);
    })

    return document.getElementById("cards").innerHTML = data
}



filtering('')