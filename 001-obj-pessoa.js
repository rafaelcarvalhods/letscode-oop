console.log("--- OBJETO PESSOA ---");

let rafaCarva = new Object ();


rafaCarva.name = "Rafael";
rafaCarva.lastName = "Carvalho";
rafaCarva.birthday = "21/04/1989";
rafaCarva.weight = 90;
rafaCarva.hobbies = ["Listen to Music", "Read Books", "Play Guitar"];


rafaCarva.readingBook = function(book) {
    return `Atualmente estou lendo o livro ${book}`;
}

rafaCarva.eat = function(kcal) {
    var kg = kcal/7000;
    if(kg >= 1){
        this.weight = this.weight + kg;
        return `Você engordou ${kg}kg. Seu novo peso é ${this.weight}kg. Você precisa treinar URGENTE!`;
    }
    return `Você manteve o mesmo peso: ${this.weight}kg.`
}

rafaCarva.exercise = function(kcal) {
    var kg = kcal/7000;
    if(kg >= 1){
        this.weight = this.weight - kg;
        return `PARABÉNS! Você conseguiu emagrecer ${kg}kg. Seu novo peso é ${this.weight}kg`;
    }
    return `Você precisa treinar mais!`
}

console.log(rafaCarva.readingBook("As crônicas de Nárnia"));


console.log(rafaCarva);