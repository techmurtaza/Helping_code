$(function(){


    var flag = false;
	$('.na').click(function(){
        console.log('inside link funtion');
    
    	if(flag){
        	
        	$('#navbtn').click();
        	flag=false;
        	console.log('inside link funtion if');
    	}
	
	})
    	
	$('#navbtn').click(function(){
		flag=true;
    	console.log('inside navbtn clicked');
	})


	$('pre').click(function(){

		var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($(this).text()).select();
	    console.log($temp.val());
	    document.execCommand("copy");
	    $temp.remove();
	})

	$('pre').hover(function(){
		if($('body').find('#div').length){
			console.log("inside")

		}else{
			var div = $("<div id=\"div\"><span class=\"text-white\">click to copy</span></div>")
			div.appendTo(this.parentNode);
		}
		console.log(div);
	},
	function(){

		if($('body').find('#div').length){
			$('#div').remove();
		}
	})

})