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
			var rentFee = 100;
		switch (item) {
			case "Casual":
				this.add(quantity * 120 / 10 + rentFee * 1.07);
				break;
			case "Cocktail":
				this.add(quantity * 100 / 10 + rentFee * 1.07);
				break;
			case "Evening":
				this.add(quantity * 175 / 10 + rentFee * 1.07);
				break;
			case "Pageant":
				this.add(quantity * 150 / 10 + rentFee * 1.07);
				break;
			case "Prom":
				this.add(quantity * 200 / 10 + rentFee * 1.07);
				break;
			case "Wedding":
				this.add(quantity * 300 / 10 + rentFee * 1.07);
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