const timeout = () =>{
    let wordArray = ["a Backend developer |", "Frontend developer |", "Mobile developer |"]
    let letters = wordArray.join("").split("")
    let backupLetters = wordArray.join("").split("")
    setInterval(()=>{
        if(letters.length > 0){
            console.log(letters[0])
            letters.shift()
        }else{
            letters = backupLetters
        }
    },300)

}
timeout()