$(document).ready(function (){
    $("tr #btnDelete").click(function (){
    var idp = $(this).parent().find("#idProducto").val();
        
    eliminar(ipd);

    });
    function eliminar(ipd) {
         var url = "Controlador?accion=Delete";
                 $.ajax({
                  type: "POST",
                           url: yrl,
                           data: "idp=" + idp,
                           succes: function (data, teactStatus, jqXHR) {
                           alert("registro eliminado");
                           }
                    });
            }
});

