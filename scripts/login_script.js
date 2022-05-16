// Variabler & Funktioner defineret
	function admin() {
	window.open("admin/economic_statistic.html");
	}

    function guest() {
	window.open("efficiency_frontpage.html");
	}

function continuebtn() {
	
	
let emaill = (document.getElementById("email").value);
let korrekt = [];{
	korrekt[0]="guest";
	korrekt[1]="admin";
}
// Kontrol af e-mail input
	if (emaill == korrekt[0]){
	(alert( "Welcome Guest")+ guest());  
		}
		else if (emaill == korrekt[1]){
	(alert( "Welcome back Admin")+admin());  
}
	else
		alert( "E-mail use: admin or guest");
	
}
			  


// LOOP 

const admins = ["Kasper ", "Christian ", "Timm ", "Jack "];
	
let copy = "Copyrights © Gruppe12 \n \n " 

let text = "";
	for (let i = 0; i < admins.length; i++) {
	text += admins[i] + '\n'+ '\n';
		
	}
	
console.log(copy + text);