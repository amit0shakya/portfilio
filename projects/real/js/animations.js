
$(document).ready(function ($) {
	
	getNormalSize()
	
	function setup(){
		resize()
		
//		alert(div.top+'<<<div.top anaarCircle1');
		
			for(j=0;j<70;j++){
				var xp=Math.round(Math.random()*($(window).height()-180)+30);
				var yp=Math.round(Math.random()*($(window).width()-100)+30);
					
				$('<div></div>').css({
					'position':'absolute',
					'width':'60px',
					'height':'68px',
					'background-image':'url(images/bg_snow.png)',
					'top':xp+'px',
					'left':yp+'px'
				}).appendTo('.s1-snowimages');
			}
		
		
			for(k=0;k<150;k++){
				var xp=Math.round(Math.random()*($(window).height()-180)+30);
				var yp=Math.round(Math.random()*($(window).width()-100)+30);
					
				$('<div></div>').css({
					'position':'absolute',
					'width':'10px',
					'height':'8px',
					'background-image':'url(images/small-snow.png)',
					'top':xp+'px',
					'left':yp+'px'
				}).appendTo('.s1-snowimages');
			}
		
			for(l=0;l<20;l++){
				var xp=Math.round(Math.random()*($(window).height()-180)+30);
				var yp=Math.round(Math.random()*($(window).width()-100)+30);
				var randval=Math.round(Math.random()*4)+1;
				
				$('<div><img src=images/anaardaana'+randval+'.png></div>').css({
					'position':'absolute',
					'width':'59px',
					'height':'52px',
					'top':xp+'px',
					'left':yp+'px'
				}).appendTo('.s1-anaar');
				
				$('<div><img src=images/anaardaana'+randval+'.png></div>').css({
					'position':'absolute',
					'width':'59px',
					'height':'52px',
					'top':xp+'px',
					'left':yp+'px'
				}).appendTo('.s3-anaar');
			}
			
			$('.debugger').html('width = '+$(window).width()+'  height= '+$(window).height());
		
	}// end of setup
	
	slide = $('.slide');
	mywindow = $(window);
	
	slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
		
		/*if(($(this).attr('data-slide')!=dataslide)&&(dataslide!=0)){
			console.log('open menu');
		}*/
		
        dataslide = $(this).attr('data-slide');
		
		//alert(direction+'<<<<<direction');
		
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
			//$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
			//else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
			//remove the active class from the next navigation link 
        }
        else {
           // $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
		
		$('.debugger').html('$$$ direction = '+direction+'  SlideNo='+dataslide)
		
		checkforfloatNav(dataslide);
    });
	
	var currentSlideNo;
	
	function checkforfloatNav(val){
		
		if(val<=1){
			flotnavBool=false;
			disableFloatnav();
		}else if((dataslide>=1)&&(!flotnavBool)){
			flotnavBool=true;
			enableFloatnav();
		}else if((dataslide>1)||(dataslide<=5)){
			var currentDiv=$('.rightMenu ul li');
			//console.log($(currentDiv[dataslide-2]).attr('data')+'<<<data Attr in current Div    Element No>>>>>'+(dataslide-2)+' CURRENT DIV LENGTH>>>>'+$(currentDiv).length+' dataslide>>>>'+dataslide);
			var mydiv =$(currentDiv[currentSlideNo-2]).find('.strip');
			TweenLite.to(mydiv,.5,{'left':'50px','opacity':'0','ease':'Strong.easeOut'})
			
			mydiv =$(currentDiv[dataslide-2]).find('.strip');
			TweenLite.to(mydiv,.5,{'left':'-100px','opacity':'1','ease':'Strong.easeOut'})
		}
		
		currentSlideNo=val
	}
	
	var flotnavBool=false
	
	mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
           dataslide=1;  
		   checkforfloatNav(dataslide);
        }
		
		//$('.debugger').html('direction = '+direction+'  '+dataslide+'    '+$(window)+'  Yposition DIV2=='+$('.s2').offset().top)
    });

	setup();

	
		function resize(){
			$('.slide').css({"height":($(window).height()+40),"width":($(window).width())});
			
			var div=$('.s1-textarea').offset();
			$('.s1-nav').css({"top":(div.top+$('.s1-textarea').height()+30),"left":div.left});
				
			div=$('.s1-realjuice').offset();
			$('.s1-ribbon').css({"top":(div.top+$('.s1-realjuice').height()-140),"left":div.left+200,"position":"absolute"});
			$('.s1-ribbonshadow').css({"top":(div.top+$('.s1-realjuice').height()-19),"left":div.left+200,"position":"absolute","opacity":".5"});
			$('.s1-realbottleshadow').css({"top":div.top+$('.s1-realjuice').height()-37,"left":Math.round(div.left)+40,"position":"absolute","opacity":".5"});
			$('.s1-anaarcut').css({"top":(div.top+$('.s1-realjuice').height()-120),"left":div.left+160,"position":"absolute"});
			
			$('.s1-textarea').css({"top":(($(window).height()/2)-($('.s1-textarea').height()/2)),"left":($(window).width()/2)-($('.s1-textarea').width()/2)});		
			div=$('.s1-textarea').offset();
			$('.s1-nav').css({"top":(div.top+$('.s1-textarea').height()+10),"left":div.left});
			
			div=$('.s1-sticker').offset();
			$('.s1-stickershadow').css({"top":div.top+$('.s1-sticker').height()-10,"left":Math.round(div.left)+35});
			
			
			div=$('.colLeft').offset();
			$('.pomeCol3').css({"top":div.top+$('.colLeft').height()+getVpercent(12),"left":Math.round(div.left)});
			
			div=$('.leafBox').offset();
			topval=div.top+$('.leafBoximg').height();
			
			$('.pomeSmall').css({"top":topval+'px',"left":Math.round((div.left+465))+'px',"position":"absolute"});
			//$('.pomeSmall').css({"top":topval+'px',"right":Math.round($(window).width()*.11)+'px',"position":"absolute"});
			
			div=$('.pomeSmall').offset();
			$('.s4-productimages').css({"bottom":'-25%',"left":div.left+'px',"position":"absolute"});
			
			div=$('.recipeBox1').offset();
			$('.recipeBox2').css({"bottom":'20%',"left":Math.round(div.left+$('.recipeBox1').width()+20)+'px',"position":"absolute"});
			
			$('.pomeCol5').css({"top":'20%',"position":"absolute"});
			
			$('.recipeBox2').css({"bottom":'20%',"left":Math.round(div.left+$('.recipeBox1').width()+20)+'px',"position":"absolute"});
	
			
			var ypos=0;	
			for(i=1;i<6;i++){
				//if(i==1){
				//	$('.s'+i).css({"top":ypos,"right":0,"float":"left","position":"fixed"});
				//}else{
					$('.s'+i).css({"top":ypos,"right":0,"float":"left","position":"absolute"});
				//}
				ypos+=$(window).height()-40;
			}
			
			$('.wrapper').height(ypos);

//			resizeobject();
			
			//location.reload()
		}


		function getVpercent(val){
			var per=Math.round($(window).height()*(val/100))
			return per;
		}
			//
		
		function getHPercent(val){
			var per=Math.round($(window).width()*(val/100));
			return per;
		}
		
		
		$('.flotnavparent').addFloating({  
                targetRight: 0,  
                targetTop: Math.round($(window).height()*(.25)),  
                snap: true  
            }); 
			
			$(window).resize(function(){
				var websiteShow=true;
				//$('.debugger').html('window resize width= '+$(window).width()+' height='+$(window).height());
				
				web=$('.wrapper')
				
				/*if((websiteShow)&&($(window).width()<1280)){
					websiteShow=false
					//web.css({'opacity':0},2000);
					TweenLite.to('.wrapper',1,{'opacity':0});
				}else{
					TweenLite.to('.wrapper',1,{'opacity':1});
					websiteShow=true
					
				}*/

				resize();
				myInt=setInterval(function(){reloadpage()},500)
				//setInterval(reloadpage(),100)
	
			});
			
		addEvents()	
});

