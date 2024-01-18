// const req = new XMLHttpRequest();

// let data;

// req.onload = function () {
//     data = JSON.parse(this.response)
//     console.log(data);
// };

// req.onerror = function () {
//     console.log("Error", this);
// };

// req.open('GET', 'https://swapi.dev/api/people/2');
// req.send();


// fetch('https://swapi.dev/api/people/2')

//     .then((res) => {
//         if(!res.ok) {
//             throw Error("Couldnt fetch the data for that resource!")
//         }

//         return res.json()
//     })

//     .then((data) => {
//         console.log("request 1", data);

//         fetch('https://swapi.dev/api/people/3')

//         .then((res) => {
//             if(!res.ok) {
//                 throw Error("Couldnt fetch the data for that resource!");
//             }

//             return res.json()
//         })

//         .then((data) => {
//             console.log("request 2");

//             console.log(data);
//         })
//     })

//     .catch((err) => {
//         console.log("Error", err);
//     })

const loadPeople = async () => {

    try {
        console.log("request 1");
        const res = await fetch('https://swapi.dev/api/people/2');
        const data = await res.json();
        console.log(data);
    
        console.log("request 2");
        const res2 = await fetch('https://swapi.dev/api/people/5');
        const data2 = await res2.json();
        console.log(data2);

    } catch(err) {
        console.log("Error", err);
    }
}

loadPeople()