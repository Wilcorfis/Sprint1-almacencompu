window.onload = function() {
    document.querySelector('#cantidad').focus();
  };
function calcular(cantidad) {
    let ventana2 = document.querySelector('#ventana2');
    let ventana1 = document.querySelector('#ventana1');

    let valorcompra = document.querySelector("#valorcompra");
    let valordesc = document.querySelector("#valordesc");
    let total = document.querySelector("#total");
    let mensaje = document.querySelector("#mensaje");

    valorcompra.value = 820000 * cantidad;


    total.value = Number(valorcompra.value) - (Number(valordesc.value)|0);

    mensaje.style.cssText += "color:red"
    mensaje.textContent = "No hay descuento para esta compra"

    if (cantidad > 0) {
        ventana1.style.cssText += 'display:none';
        ventana2.style.cssText += 'display:block';
        valordesc.focus();

        valordesc.addEventListener('input', updateValue);

        function updateValue() {
            if (Number(valordesc.value) > 0) {
                mensaje.style.cssText += "color:red"
                mensaje.textContent = "Su descuento fue de " +
                    (Number(valordesc.value) * 100) / Number(valorcompra.value) + "%";

            }
            total.value = Number(valorcompra.value) - (Number(valordesc.value)|0);
        }



    }

}