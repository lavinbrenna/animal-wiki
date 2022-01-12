$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    const animal = $("#animal").val();

    if(animal === "1"){
      $("#beetle").show();
      $("#intro").hide();
      $("#cockatoo").hide();
      $("#chameleon").hide();
    }else if(animal === "2"){
      $("#chameleon").show();
      $("#beetle").hide();
      $("#intro").hide();
      $("#cockatoo").hide();
    }else{
      $("#cockatoo").show();
      $("#intro").hide();
      $("#beetle").hide();
      $("#chameleon").hide();
    }
  })
});