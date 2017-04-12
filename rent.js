// This makes the navbar responsive
function responsive() {
	var response = document.getElementById("myTopnav");
	if (response.className === "topnav") {
		response.className += " responsive";
	} else {
		response.className = "topnav";
	}
}

// This is the shopping cart
var purchaseItem = {
	"total": 0,
	"lastTransactionAmount": 0,
	// This adds the item cost to the total
	"add": function (itemCost) {
		this.total += itemCost;
		this.lastTransactionAmount = itemCost;
	},
	// This locates the item by the id 
		"scan": function (item) {
			var id = '#' + item;
			var quantity = $(id).val();
			var rentFee = 100;
			var max = 20
		// Once the id is located it runs the proper switch case
		switch (item) {
			case "Casual":
				this.add(120 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Casual').setAttribute('max', new_max);
				break;
			case "Cocktail":
				this.add(100 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Cocktail').setAttribute('max', new_max);
				break;
			case "Evening":
				this.add(175 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Evening').setAttribute('max', new_max);
				break;
			case "Pageant":
				this.add(150 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Pageant').setAttribute('max', new_max);
				break;
			case "Prom":
				this.add(200 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Prom').setAttribute('max', new_max);
				break;
			case "Wedding":
				this.add(300 / 10 * quantity + rentFee * 1.07);
				new_max = max - quantity;
				document.getElementById('Wedding').setAttribute('max', new_max);
				break;
		}
	},
}

// This shows the total to the user once the 'Show Total' button is clicked
function showTotal() {
	document.getElementById('total').innerHTML = "Your total is: $" + purchaseItem.total.toFixed(2);
}

// This runs the carousel by getting the images through the given class name
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