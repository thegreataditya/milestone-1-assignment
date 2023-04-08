const arr = [2, 3, 6, 12, 4, 15, 18, 21, 5, 10, 7, 13, 27, 30];

arr.forEach((element)=>{
    if(element%3 === 0 && element%2 !== 0){
        console.log(element);
    }
})