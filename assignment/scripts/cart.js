console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
// 
function addItem(item){
    basket.push(item);
    return true;
}

addItem('hammer');
console.log(basket);

addItem('Bread');
addItem('Kale');
console.log(basket);

function listItems(basketInput) {
 for(let item of basketInput) {
  console.log(item);
 }

}
listItems(basket);


function empty(){
   basket.length = 0;
    }

  const maxItems = 5;

  console.log(maxItems);

  
  function isFull(){
    
  };










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
