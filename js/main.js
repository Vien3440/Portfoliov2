
var formContainer = $('#form-container');

bindFormClick();
//Opening the form
function bindFormClick(){
  $(formContainer).on('click', function(e) {
    e.preventDefault();
    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}

//Closing the form
$('#form-close, .form-overlay').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

function toggleForm(){
  $(formContainer).toggleClass('expand');
  $(formContainer).children().toggleClass('expand');
  $('body').toggleClass('show-form-overlay');
}

//Form validation
$('form').submit(function() {
  var form = $(this);
  form.find('.form-error').removeClass('form-error');
  var formError = false;

  form.find('.input').each(function() {
    if ($(this).val() == '') {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
    else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
  });

  if (!formError) {
    $('body').addClass('form-submitted');
    $('#form-head').addClass('form-submitted');
    setTimeout(function(){
      $(form).trigger("reset");
    }, 1000);
  }
  return false;
});

function isValidEmail(email) {
    return pattern.test(email);
};



/*******Barnav*****/


$(window).scroll(function(e){  /****Fonction ecoute le scroll***/
  var scrollTop = $(this).scrollTop();
    if($(window).scrollTop() > 10){ /****Nombre de pixcel pour condition ok***/
      console.log(scrollTop)
          $('.navbar').addClass("opaque");/******Aplique l'opasité****/
  }
  else{$('.navbar').removeClass("opaque");}

    if($(window).scrollTop() >580){
      $('#loisir').addClass('animated bounceInUp');
      $('#loisir').css('visibility','visible');
    }
})
/*******Nav Reponsivie*****/



  $('#menu').click(function(){
    $(this).toggleClass("open")
    })




/*************Section Formation*************/

  $(document).ready(function(){




var documentWidth= $(document).width();

  $("#bouton1").click(function(){

    $('#desinateurIndus').addClass('animated bounceInLeft');
    $("#desinateurIndus").css('visibility','visible');
      if (this){
      $("#animation").css('visibility','hidden');
      $('#animation').removeClass('animated bounceInLeft');
      $("#beweb").css('visibility','hidden');
      $('#beweb').removeClass('animated bounceInLeft');
    }
  });

  $("#bouton2").click(function(){
    $('#animation').addClass('animated bounceInLeft');
    $("#animation").css('visibility','visible');

      if (this){
        $("#desinateurIndus").css('visibility','hidden');
        $('#desinateurIndus').removeClass('animated bounceInLeft');
        $("#beweb").css('visibility','hidden');
        $('#beweb').removeClass('animated bounceInLeft');
      }
    });

    $("#bouton3").click(function(){
      $('#beweb').addClass('animated bounceInLeft');
      $("#beweb").css('visibility','visible');

      if (this){
        $("#desinateurIndus").css('visibility','hidden');
        $('#desinateurIndus').removeClass('animated bounceInLeft');
        $("#animation").css('visibility','hidden');
        $('#animation').removeClass('animated bounceInLeft');
        }
      });


});
