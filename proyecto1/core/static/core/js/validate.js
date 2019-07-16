$(function() {

    $("#suscribirseForm").validate({
        rules: {
            email: {
              required: true,
              email: true
            },
          },
          messages: {
            required: "Ingresa tu correo primero",
            email: "Ingresa un correo válido"
          }
    });
  });  