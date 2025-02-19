function Looping(nilai){
    for(let i = 0; i < nilai; i++){
        if(i % 28 === 0){
            console.log("FOURSEVEN")
        }else if(i % 4 === 0){
            console.log("Four")
        }else if(i % 7 === 0){
            console.log("Seven")
        }else{
            console.log(i)
        }
    }
}

let result = Looping(100)
