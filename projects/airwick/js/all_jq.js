$(document).ready(function(){
       
 
var windowWidth = window.screen.width < window.outerWidth ?
                  window.screen.width : window.outerWidth;

   $('.main_nav li .ancher a').on('click',function(e){
   
     e.preventDefault();
   })

  function addMega(){
    $(this).addClass("hovering");
    $('.hovrbg').show();
	$('.menu_tabcon').hide();
    $('.menu_tabcon:first').show();
    $('.menu_tabul li').removeClass('active');
    $('.menu_tabul li:first').addClass('active')

     $("#price_list").slideUp();   
     $(".price_list").removeClass('active');
     $("#find_dlr").slideUp();    
     $(".find_dlr").removeClass('active');
     $(".hovrbg2").hide()
     $(".hovrbg3").hide()
  }
  function removeMega(){
    $(this).removeClass("hovering");
    $('.hovrbg').hide();
  }
  var megaConfig = {
    interval: 20,
    sensitivity: 200,
    over: addMega,
    timeout: 20,
    out: removeMega
  };
 $(".main_nav li.ddmain").hoverIntent(megaConfig)


 $('.sub_menu_list li.sub').hover(function(){
   
   $(this).find('.sub_ul').show();

 }, function(){
   
   $(this).find('.sub_ul').hide();

 })

 
   
   
//Mobile Nav Slide Css start
var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
showRightPush = document.getElementById( 'showRightPush' ),
				body = document.body;
              showRightPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toleft' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRightPush' );
			};
//Mobile Nav Slide Css end

//link js js start
$(".linkhover").hover(function(){
$(".linknone").stop().toggle("slow");

});

//footer js js start
$(".flr_list li").hover(function(){
$(this).find(".footeropen").stop().toggle();
});

// Our Leadership popup  js start
$(".viewprofileopen").click(function(){
$(".overlay-ol").show();
});
$(".olclose").click(function(){
$(".overlay-ol").hide();

});
//fancybox js tab start
$("#exterriorga li a").click(function() {
$("#exterriorga li a").removeClass("active");
$(this).addClass("active");
});
$("#interiorg li a").click(function() {
$("#interiorg li a").removeClass("active");
$(this).addClass("active");
});
$("#videog li a").click(function() {
$("#videog li a").removeClass("active");
$(this).addClass("active");
});


//Mobile js start
$("#showRightPush").click(function(){
$(".cbp-spmenu").toggle();
$(".wrappermain").toggleClass("box12");
});
//Mobile js end


	
//COMPANY AT A GLANCE js start
$(".cgcommon").hide(); 
$(".tabcg li a:first").addClass("active").show(); 
$(".cgcommon:first").show();
$(".tabcg li a").click(function() {
$(".tabcg li a").removeClass("active");
$(this).addClass("active");
$(".cgcommon").hide();
var activeTab = $(this).attr("href");
		$(activeTab).show(); 
		return false;
		
		});	


//Brand Page js start
$(".commonbtc").hide(); 
$(".brandtab li:first").addClass("activeli").show(); 
$(".commonbtc:first").show();
$(".brandtab li a").click(function() {
$(".brandtab li").removeClass("activeli");
$(this).parent().addClass("activeli");
$(".commonbtc").hide();
var activeTab = $(this).attr("href");
		$(activeTab).show(); 
		return false;
	});	

//ST Brand Page js start
$(".tscommonbtc").hide(); 
$(".tsbrandtab li:first").addClass("activeli").show(); 
$(".tscommonbtc:first").show();
$(".tsbrandtab li a").click(function() {
$(".tsbrandtab li").removeClass("activeli");
$(this).parent().addClass("activeli");
$(".tscommonbtc").hide();
var activeTab = $(this).attr("href");
		$(activeTab).show(); 
		return false;
	});	



//Mobile Tab js start
 $('#selector').change(function(){
        $('.panel').hide();
        $('#' + $(this).val()).show();
	});
 
// shoroom sub menu tabs

 $('.menu_tabcon:first').show();
 $('.menu_tabul li').removeClass('active');
 $('.menu_tabul li:first').addClass('active')
 $('.menu_tabul li a').hover(function(){
   $('.menu_tabul li').removeClass('active');
    $(this).parent().addClass('active');
   $(".menu_tabcon").hide();   
   var act = $(this).attr('href');
   $(act).show();
 });



 $(".pr_dl .price_list a").click(function (e) {
   e.preventDefault();  
   $(this).parent().toggleClass('active');
   $(".hovrbg2").toggle();
   $('#price_list').slideToggle(); 
 });

  $(".pr_dl .find_dlr a").click(function (e) {
   e.preventDefault();   
   $(this).parent().toggleClass('active')
   $(".hovrbg3").toggle()
   $('#find_dlr').slideToggle(); 
 });

 
  // slide up on click anywhere
  $("#price_list, #find_dlr").mouseup(function() {
      return false;
  });

 

   $(this).mouseup(function(price_list) {
        if (!($(price_list.target).parent('.pr_dl .price_list a').length > 0)) {
           $("#price_list").slideUp();   
           $(".price_list").removeClass('active');
           $(".hovrbg2").hide()
           
        }

    });


  $(this).mouseup(function(find_dlr) {
        if (!($(find_dlr.target).parent('.pr_dl .find_dlr a').length > 0)) {
           $("#find_dlr").slideUp();    
           $(".find_dlr").removeClass('active');
           $(".hovrbg3").hide()          
        }


    });

