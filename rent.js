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
	"numItems": 0,
	//adding items
	"add": function (itemCost) {
		this.total += itemCost;
		this.lastTransactionAmount = itemCost; /*this.numItems += quantity;*/
	},
	//scanning items
	"scan": function (item, quantity) {
		switch (item) {
			case "Casual Dress":
				this.add(120 / 10 * 1.07 * quantity);
				break;
			case "Cocktail":
				this.add(100 / 10 * 1.07 * quantity);
				break;
			case "Evening Dress":
				this.add(175 / 10 * 1.07 * quantity);
				break;
			case "Pageant Dress":
				this.add(150 / 10 * 1.07 * quantity);
				break;
			case "Prom Dress":
				this.add(200 / 10 * 1.07 * quantity);
				break;
			case "Wedding Dress":
				this.add(300 / 10 * 1.07 * quantity);
				break;
		}
	},
}

function showTotal() {
	document.getElementById('total').innerHTML = "Your total is: $" + purchaseItem.total.toFixed(2);
}