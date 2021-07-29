const formatCurrency=value=>{
	value=value.toFixed(2)
	return "$ "+value
}
const update = ()=>{
	let bill = Number(document.getElementById("billTotal").value)
	let tipPercentage = document.getElementById("tipInput").value
	let splitInput = document.getElementById("splitInput").value


	let tipValue = bill *(tipPercentage / 100)
	let subTotal = bill+ tipValue
	let individualTip = tipValue / splitInput
	let individualBill = bill / splitInput

	
	document.getElementById("tipPercentage").innerHTML= tipPercentage + "%"
	document.getElementById("tipBalance").innerHTML=formatCurrency(tipValue)
	document.getElementById("subTotal").innerHTML=formatCurrency(subTotal)
	document.getElementById("splitValue").innerHTML= splitInput + " person"
	document.getElementById("individualTip").innerHTML = formatCurrency(individualTip)
	document.getElementById("individualBill").innerHTML = formatCurrency(individualBill)
	
	
}

window.onload= function() {
	let container = document.getElementById("container")
	container.addEventListener("input", update)

}

  

 