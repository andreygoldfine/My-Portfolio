(function() {
	document.getElementById("number-of-cups-value").innerHTML = coffee.numberOfCups;// вносит в блок количество чашек (по умолчанию - 1)
	coffee.showCups();

	$(function() {
		$("#wallet").draggable();	
	});
})();
