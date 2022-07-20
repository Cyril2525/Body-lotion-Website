


$('#hamburger_menu').click(function(){
    $('#dropdown_menu').slideToggle('slow');
  });
  

  $('.product1 h1').mouseover(function(){
    $(this).css('color','green');
});

$('.product1 h1').mouseout(function(){
    $(this).css('color','orange');
});


// Contact Us Validation
$(function() {
   
    $(".form-control").on('focus', function(){
 
        $(this).parents(".form-group").addClass('focused');
 
    });
 
    $(".form-control").on('blur', function(){
 
        $(this).parents(".form-group").removeClass('focused');
 
    });
 
});

// Ad_button Validation
 $(document).ready(function(){
   $('.Ad_div').slideDown(1000);
});

$('#Ad_button').click(function(){
   $('.Ad_div').slideUp(1000);
});


// Image Effects
$('.floating_picture').mouseover(function(){
    $(this).css('background-color','whitesmoke');
});

$('.floating_picture').mouseout(function(){
    $(this).css('background-color','white');
});



// Animate function

$('.contents').hover(function(){
    $(this).animate({margin: '5px', height: '530px', width: '760px'});
 }, function(){
    $(this).animate({margin: '0px', height: '510px', width: '700px'});
 });

 $('.contents img').hover(function(){
    $(this).animate({margin: '5px', height: '400px', width: '760px'});
 }, function(){
    $(this).animate({margin: '0px', height: '400px', width: '700px'});
 });

$('.floating_picture img').hover(function(){
    $(this).animate({margin: '5px', height: '410px', width: '500px'});
 }, function(){
    $(this).animate({margin: '0px', height: '400px', width: '490px'});
 });

// contact address
 $("#contact").mouseover(function(){
	$(".1").css({'background':'whitesmoke', 'height': '70px', 'width': '850px', 'border': '2px solid orange', 'transition': '0.5s'});
});

$("#contact").mouseout(function(){
	$(".1").css({'background':'white', 'height': '60px', 'width': '800px', 'border': ' orange'});
});

// Email 
$("#email").mouseover(function(){
	$(".2").css({'background':'whitesmoke', 'height': '70px', 'width': '850px', 'border': '2px solid orange', 'transition': '0.5s'});
});

$("#email").mouseout(function(){
	$(".2").css({'background':'white', 'height': '70px', 'width': '800px', 'border': ' orange'});
});

// Phone number
$("#phone").mouseover(function(){
	$(".3").css({'background':'whitesmoke', 'height': '70px', 'width': '850px', 'border': '2px solid orange', 'transition': '0.5s'});
});

$("#phone").mouseout(function(){
	$(".3").css({'background':'white', 'height': '60px', 'width': '800px', 'border': ' orange'});
});


$("#box_1").click(function(){
   $(".box_container").fadeOut().fadeIn();

});