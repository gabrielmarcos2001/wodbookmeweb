$(document).ready(function(){
	$(".btn-twitter").bind("click", function(){
		$("body").addClass("waiting");
		setTimeout(function() {
			//alert("caca");
			$("body").removeClass("waiting").addClass("divided");
		}, 3000);
		return false;
	});
});