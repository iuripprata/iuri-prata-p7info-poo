function generateRan(){
    var max = 6
    var random = [];
    for (var i = 0; i<max; i++){
        var temp = Math.floor(Math.random()*60);
        if (random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
        i -- ;
    }
    console.log(generateRan());
}