var myInt;

function reloadpage(){
	clearInterval(myInt);
	location.reload();
}


function enableFloatnav(){
	TweenLite.to('.fn1',2,{'left':'150px','opacity':1,'ease':'Elastic.easeOut'});
	TweenLite.to('.fn2',2,{'left':'150px','opacity':1,'ease':'Elastic.easeOut','delay':'.1'});
	TweenLite.to('.fn3',2,{'left':'150px','opacity':1,'ease':'Elastic.easeOut','delay':'.2'});
	TweenLite.to('.fn4',2,{'left':'150px','opacity':1,'ease':'Elastic.easeOut','delay':'.3'});
	autoEnable()
}

function disableFloatnav(){
	TweenLite.to('.fn1',2,{'left':'500px','opacity':0,'ease':'Elastic.easeOut'});
	TweenLite.to('.fn2',2,{'left':'500px','opacity':0,'ease':'Elastic.easeOut','delay':'.1'});
	TweenLite.to('.fn3',2,{'left':'500px','opacity':0,'ease':'Elastic.easeOut','delay':'.2'});
	TweenLite.to('.fn4',2,{'left':'500px','opacity':0,'ease':'Elastic.easeOut','delay':'.3'});
	
	autoDisable()
}

var divSize=[];

function getNormalSize(){
	for(i=0;i<$('.autosize').length;i++){
		
		$($('.autosize')[i]).attr('data',i);

		var obj=new Object();
			obj.div=$($('.autosize')[i]);
			obj.wid=$($('.autosize')[i]).width();
			obj.hgt=$($('.autosize')[i]).height();
		
		divSize.push(obj);
	}
}

