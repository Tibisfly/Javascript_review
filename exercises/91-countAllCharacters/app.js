// Write your function here
function countAllCharacters(str){
    let newObject = {};
    let character = "";
    for (let i = 0; i < str.length; i++){
        character = str.charAt(i);
        if (character in newObject){
            newObject[character] = newObject[character] + 1
        }else{
            newObject[character] = 1
        }
       
    }
    console.log(newObject);
}
countAllCharacters("Tibisay");

// var countAllCharacters = (str) => {
//     let newObj = {}
//     let counter = 0

//     for (let x = 0; x < str.length; x++) {
//             let key = str.charAt(x)
//         for (let y = 0; y < str.length; y++) {
//             if (key === str.charAt(y)) {
//                 counter = counter + 1;
//                 newObj[key] = counter
                
//             }
//         }
//         counter = 0

//     }
//     return newObj
// }
// console.log(countAllCharacters("Tibisay"))
