$(document).ready(function(e) {
    
	
		function setup(){
			$('.slide').css({"height":($(window).height()+15),"width":($(window).width())});
		
			var div=$('.s1-textarea').offset();
			$('.s1-nav').css({"top":(div.top+$('.s1-textarea').height()+30),"left":div.left});
				
			div=$('.s1-realjuice').offset();
			$('.s1-ribbon').css({"top":(div.top+$('.s1-realjuice').height()-140),"left":div.left+200,"position":"absolute"});
			//$('.s1-ribbonshadow').css({"top":(div.top+$('.s1-realjuice').height()-19),"left":div.left+200,"position":"absolute","opacity":".5"});
			//$('.s1-realbottleshadow').css({"top":div.top+$('.s1-realjuice').height()-37,"left":Math.round(div.left)+40,"position":"absolute","opacity":".5"});
			//$('.s1-anaarcut').css({"top":(div.top+$('.s1-realjuice').height()-120),"left":div.left+160,"position":"absolute"});
			
			$('.s1-textarea').css({"top":(($(window).height()/2)-($('.s1-textarea').height()/2)),"left":($(window).width()/2)-($('.s1-textarea').width()/2)});		
			div=$('.s1-textarea').offset();
			$('.s1-nav').css({"top":(div.top+$('.s1-textarea').height()+10),"left":div.left});
			
			div=$('.s1-sticker').offset();
			$('.s1-stickershadow').css({"top":div.top+$('.s1-sticker').height()-10,"left":Math.round(div.left)+35});
			/*
			
			div=$('.colLeft').offset();
			$('.pomeCol3').css({"top":div.top+$('.colLeft').height()+getVpercent(12),"left":Math.round(div.left)});
			
			div=$('.leafBox').offset();
			topval=div.top+$('.leafBoximg').height()-100
			$('.pomeSmall').css({"top":topval,"left":Math.round(div.left)+465});*/
		
			var ypos=0;	
			for(i=1;i<5;i++){
				$('.s'+i).css({"top":ypos,"right":0,"float":"left"});
				ypos+=$(window).height()+14;
				//$('.debugger').html(ypos)
			}
		}
		
		function getVpercent(val){
			var per=Math.round($(window).height()*(val/100))
			return per;
		}
		setup();
		addParallax();
		
		
});

function addParallax(){
	var js=new Jarallax();
		alert('ADD JARALLAX');
		
		js.addAnimation('.s1-sticker',[{progress:'0%',"bottom":'5%'},{progress:'20%', "bottom":'15%'}]);
		//js.addAnimation('.debugger',[{progress:'0%',bottom:'5%'},{progress:'20%', bottom:'8%'}]);
}