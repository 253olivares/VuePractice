// our pages js where we make global variables for our pages. Here we can pass global functions to change our pages array
const pagesKey = 'pages';
// create a key that the browser will use to find our array in user local storage

// browser then checks to see using this turnery to see if pages json exists if it doesnt we load our own data from pages.json
// if it does exist then we just retrieve pages information from our browser
let pageJson
let pageStore
if(!localStorage.getItem(pagesKey)) {
    pageJson = await fetch('./data/db.json',{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

    pageStore = await pageJson.json();
    localStorage.setItem(pagesKey,JSON.stringify(pageStore))
} else {
    pageJson = localStorage.getItem(pagesKey);
    pageStore = JSON.parse(pageJson);
}
console.log(pageJson);
// pages store parses that information that is passed and allows us to use it.

console.log(pageJson);

// we create a save function that we call everytime to update our local storage db by calling the key and passing in
// our json object with any changes
function save(){
    localStorage.setItem(pagesKey,JSON.stringify(pageStore))
}

export default {
    // addPages passes a page object of our new page and then pushes it to our existing Array. Save is then called to save that new
    // array in the localStorage db this allows our page to load any changes next open as long as local storage hasnt been cleared
    addPage(page){
        pageStore.push(page);

        save();
    },
    // get all pages just gets all our current array
    getAllPages(){
        return pageStore ;
    },
    // get single page will get a specific property from a set index
    getSinglePage(index){
        if(!index) {
            index= 0;
        }
        return pageStore[index];
    },
    // edit pages locates a specific section in the array and over writes it with any changes provided from
    // our edit page vue
    editPage(index, page){
        pageStore[index] = page;
        // save overwrites our previous array in local storage to make sure we keep it updated for the user
        save();
    },
    // remove index we just splice the index passed from the array and update our localstoreage db
    removePage(index){
        pageStore.splice(index,1);
        save();
    }
}