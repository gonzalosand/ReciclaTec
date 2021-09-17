alert("Gracias por visitar ReciclaTec !!");
function cambiarColor(){

    document.body.style.backgroundImage = "url('./imagenes/fondonav.jpg')";

}
var validator = $( "#myform" ).validate({
    invalidHandler: function() {
      $( "#summary" ).text( validator.numberOfInvalids() + " Datos Invalidos, por favor volver a intentar" );
    }
  });