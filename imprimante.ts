//En temps O(n + m)
//En espace O(1)
function checkIfprintable(availableLetters: string, input: string) {

    //On traite le cas ou on est certains que input ne sera pas imprimable, lorsqu'on a plus de lettres a imprimer que de lettres imprimables.
    if (availableLetters.length < input.length) {
        return false
    }

    //Tableau représentant un compteur pour chaque character ASCII,  O(1) en espace
    const alphabet: number[] = new Array(128, 0)

    //Première boucle pour déterminer les lettres disponibles, O(n) avec n la longeur d'availableLetters.
    for (let i = 0; i < availableLetters.length; i++) {
        // O(1) en temps pour l'accès.
        alphabet[availableLetters.charCodeAt(i)]++ 
    }

    //Seconde boucle pour determiner si on a asser de lettres pour imprimer la string, O(m) avec m la longeur d'input.
    for (let j = 0; j < input.length; j++) {
        // O(1) en temps pour l'accès.
        if (--alphabet[input.charCodeAt(j)] < 0) {
            return false
        }
    }

    return true
}

console.log("aabbcc", "abc")
console.log(checkIfprintable("aabbcc", "abc")); // true
console.log("aabbcc", "aabbccc")
console.log(checkIfprintable("aabbcc", "aabbccc")); // false
console.log("xyz", "zxy")
console.log(checkIfprintable("xyz", "zxy")); // true
console.log("", "a")
console.log(checkIfprintable("", "a")); // false
console.log("aaa", "")
console.log(checkIfprintable("aaa", "")); // true