const search_text = document.getElementById('search_text');
const search_btn = document.getElementById('search_btn');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
	}
};

fetch('https://keto-diet.p.rapidapi.com/?search=chicken', options)
.then(response => response.json())
.then(data => {
    console.log(data)
    let list ='';
    data.forEach(meal => {
        list += `<li>
                    <img src="${meal.image}" alt="">
                    <div>
                        <h3>${meal.recipe}</h3>
                        <button class="readMore1">Read More</button>
                        <div class="getMoreInfo1">
                            <div>
                                <img src="${meal.image}">
                                <img src="${meal.recipe}">
                            </div>
                            <div>
                                <ul>
                                    <li>${meal.directions_step_1}</li>
                                    <li>${meal.directions_step_2}</li>
                                    <li>${meal.directions_step_3}</li>
                                    <li>${meal.directions_step_4}</li>
                                    <li>${meal.directions_step_5}</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>${meal.ingredient_1}</li>
                                    <li>${meal.ingredient_2}</li>
                                    <li>${meal.ingredient_3}</li>
                                    <li>${meal.ingredient_4}</li>
                                    <li>${meal.ingredient_5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>`
        document.querySelector('.display').innerHTML = list;
        
    });
})


fetch(`https://keto-diet.p.rapidapi.com/?search=${search_text.value}`, options)
.then(response => response.json())
.then(data => {
    // console.log(data)
    let list2 ='';
    data.forEach(meal => {
        list2 += `<li>
                    <img src="${meal.image}" alt="">
                    <div>
                        <h3>${meal.name}</h3>
                        <button class="readMore2">Read More</button>
                        <div class="getMoreInfo2">
                            <div>
                                <img src="${meal.image}">
                                <img src="${meal.recipe}">
                            </div>
                            <div>
                                <ul>
                                    <li>${meal.directions_step_1}</li>
                                    <li>${meal.directions_step_2}</li>
                                    <li>${meal.directions_step_3}</li>
                                    <li>${meal.directions_step_4}</li>
                                    <li>${meal.directions_step_5}</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>${meal.ingredient_1}</li>
                                    <li>${meal.ingredient_2}</li>
                                    <li>${meal.ingredient_3}</li>
                                    <li>${meal.ingredient_4}</li>
                                    <li>${meal.ingredient_5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>`
        document.querySelector('.searched').innerHTML = list2;
        
    });
})

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

    


const readMore1 = document.querySelector('.readMore1');
const getMoreInfo1 = document.querySelector('.getMoreInfo1');
const readMore2 = document.querySelector('.readMore2');
const getMoreInfo2 = document.querySelector('.getMoreInfo2');
