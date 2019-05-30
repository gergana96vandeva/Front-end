/* Задача 2:
	Използвайте кода от примера за класа Hero от слайд 38 от презентацията и:
		• Създайте клас BadGuy(name, knownAs)
		• Създйте инстанция на класа BadGuy, след което извикайте метода kicksAss на Hero с аргумент - създадената инстанция на BadGuy */
		
		function Hero(name, knownAs) {
 this.name = name;
 this.nickname = knownAs || name;
 this.kickAss = function (enemy) {
 // actions to kick the enemy's ass
 console.log(this.nickname + " just kicked " + enemy + " ass");
 };
 this.saveWorld = function () {
 // actions to save the world
 console.log("Once again " + this.nickname + " saved the world!");
 };
}
function BadGuy(name, knownAs) {
    this.name=name;
    this.nickname=knownAs || name;
}




var superman = new Hero("Clark Kent", "Superman");
var chuck = new Hero("Chuck Norris");
var batman = new Hero("Bruce Wane", "Batman");
var joker = new BadGuy("Joker");
batman.kickAss(enemy.joker);