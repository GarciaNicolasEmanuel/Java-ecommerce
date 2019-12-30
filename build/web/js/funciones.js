$(document).ready(function (){
    $("tr #btnDelete").click(function (){
    var ipd = $(this).parent().find("#idProductos").val();
        
    eliminar(ipd);

    });
    function eliminar(ipd) {
         var url = "Controlador?accion=Delete";
                 $.ajax({
                  type: "POST",
                           url: url,
                           data: "ipd=" + ipd,
                           succes: function (data, teactStatus, jqXHR) {
                           alert("registro eliminado");
                           }
                    });
            }
    $("tr #Cantidad").click(function (){
       var ipd=$(this).parent().find("#idpro").val(); ç
       var cantidad=$(this).parent().find("#Cantidad").val();
       var url="Controlador?accion=ActualizarCantidad";
       $ajax({
          type: "POST",
          url:url,
          data: "ipd=" + ipd + "&Cantidad=" + cantidad,
          success: function (data, textStatus, jqXHR) {
              location.href="Controlador?accion=Carrito";
          }
       });
    });        
});

