$(document).ready(function(){
$("body").hide();
$("body").fadeIn(1200);


$("#butao").on("click", function(){
alert("O formulário ainda não está pronto!");
})

$(function() {
    $('#kkk li').on( 'click', function() {
    	$(this).parent().find('li.active').removeClass( 'active' );
        $(this).addClass('active');
       	});
    });
})

