function res(){
  var respuesta = document.getElementById('respuesta');
  var resultado = document.getElementById('resultado');
  if(respuesta.value === "Mario bros")
    resultado.innerHTML = "correcto"
  else 
    resultado.innerHTML = "esta incorrecto"
}