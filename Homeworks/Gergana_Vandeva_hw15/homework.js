/* Задача 1:
	Направете клас за колело Bike:
		• Да съдържа свойства на колело (например brand, price, color, weight и т.н.)
		• Да съдържа instance метод toHTML(), който да генерира представяне на свойствата на колелото в HTML формат
	След това:
		• Създайте списък с няколко колела-обекти, които са инстанции на класа Bike
		• Изведете всички колела и техните свойства в свързана HTML страница
	БОНУС:
		• Задайте приятно оформление на резултата чрез CSS
 */
 function Bike(brand, price, color, weight, owner) {
    this.brand=brand;
    this.value=price;
    this.color=color;
    this.weight=weight;
    this.owner=owner;
}

var bike = new Bike("BMC", 250, "red", 12, "Garry Blake"); 


Bike.prototype.toHTML = function () {
 var html = "<h3>" + this.brand + "</h3>";
 html += "<p>price: " + this.value + "$</p>";
 html += "<p>color: " + this.color + "</p>";
 html += "<p>weight: " + this.weight + "kg</p>";
 html += "<p>owner: " + this.owner + "</p>";
 return html;
}
var bike = new Bike("BMC", 250, "red", 12, "Garry Blake");
document.write(bike.toHTML());

var bike1 = new Bike("Trek", 470, "blue", 10, "John Doe");
document.write(bike1.toHTML());

var bike2 = new Bike("Giant", 580, "green", 13, "Elly Doe");
document.write(bike2.toHTML());

var bike3 = new Bike("Focus", 120, "blue", 7, "Mike Doe");
document.write(bike3.toHTML());