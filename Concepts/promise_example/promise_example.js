function getBread() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got the bread");
            resolve("Bread");
        }, 1000);
    });
}

function addFillings(bread) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added fillings");
            resolve(bread + " +Fillings");
        }, 1000);
    });
}

function serve(sandwich) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sandwich is ready to eat!");
            resolve(sandwich);
        }, 1000);
    });
}

// whatever is resolved is passed to the inner function call.
// fetch('url')
// .then((res)=>res.json())
// .then(json=>console.log(json))
getBread()
    .then(addFillings)
    .then(serve)
    .then((finalProduct) => console.log(`Enjoy your ${finalProduct}!`))
    .catch((error) => console.log(`Something went wrong: ${error}`));
