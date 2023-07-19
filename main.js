

// find and save 'main' element by ID.  we can use this variable to access the tags within the main elemenr
const mainEl = document.getElementById('content');

// use query selector to access the first instance of 'section' element, which is the 'Try It' box we want to remove. store it in a variable
const toRemove = mainEl.querySelector("section");

// use append method on the 'main' element to move that variable to the bottom of the page
mainEl.append(toRemove)

