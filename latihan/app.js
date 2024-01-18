const form = document.querySelector('#search-form');
const button = document.querySelector('button');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    document.querySelectorAll('img').forEach((img) => img.remove());

    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword },
    };

    
    const res = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
    
    // console.log(res.data);

    getImages(res.data);
    form.elements.query.value = '';
});


const getImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const image = document.createElement('img');
            image.src = result.show.image.medium;
            document.body.append(image)
        };
    };
};