function resizeobject(){
	for(i=0;i<$('.autosize').length;i++){
		var max=1920;
		var val=Math.round(($(window).width()/max)*100);
		var per=Math.round(80*(val/100))+20;
		obj=divSize[i];
		
		var newWidth=Math.round(obj.wid*(per/100));
		var newHeight=Math.round(obj.hgt*(per/100));
		
		console.log(obj);
		
		$($('.autosize img')[i]).css({'width':newWidth+'px','height':newHeight+'px'});
		$($('.autosize')[i]).css({'width':newWidth+'px','height':newHeight+'px'});
		
	}
	
	console.log('------------------------------------------------------------------------')
}

function autoEnable(){
	var currentDiv=$('.rightMenu ul li');
	//console.log($(currentDiv[dataslide-2]).attr('data')+'<<<data Attr in current Div        Element No>>>>>'+(dataslide-2)+'          CURRENT DIV LENGTH>>>>'+$(currentDiv).length+'     dataslide>>>>'+dataslide);
	var mydiv =$(currentDiv[dataslide-2]).find('.strip');
	TweenLite.to(mydiv,.5,{'left':'-100px','opacity':'1','ease':'Strong.easeOut'})
}

function autoDisable(){
	var currentDiv=$('.rightMenu ul li');
	
	for(i=0;i<4;i++){
		var mydiv =$(currentDiv[i]).find('.strip');
		TweenLite.to(mydiv,.5,{'left':'50px','opacity':'0','ease':'Strong.easeOut'})
	}
}

function addAnimation(){
	
		//var js = new Jarallax();
		js.addAnimation('.s1-sticker',[{progress:'0%','bottom':'8%'},{progress:'20%', 'bottom':'40%'}]);
		js.addAnimation('.s1-realjuice',[{progress:'0%','bottom':'7%'},{progress:'20%', 'bottom':'-20%'}]);
		
		var div=$('.s1-realjuice').offset();
		//$('.s1-anaarcut').css({"top":(div.top+$('.s1-realjuice').height()-120),"left":div.left+160,"position":"absolute"});

		js.addAnimation('.s1-anaarcut',[{progress:'0%','top':Math.round(div.top+$('.s1-realjuice').height()-140)+'px'},{progress:'20%', 'top':(div.top+$('.s1-realjuice').height()-270)+'px'}]);
		js.addAnimation('.s1-ribbon',[{progress:'0%','top':Math.round(div.top+$('.s1-realjuice').height()-140)+'px'},{progress:'20%', 'top':Math.round(div.top+$('.s1-realjuice').height()-360)+'px'}]);
		js.addAnimation('.s1-snowimages',[{progress:'0%','top':'0px'},{progress:'20%', 'top':'50px'}]);
		js.addAnimation('.s1-clouds',[{progress:'0%','top':'0px'},{progress:'20%', 'top':'-100px'}]);
		js.addAnimation('.s1-anaar',[{progress:'0%','top':'0px'},{progress:'20%', 'top':'-170px'}]);
		//js.addAnimation('.s2',[{progress:'0%','top':Math.round($(window).height()-14)+'px'},{progress:'70%', 'top':'500px'}]);
		//ypos+=$(window).height()-14;
		
		js.addAnimation('.realBox',[{progress:'5%','bottom':'0%'},{progress:'35%', 'bottom':'8%'}]);
		js.addAnimation('.realPomeimg',[{progress:'5%','bottom':'-300px'},{progress:'25%', 'bottom':'10px'}]);
		js.addAnimation('.pomeSplashimg',[{progress:'5%','top':'-500px'},{progress:'30%', 'top':'10px'}]);
		
		js.addAnimation('.pomeLargeImg',[{progress:'40%','top':'300px'},{progress:'70%', 'top':'-100px'}]);
		js.addAnimation('.s3-anaar',[{progress:'20%','top':'500px'},{progress:'70%', 'top':'-300px'}]);
		js.addAnimation('.s3anaar3',[{progress:'40%','top':'15%'},{progress:'85%', 'top':'50%'}]);
		js.addAnimation('.s3anaar2',[{progress:'40%','top':'70%'},{progress:'85%', 'top':'50%'}]);
		js.addAnimation('.s3anaar1',[{progress:'40%','top':'8%'},{progress:'85%', 'top':'50%'}]);
		js.addAnimation('.leafBoximg',[{progress:'50%',"opacity":0},{progress:'75%',"opacity":1}]);
		
		var topval=Math.round(div.top+$('.leafBoximg').height());
		js.addAnimation('.pomeSmall',[{progress:'50%','top':'180px'},{progress:'85%', 'top':'250px'}]);
		js.addAnimation('.s5anaar2img',[{progress:'80%','top':'-200px'},{progress:'100%', 'top':'0px'}]);
		js.addAnimation('.s5anaarimg',[{progress:'95%','top':'0px'},{progress:'100%', 'top':'200px'}]);
		js.addAnimation('.expertFruit',[{progress:'80%','top':'75%'},{progress:'100%', 'top':'50%'}]);
		js.addAnimation('.s5anaarTankimg',[{progress:'92%','bottom':'-250px'},{progress:'100%', 'bottom':'0px'}]);
		js.addAnimation('.rightAnaar5',[{progress:'85%','top':'5%'},{progress:'100%', 'top':'45%'}]);
		js.addAnimation('.anaarCircle',[{progress:'70%','top':'45%'},{progress:'100%', 'top':'30%'}]);
		js.addAnimation('.pomeCol5',[{progress:'70%','top':'25%'},{progress:'100%', 'top':'50%'}]);
		js.addAnimation('.s4-productimages',[{progress:'40%','bottom':'-25%'},{progress:'80%', 'bottom':'20%'}]);
		
		js.addAnimation('.s4-productimages',[{progress:'40%','bottom':'-25%'},{progress:'80%', 'bottom':'20%'}]);
		js.addAnimation('.recipeBox1',[{progress:'40%','bottom':'-20%'},{progress:'70%', 'bottom':'25%'}]);
		js.addAnimation('.recipeBox2',[{progress:'55%','bottom':'-20%'},{progress:'75%', 'bottom':('25%')+5}]);
		//'.recipeBox1'
}

