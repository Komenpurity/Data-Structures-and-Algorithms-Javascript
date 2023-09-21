// Holds a collection of values
// The values must be unique
// A set can contain a mix of different data types,doesnt maintain insertion order
// Are iterables,can be used with a for of loop

//differences between an array and a set: An array can contain duplicate values,it also maintains insertion order

const set = new Set([1,2,3])  //our set
set.add(4) //add a value
set.has(4) //if the value exists in a set
set.delete(3) //deletes a value from the set 
set.size

for(const item of set){
    console.log(item)
}