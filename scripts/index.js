{
	var modal1 = document.getElementById('id01');
	var modal2 = document.getElementById('id02');
	window.onclick = function(event) {
		if (event.target == modal1 || event.target == modal2) {
			modal1.style.display = "none";
			modal2.style.display = "none";
		}
	}
}
