$(function(){

	$('span').click(function(){

		var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($(this).text()).select();
	    console.log($temp.val());
	    document.execCommand("copy");
	    $temp.remove();
	})

	$('span').hover(function(){
		if($('body').find('#div').length){
			console.log("inside")

		}else{

			var div = $("<div id=\"div\"><span class=\"text-white\">click on text to copy</span></div>")
			div.appendTo(this);
		}
		console.log(div);
	},
	function(){
		if($('body').find('#div').length){
			$('#div').remove();

		}
		console.log(div);
	})

})