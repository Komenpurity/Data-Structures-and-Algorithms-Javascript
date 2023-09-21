// Stores data in key-value pairs
// To retrieve a value,use a corresponding key
// Are iterables, you can use a for of loop

const map = new Map([['a',1], ['b',2]]) // a and b are keys,  1 and 2 are values
map.set('c',3) //add a value to the map
map.has('a') //if it exists
map.delete('c') 
map.size 
map.clear() 

for(const [key,value] of map){
    console.log(`${key}: ${value}`) 
}