// js for mobile ....................................................................................................




 var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/mobile|Mobile/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/BB10; Touch/);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/webOS/i) ;
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if(isMobile.any()) {

   $('.main_nav li .ancher a').on('click',function(){
   $(".dropd ").hide();
   $(".main_nav li").removeClass('active');
   $(this).parent().parent().toggleClass('active');
   $(this).parent().parent().find(".dropd ").toggle();

})

$('.sub_menu_list li.sub a').click(function(e){
    e.preventDefault();
   $(this).parent().parent().toggleClass('active'); 
   $(this).parent().parent().find('.sub_ul').toggle();

 });
 
}
 



$('#homepage_slid').bxSlider({
        infiniteLoop: true,
        pager: true,
        auto: true,  
		speed: 500, 
		pause: 8000,
        responsive: true
     });
$('#inner_slider').bxSlider({
        infiniteLoop: true,
	    mode: 'fade',
        pager: false,
        auto: true, 
		    speed: 1000,
        responsive: true
     });
 $('#car_coltion').bxSlider({
    slideWidth: 120,
    minSlides: 2,
    maxSlides:6,
    moveSlides: 1,
    slideMargin: 1,
    pager: false

  });


 $('#latest_ofr').bxSlider({
    slideWidth: 120,   
    maxSlides: 6,
    minSlides: 2,
    moveSlides: 1,
    slideMargin: 1,
    pager: false

  });


  $('.crousel_main_mob .tabul li:first').addClass('active')
  $('.crousel_main_mob .tab_contaner .tab_cont:first').show();
  $('.crousel_main_mob .tabul li a').click(function(e){
      e.preventDefault();
      $('.crousel_main_mob .tabul li').removeClass('active');
      $('.crousel_main_mob .tab_contaner .tab_cont').hide();
      $(this).parent().addClass('active');
      var act_tab = $(this).attr('href');
      $(act_tab).show();

  })


 $(".home_slidermain .cont .btn a").hover(function() {
    //.rotate({angle:-360});
     $(this).find(".arew").rotate({
            duration:2000,         
            animateTo: 260
          })

  }, function(){

   $(this).find(".arew").rotate({
            duration:2000,         
            animateTo: 0
          })

  } );

 $(".home_slidermain .cont .btn a").hover(function() {
        $(this).find('.imges').attr("src", $(this).find('.imges').attr("src").split('_btn').join('_btnh'));
    },
     function() {
          $(this).find('.imges').attr("src", $(this).find('.imges').attr("src").split('_btnh').join('_btn'));
   });


$('.sub_mobdd a.ancr').click(function(e){
   e.preventDefault();  
  $('.mob_ddmen2').slideToggle();
})
$('.mob_ddmen2 li a').click(function(e){
   e.preventDefault();  
    $('.mob_ddmen2').slideUp();
    var this_txt= $(this).text();
    $('.sub_mobdd a.ancr').text(this_txt);
  });

  // slide up on click anywhere
 $(".mob_ddmen2").mouseup(function() {
      return false;
  }); 

  $(this).mouseup(function(price_list) {
        if (!($(price_list.target).parent('.sub_mobdd').length > 0)) {
           $('.mob_ddmen2').slideUp();          
        }
   });
   
   
   
  //left Nav js start
$(".opennav").click(function(){
		$('.subnavleft').slideUp();
		$('.morenav').removeClass("activeSub");
		$(this).parent().find(".subnavleft").slideDown("slow");
		$(this).parent().find(".morenav").toggleClass("activeSub");
	});
	
$(".leftnav li li a").click(function(){
		$(".leftnav li li a").removeClass("active");
		$(this).addClass("active");
		
	});	

//Mobile Menu js start
$(".mobileMenu").click(function(){
		$(".innerLeft").slideToggle("slow");
		$(".overlaynav").show();
		
	});	
//Mobile Menu js start
$(".overlaynav").click(function(){
		$(".innerLeft").slideToggle("slow");
		$(".overlaynav").hide();
		
	});	






//  document ready close...................................................

});



 var $lis = $('.sub_menu_list li.sub'),
 flag;
$(window).resize(function () {
    var width = $(window).width();
   
 
    if (flag != 1 && width <= 602) {
        flag = 1;

         $lis.on('mouseenter.toggle', function (event) {
            $(this).find('.sub_ul').show();
            $(this).addClass('active');
        }).on('mouseleave.toggle', function (event) {
            $(this).find('.sub_ul').hide();
            $(this).removeClass('active');
        }).off('click.toggle');

    }

    else if (flag != 2 && width >= 602) {
        flag = 2;    
        
        $('.sub_menu_list li.sub a').on('click.toggle',function(e){
          e.preventDefault();
         $(this).parent().parent().toggleClass('active'); 
         $(this).parent().parent().find('.sub_ul').toggle();

       }).off('mouseenter.toggle mouseleave.toggle');

    }
}).resize()

var flag2;

$(window).resize(function () {
    var width = $(window).width();
   
 
    if (flag2 != 1 && width <= 900) {
        flag2 = 1;
       $('.innerLeft').hide();
	   
         
      
    }

    else if (flag2 != 2 && width >= 900) {
        flag2 = 2;   
      
       $('.innerLeft').show();
	   $('.overlaynav').hide();


      

    }
}).resize()