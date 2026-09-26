// exo 1
function getMax(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else return c;
}

const max = getMax(3, 8, 5);
console.log(max);


// exo 2
function getRandomInt(min, max) {
    return (Math.random() + min) * (max - min);
}

for (let i = 0; i < 100; i++) {
    console.log(getRandomInt(1, 6));
}

// exo 3
function compareA(a, b) { //on écrit une fonction nommée compareA qui prend en compte 2 paramètres, a et b.
    if (a == b) // On compare a et b avec l'opérateur de comparaison == (égalité abstraite), c'est-à-dire que les valeurs sont égales après conversion de type.
        return 'true';
    else return 'false';
}

function compareB(a, b) { // On écrit une fonction nommée compareB qui prend en compte 2 paramètres, a et b.
    if (a === b) // On compare a et b avec l'opérateur de comparaison === (égalité stricte), c'est-à-dire que les valeurs sont égales et du même type.
        return 'true';
    else return 'false';
}

console.log(compareA(4, '4')); // true // On appelle la fonction compareA, mais cette fois on lui donne 4 et '4' comme paramètres à la place de a et b.
console.log(compareA(4.0, '4')); // true
nod
console.log(compareB(8, '8')); // false
console.log(compareB(8, 'huit')); // false

// exo 4
function getNumber(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0 && i % 7 == 0)
            console.log(i);
    }
}
getNumber(30)

// exo 5
function nombreDePilesOuFaces(n) {
    let piles = 0; // compteur pour le nombre de piles
    let faces = 0; // compteur pour le nombre de faces
    for (let i = 0; i < n; i++) {
        if (Math.random() < 0.5) { // si le nombre aléatoire est inférieur à 0.5, on considère que c'est un pile, sinon c'est face
            piles++; // pour compter le nombre de piles avec les plusieurs lancers, on augmente de 1 le compteur de piles, ou faces ensuite.
        } else {
            faces++;
        }
    }
    console.log(" Nombre de piles obtenus : " + piles);
    console.log(" Nombre de faces obtenus : " + faces);
    return {piles, faces}; // on retourne un objet contenant le nombre de piles et de faces obtenus, c'est nécessaire pour pouvoir utiliser ces valeurs dans d'autres parties du code si besoin.

}

const resultat = nombreDePilesOuFaces(10); // ici on appelle la fonction nombreDePilesOuFaces avec 10 lancers de pièce, et on stocke le résultat dans la variable resultat.
console.log(resultat); // on affiche le résultat dans la console.

// exo 6 - à revoir
function estPremier(n) {
    if (!Number.isInteger(n) || n < 2) { //On vérifie si n est un entier et supérieur ou égal à 2, sinon on retourne false. Number.isInteger est une méthode intégrée à JavaScript qui sert à vérifier si une valeur est un entier.
return false;

    }
    for (let diviseur = 2; diviseur < n; diviseur++) 
        // On commence avec 2, car 1 divise tous les nombres et permet pas de savoir si un nombre est premier. La boucle continue tant que diviseur est inférieur à n. On incrémente diviseur de 1 à chaque itération.
        if (n % diviseur === 0) { // Si n est divisible par diviseur (c'est-à-dire que le reste de la division de n par diviseur est égal à 0), alors n n'est pas premier, comme expliquer juste après.
            return false; // arrête immédiatement la fonction et indique que le nombre n’est pas premier. En effet, un nombre premier ne doit être divisible que par 1 et par lui-même.
        }
    return true; // si aucun diviseur n'a été trouvé, le nombre est premier.
}
console.log(estPremier(87178291199)) // true