$(window).ready(function(e) {
	js = new Jarallax();
    	addAnimation();
	
	var dataslide=0;
	
	resizeobject()
});

var dataslide=0;


function addEvents(){
	var mydiv=$('.s1-nav ul li');
	var mydiv2=$('.floatNav div ul li');
	
	for(i=0;i<mydiv.length;i++){
		var myLi=$(mydiv[i]).attr('data');
		
		$(mydiv[i]).click(function(e){
			//console.log($(this).attr('data')+'<<<myData clicked');	
				
			var myData=parseInt($(this).attr('data'));
			
			console.log(dataslide+'<<<dataslide myData>>>>'+myData);
			
			if(((dataslide-1)!=myData)&&(myData!==1)){
				animationJump(myData);
			}else{
				js.jumpToProgress(.255,500, 20)
			}
		});
		
		console.log(myLi+'<<<myLi');
		var myData;
		
		var mybtn=$(mydiv2[i]).find('.btn');
		
		$(mybtn).mouseover(function(){
			myData=parseInt($(this).parent().attr('data'));
			
			console.log('dataslide>>>>'+(dataslide-1)+'    myData>>>'+myData)
			
			if((dataslide-1)!=myData){
				var childDiv=$(this).parent().find('.strip');
				childDiv.css({'pointer-events': 'none'});
				
				TweenLite.to(childDiv,.5,{'left':'-100px','opacity':'1','ease':'Strong.easeOut'})
			}
		});
		
		$(mybtn).mouseout(function(){
			myData=parseInt($(this).parent().attr('data'));
			
			if((dataslide-1)!=myData){
				var childDiv=$(this).parent().find('.strip');
				TweenLite.to(childDiv,.5,{'left':'50px','opacity':'0','ease':'Strong.easeOut'})
			}
		});
		
		$(mybtn).click(function(){
			myData=parseInt($(this).parent().attr('data'));
			
			if((dataslide-1)!=myData){
				animationJump(myData);
			}
		});
	}
}

function floatNavClick(){
	
}

function floatNavOver(){
	
}

function floatNavOut(){
	
}

function animationJump(val){
//	js.jumpToProgress(progress, time, fps)
	$('.debugger').html('slide clicked='+val);
	switch(val){
		case 1:	js.jumpToProgress(.245,500, 20);
					break;
		case 2:	js.jumpToProgress(.506,500, 20);
					break;
		case 3:	js.jumpToProgress(.759,500, 20);
					break;
		case 4:	js.jumpToProgress(1,500, 20);
					break;			
		default:	break;
	}
	//js.jumpToProgress('', time, fps)
}