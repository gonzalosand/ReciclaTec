alert("Gracias por visitar ReciclaTec !!");
function cambiarColor(){

    document.body.style.backgroundImage = "url('./imagenes/basura2.jpg')";

}
var validator = $( "#myform" ).validate({
    invalidHandler: function() {
      $( "#summary" ).text( validator.numberOfInvalids() + " field(s) are invalid" );
    }
  });