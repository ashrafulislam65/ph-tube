console.log('videos')
//get
const loadCatogories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) => displayCatogories(data.categories))
    .catch((error) => console.log(error));
}

const displayCatogories = (categories) =>{
    const categoryContainer = document.getElementById('categories')
   categories.forEach((categorie) => {
    console.log(categorie);
    const button =document.createElement('button');
    button.classList = 'btn';
    button.innerText = categorie.category;
    categoryContainer.append(button)
    
   });
    
}



loadCatogories();
