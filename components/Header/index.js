/* QUESTIONS
1. What is the DOM?
DOM stands for Document Objct Model. It is whats help represent the html elements of a webpage. 

2. What is an event?
Every user interaction with a site. Its the code that we create that is then executed, like our querySelector, or a function we create, it is an event for us to know that the code is being used.

3. What is an event listener?
An event listener is a function or procedure that we create but is waiting for another action before it executes its event, like a click, or mouseover.

4. Why would we convert a NodeList into an Array?
Using the conversion helps us gain access to other methods with the function we create like the .forEach method that HTML Collections can't do. 

5. What is a component?
A component is a small bit of re-useable code that help with elements and other fucntions of the code, it also helps in keeping the code DRY. 
*/

// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// My CODE //

const mainHeader = document.querySelector('.header-container');

mainHeader.appendChild(Header());

function Header() {
    // create the elements //
    const header = document.createElement('div');
    const spanner = document.createElement('span');
    const titleOfIndex = document.createElement('h1');
    const spanClass = document.createElement('span');

    // append the child //
    header.appendChild(spanner);
    header.appendChild(titleOfIndex);
    header.appendChild(spanClass);


    // add the class lists //
    header.classList.add('header');
    spanner.classList.add('date');
    spanClass.classList.add('temp');

    // text conten t//
    titleOfIndex.textContent = 'Lambda Times';
    spanner.textContent = 'SMARCH 28, 2019';
    spanClass.textContent = '98°';

    return header;
}

