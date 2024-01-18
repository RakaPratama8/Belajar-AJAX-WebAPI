const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')


const addJoke = async () => {

    const jokeText = await getJokes()
    const newList = document.createElement('LI')

    newList.append(jokeText)
    jokes.append(newList)


};

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };
    
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;

    } catch (err) {

        return 'No Jokes for you !'
    }
    
};

button.addEventListener('click', addJoke);