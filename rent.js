function responsive() {
	var response = document.getElementById("myTopnav");
	if (response.className === "topnav") {
		response.className += " responsive";
	} else {
		response.className = "topnav";
	}
}

var purchaseItem = {
	"total": 0,
	"lastTransactionAmount": 0,
	//adding items
	"add": function (itemCost) {
		this.total += itemCost;
		this.lastTransactionAmount = itemCost;
	},
	//scanning items
		"scan": function (item) {
			var id = '#' + item;
			var quantity = $(id).val();
		switch (item) {
			case "Casual":
				this.add(120 / 10 * 1.07 * quantity);
				break;
			case "Cocktail":
				this.add(100 / 10 * 1.07 * quantity);
				break;
			case "Evening":
				this.add(175 / 10 * 1.07 * quantity);
				break;
			case "Pageant":
				this.add(150 / 10 * 1.07 * quantity);
				break;
			case "Prom":
				this.add(200 / 10 * 1.07 * quantity);
				break;
			case "Wedding":
				this.add(300 / 10 * 1.07 * quantity);
				break;
		}
	},
}

function showTotal() {
	document.getElementById('total').innerHTML = "Your total is: $" + purchaseItem.total.toFixed(2);
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("animate-fading");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}