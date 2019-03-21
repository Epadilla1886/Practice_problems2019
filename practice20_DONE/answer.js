function randomize_list(array){
    var list = array.length;
    var temp = null;
    var index = null;

    while (list > 0) {
        index = Math.floor(Math.random() * list);
        list--;
        temp = array[list];
        array[list] = array[index];
        array[index] = temp;
    }
    return array;
}
var randoArray = [22,6,7,3,9,4];

console.log(randomize_list(randoArray));