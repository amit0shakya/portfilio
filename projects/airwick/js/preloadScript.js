$(document).ready(function () {
	"use strict"
	//indexOf is not supported by IE9>. 
	if (!Array.prototype.indexOf){
	  Array.prototype.indexOf = function(elt /*, from*/){
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++){
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}
    
    var bgImg = [], img = [], count=0, percentage = 0;

    //Creating loader overlay
	$('.countainer').css({"opacity":'0'});
	
    $('<div id="loaderMask"><span></span></div>').css({
    	position:"absolute",
		'width':'200px',
		'height':'100px',
    	bottom:0,
    	right:0,
		'margin':'0 atuo',
		'font-size':'50px',
    }).appendTo('.preloader');

    //Searching all elemnts in the page for image
    $('*').filter(function() {

	    var val = $(this).css('background-image').replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');
	    var imgVal = $(this).not('script').attr('src');

	    if(val !== 'none' && !/linear-gradient/g.test(val) && bgImg.indexOf(val) === -1){
	    	bgImg.push(val)
	    }

	    if(imgVal !== undefined && img.indexOf(imgVal) === -1){
	    	img.push(imgVal)
	    }
 	});

    var imgArray = bgImg.concat(img); 

    $.each(imgArray, function(i,val){ //Adding load and error event
		$("<img />").attr("src", val).bind("load", function () {
            completeImageLoading();
        });

        $("<img />").attr("src", val).bind("error", function () {
//            imgError(this);
        });
    })

    function completeImageLoading(){
    	count++;
    	percentage = Math.floor(count / imgArray.length * 100);
    	//$('#loaderMask').html('<span>'+percentage + '%'+'</span>');
		
		var total=Math.round(128*(percentage/100));
		$('.clogo').css({"top":((128-total))+'px',"height":total+"px"})
		$('.logoimg').css({"top":((128-total)*(-1))+'px'});
    	if(percentage === 98){
    		//$('#loaderMask').html('<span>100%</span>');
			$(".countainer").animate({"opacity":1},{duration:2000,complete:function(){
				$('.preloader').remove();
			}});
			
			$(".scroll_to").animate({"opacity":1},2000);
			
    	}
    }

    //Error handling
    function imgError (arg) {
    	$('#loaderMask').html("Image failed to load.. Loader quitting..").delay(3000).fadeOut(1000, function(){
    		$('#loaderMask').remove();
    	})
    }

});