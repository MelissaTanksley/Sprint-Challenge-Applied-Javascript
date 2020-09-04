// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardCreator = document.querySelector('.cards-container')

axios.get(" https://lambda-times-backend.herokuapp.com/articles")
.then((res)=> {
    const articles = res.data.articles;
    const JS = articles.javascript;
    const bootStr = articles.bootstrap;
    const tech = articles.technology;
    const jQ = articles.jquery;
    const nodeS = articles.node.js;
    const allArticles = JS.concat(bootStr, tech, jQ, nodeS)

    console.log(allArticles)

    allArticles.forEach((article)=>{
        const newArticle = newArticlesCreator(article);
        cardCreator.appendChild(newArticle);

    })

})

function newArticlesCreator(object){
    const card = document.createElement('div');
    const headlines = document.createElement('div');
    const author = document.createElement('div');
    const imgClass = document.createElement('div');
    const newImg = document.createElement('img');
    const spanned = document.createElement('span');

    //append elements//
    card.appendChild(headlines);
    card.appendChild(author);
    author.appendChild(imgClass);
    imgClass.appendChild(newImg);
    author.appendChild(spanned);

    //classList Info//
    card.classList.add('card');
    headlines.classList.add('headline');
    author.classList.add('author');
    imgClass.classList.add('img-container');

    //text content//
    author.textContent = `${object.authorName}` ;
    headlines.textContent = `${object.headline}`;
    imgClass.src =`${object.authorPhoto}`;

    return card;

} 