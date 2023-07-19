/**
 * Problems to consider/solve:
 * 
 *
 *
 * 
 * Would we have to visit the person's wikipedia page to grab all <i> elements and store before we can populate our hover box?
 * 
 */

// // WHAT ARE WE DOING:
// //  Creating a chrome extension that will replace information in Wikipedia popups
// //  Instead of seeing a snippet of a bio in popups, we will see a list of links to the subject's notable works
// // 
// // HOW:

// // hover
//   // on addEventListener, save the hovered link as filmLink
//   // use 

// // look for filmography id
// // look for filmCaption
// // foot element shows table
// // pull tr elements/tag between title and foot, and only see italicised words

// // to get the link from the hover
//   //

// // 

// let filmLink;

// // addEventListener for mouseover
// document.addEventListener('mouseover', function(event) {
//     var hoveredEl = event.target; // The actual element which was hovered.
//     if (hoveredEl.tagName !== 'A') { return; } // Ignore non links
//     filmLink = hoveredEl.href; // leads to the page where the actor's wiki page is
//     console.log(filmLink);
 
//       // GET request using fetch
// // fetch(`${filmLink}`)
// // .then((data) => {
// //   return data; 
// //   // when you first receive the response back, you MUST .json() the response
// // })
// // .then((data) => {
// //   console.log(data);
// // })
// // .catch((err) => console.log('Error retrieving data from the server: ', err));

// $.get(`${filmLink}`, {}, function(results){
//     let films = results; // will show the HTML from anotherPage.html
//     // let filmography = films.getElementById("filmography")
//     // results.find searches for the string we pass in
//     console.log(results)//.find("span.Filmography").html()); // show "scores" div in results
//   });

// });

// // [[Wikipedia:Tools/Navigation popups]]
// mw.loader.load('https://en.wikipedia.org/w/load.php?modules=ext.gadget.Navigation_popups');

// // function hover_over(id){



// //   // let xhttp = new HMLHttpRequest();
// //   // xhttp.open("GET", ''+id, true)
// //   // xhttp.send;
// //   // return false;
// // }

// // store elements in an array
//     // when dispaying in hover box, iterate over array and display the first 5? 10? other notable works
// const allItalics = document.getElementsByTagName("i");
// console.log(allItalics)

///////////// ATTEMPT 2 /////////////////////
/**
 * Problems to consider/solve:
 * 
 *  We all use MDN to remind ourselves which built-in methods do what and how. We aim to simplify this process.
 * To do this, we considered what information was most important to us, and we decided to update the page
 * show that information first.
 * For us, we would like to prioritize the syntax and parameters 
 * 
 * 
*/

// update the json to show the mdn

// on page reload with the chrome extension, 
// do something to the live box
// document.addEventListener('DOMContentLoaded', () => {

//   console.log('this is try 2')
// // const liveBox = document.querySelector(live);

// const toRemove = document.getElementById("live");
// toRemove.remove();


//  });



///////////// ATTEMPT 2 /////////////////////
/**
 * Problems to consider/solve:
 * 
 *  We all use MDN to remind ourselves which built-in methods do what and how. We aim to simplify this process.
 * To do this, we considered what information was most important to us, and we decided to update the page
 * show that information first.
 * For us, we would like to prioritize the syntax and parameters 
 * 
 * 
*/

////////////// ATTEMPT 3 ////////////////////////

/**
 * The news is all bad, we're here to fix that.
 */


// const myImages = document.querySelector('img');

//   //GET request using fetch
// fetch(`${filmLink}`)
// .then((data) => {
//   return data; 
//   // when you first receive the response back, you MUST .json() the response
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => console.log('Error retrieving data from the server: ', err));


// function fetchImage() {
//   const apiKey = '28vxVY_pIojUiUS6LsYGCZ8SanMOVVyTQ2ehA4JuFG4';
//   fetch('https://any-anime.p.rapidapi.com/anime/img', {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': apiKey,
//       "x-rapidapi-host": "any-anime.p.rapidapi.com"
//     }
//   })
//     .then(response => response.blob())
//     .then(data => {
//       // Do something with the image data
//     })
//     .catch(error => console.error(error));
// }



/* Fetch API */

// window.addEventListener('load', loadImg);

// function loadImg() {
//   const url = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
//   const imageDiv = document.querySelector('.image');
//     fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
               
//                 for (let i = 0; i < data.results.length; i++) {
                   
//                     /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
//                     if (data.results[i].id == "6VhPY27jdps") {
//                         let imageElement = document.createElement('img');
//                         imageElement.src = data.results[i].urls.thumb;
//                         imageDiv.append(imageElement);
//                     }
//                 }
//             });
// }