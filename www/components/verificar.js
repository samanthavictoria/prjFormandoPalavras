// This is a JavaScript file
function botao( let ){
  var sv = document.palavras.visor.value;
  document.palavras.visor.value = sv + let;
  navigator.notification.beep(1);
}

$(document).on("click","#verificar", function(){
  var palavra = $("#visor").val();
     
     if(palavra == "abacaxi"){
        navigator.notification.alert("Resposta correta, parabéns!",null,"Aviso","ok");
     }
     else{
      navigator.vibrate(1000);
     }
});

$(document).on("click","#apagar", function(){
  var a = $("#visor").val().length-1;
  var texto =$("#visor").val();
  var texto_menos_um = texto.substring(0,a);

  $("#visor").val(texto_menos_um);

});

