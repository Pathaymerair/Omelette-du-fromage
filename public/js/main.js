console.log("Bonjour, et bienvenu dans l'émission de cuisine de merde. Aujourd'hui, nous allons apprendre à faire une omelette. Voilà. Parce qu'on a que ça à foutre.")
console.log("Dans un premier temps, il nous faut des oeufs. On ne fait pas d'omelette sans casser des oeufs. HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA")


class Ingredients {
    constructor(name,etat) {
        this.name = name;
        this.etat = etat;
    }
    
}
var oeufs = new Ingredients("Oeufs", "intacts")

console.log("Prenons maintenant les " + oeufs.name + " " + oeufs.etat + ". Nous aurons ensuite besoin d'un bol dans lequel mettre les oeufs que nous casserons par la suite.")

class Instruments {
    constructor(name, contenu) {
        this.name = name;
        this.contenu = contenu;
    }
    
}

var content = []
var bol = new Instruments("bol", content);



console.log("Nous avons maintenant un " + bol.name + " qui pour l'instant, ne contient rien.")

console.log("Notre objectif ici, est de casser nos oeufs dans un premier temps.")

function casser (){
    oeufs.etat = "cassés";
        return oeufs.etat;
    
}
casser()

console.log("Nos oeufs sont maintenant " + oeufs.etat + ".")
console.log("Mais maintenant ils coulent! Il faut vite les mettre dans le bol!")
content.push(oeufs)
console.log(content)

console.log("Par la suite, vous pourrez rajouter quelques piments Naga viper, pour faire une petite blague à vos amis. Rajouter aussi des épices, des champignons et du beurre.")

var piments = new Ingredients("piments", "piquants");
var epices = new Ingredients("épices", "en morceaux");
var champignons = new Ingredients("champignons", "de Paris");
var beurre = new Ingredients("beurre", "solide");
content.push(piments, epices, champignons, beurre)

content.forEach(function(ingredients){
    console.log(ingredients)
});

console.log("Une fois tous les ingredients mis dans le bol, nous allons devoir mixer tout ça pour faire un truc tout mou.")

function mixer (){

    for (var i= content.length -1; i> 0; i-- ){
        var random = Math.floor(Math.random() * (i + 1));
        var tmp = content[i];
        content[i] = content[random];
        content[random] = tmp

    }
    content.forEach(function(ingredients){
        console.log(ingredients)
    });
}

mixer()

content = ("truc tout mou")
console.log("Le contenu du bol est maintenant un " + content + ".")

console.log("Nous devons donc maintenant mettre notre truc tout mou à chauffer.")
console.log("Pour cela, nous aurons besoins, d'une poele et d'une gaziniere qui sere éteinte dans un premier temps.")

var gaziniere = new Ingredients("gaziniere", "éteinte");
var content2 = [];
var poele = new Instruments("poele", content2);

console.log("Une fois les différents outils nécessaire à l'omelette crées, nous devrons allumer la gazinière pour faire chauffer la poêle.")
console.log(gaziniere.etat)

function onoff() {
    if (gaziniere.etat = "éteinte"){
        gaziniere.etat = "allumée"
    } else {
        gazinière.etat = "allumée"
    }
}

onoff()
console.log(gaziniere.etat)
console.log("On met maintenant la poele sur la gazinière pour qu'elle chauffe pendant une durée déterminée.")

function chauffage () {
for (var x=0;x<4;x++){
    if (x<2) {
        console.log("la poele est un peu chaude.")
        x = x+1
        if (2<x<5) {
            console.log("La poele est encore un peu plus chaude.")
            x = x+1
            }
    }  else {
        console.log("Vous vous êtes cramé la main. Bravo.")
        poele.nom = "poele très chaude"
    }
}
}

chauffage()
console.log("Félicitations! vous avez maintenant une " + poele.nom + ".")

