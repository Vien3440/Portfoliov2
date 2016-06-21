
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

/*************Section Formation*************/





$(document).ready(function(){
  $("#bouton1").click(function(){

    $('#desinateurIndus').addClass('animated flipInY');
    $("#desinateurIndus").css('visibility','visible');
      if (this){
        $("#animation").css('visibility','hidden');
        $('#animation').removeClass('animated flipInY');
        $("#beweb").css('visibility','hidden');
        $('#beweb').removeClass('animated flipInY');
      }
    });

    $("#bouton2").click(function(){
      $('#animation').addClass('animated flipInY');
      $("#animation").css('visibility','visible');

        if (this){
          $("#desinateurIndus").css('visibility','hidden');
          $('#desinateurIndus').removeClass('animated flipInY');
          $("#beweb").css('visibility','hidden');
          $('#beweb').removeClass('animated flipInY');
        }
      });

      $("#bouton3").click(function(){
        $('#beweb').addClass('animated flipInY');
        $("#beweb").css('visibility','visible');

        if (this){
          $("#desinateurIndus").css('visibility','hidden');
          $('#desinateurIndus').removeClass('animated flipInY');
          $("#animation").css('visibility','hidden');
          $('#animation').removeClass('animated flipInY');
          }
        });
})


/****Skile Graphe****/

$(document).ready(function(){
var skills = [
  {"header" :"",
    "captions" : [
      "Cooking",
      "Web",
      "Mobile",
      "Design",
      "AI"


    ],
    "values" : [
      0.70,
      0.90,
      0.70,
      0.80,
      0.70

    ]
  },
];

var pentagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI/2
var sides = 5; // Number of sides in the polygon
var theta = 2 * Math.PI/sides; // radians per section

function getXY(i, radius) {
  return {"x": Math.cos(radOffset +theta * i) * radius*width + width/2,
    "y": Math.sin(radOffset +theta * i) * radius*height + height/2};
}

var hue = [];
var hueOffset = 25;

for (var s in skills) {
  $(".content").append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
  hue[s] = (hueOffset + s * 255/skills.length) % 255;
}

$(".pentagon").each(function(index){

  width = $(this).width();
  height = $(this).height();
  var ctx = $(this).find('canvas')[0].getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.font="bolder 20px monospace"; /***titre***/
  ctx.textAlign="center"; /***titre***/

  /*** LABEL ***/
  color = "hsl("+hue[pentagonIndex]+", 100%, 50%)";
  ctx.fillStyle = color;
  ctx.fillText(skills[pentagonIndex].header, width/2, 15);

  ctx.font="45px "; /****text***/


  /*** PENTAGON BACKGROUND ***/
  for (var i = 0; i < sides; i++) {
    // For each side, draw two segments: the side, and the radius
    ctx.beginPath();
    xy = getXY(i, 0.3);
    colorJitter = 25 + theta*i*2;
    color = "hsl("+hue[pentagonIndex]+",100%," + colorJitter + "%)";
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.moveTo(0.5*width, 0.5*height); //center
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i+1, 0.3);
    ctx.lineTo(xy.x, xy.y);
    xy = getXY(i, 0.37);
    console.log();
    ctx.fillText(skills[ pentagonIndex].captions[valueIndex],xy.x, xy.y +5);
    valueIndex++;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  valueIndex = 0;
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,255,0,0.3)";
  ctx.strokeStyle = "rgba(0, 202, 99, 0.51)";
  ctx.lineWidth = 5;
  var value = skills[pentagonIndex].values[valueIndex];
  xy = getXY(i, value * 0.3);
  ctx.moveTo(xy.x,xy.y);
  /*** SKILL GRAPH ***/
  for (var i = 0; i < sides; i++) {
    xy = getXY(i, value * 0.3);
    ctx.lineTo(xy.x,xy.y);
    valueIndex++;
    value = skills[pentagonIndex].values[valueIndex];
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  valueIndex = 0;
  pentagonIndex++;
});
})
