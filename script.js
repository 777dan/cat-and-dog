// let rex = "Rex";
// let max = "Max";
// let colen = "Colen";

// function voice(dog, bark = "waw") {
//     let age = 2;
//     alert(dog + ": " + bark + " age: " + age);
// }

// voice(rex)
// voice(max, "woof")
// voice(colen, "aw")

function printAnimals(animal, n) {
    n = prompt("Введите количество животных");
    //alert("<img src='images/" + animal + ".jpg'>");
    for (let i = 0; i < n; i++) {
        // document.write('<img src="images/' + animal + '.jpg" width="100px">');
        if (i % 10 == 0) {
            document.write('<img src="images/' + animal + '.jpg" width="100px"><br>');
        }
        else {
            document.write('<img src="images/' + animal + '.jpg" width="100px">');
        }
    }
    // if (i % 10 == 0) {
    //     document.write('<img src="images/' + animal + '.jpg" width="100px"><br>');
    // }
}

printAnimals("dog1");
printAnimals("cat1");