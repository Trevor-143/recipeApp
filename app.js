const search_text = document.getElementById('search_text');
const search_btn = document.getElementById('search_btn');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};


function getDisplay() {
    fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let list ='';
        data.hits.forEach(meal => {
            list += `<li>
                        <img src="${meal.recipe.image}" alt="">
                        <div>
                            <h3>${meal.recipe.label}</h3>
                            <button><a href="${meal.recipe.shareAs}">Read More</a></button>
                        </div>
                    </li>`
            document.querySelector('.display').innerHTML = list;
            
        });
    })
}

function getSearched() {
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${search_text.value}`, options)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        let list ='';
        data.hits.forEach(meal => {
            list += `<li>
                        <img src="${meal.recipe.image}" alt="">
                        <div>
                            <h3>${meal.recipe.label}</h3>
                            <button><a href="${meal.recipe.shareAs}">Read More</a></button>
                        </div>
                    </li>`
            document.querySelector('.searched').innerHTML = list;
            
        });
    })
}

search_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (search_text.value !== '' && search_text.value !== null) {
        getSearched()
        document.querySelector('.display').innerHTML = '';
    } else {
        document.querySelector('.searched').innerHTML = '';
        getDisplay()
    }
})


getDisplay();
