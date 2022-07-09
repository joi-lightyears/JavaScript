// Viết hàm tại đây

function getFirstElement(aniamls) {
    return animals.splice(-1*animals.length,1)
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']