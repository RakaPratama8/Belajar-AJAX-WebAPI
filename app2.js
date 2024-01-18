// axios.get('https://swapi.dev/api/peple/5')

//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log("Error", err);

//         alert(err.message)
//     })

const getPeople = async(id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data);
    } catch (err) {
        console.log("Error", err);
        alert(err.message)
    }
}


const getJoke = async() => {
    const config = {
        header: {
            Accept: 'application/json',
        },
    };

    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
}

getJoke()