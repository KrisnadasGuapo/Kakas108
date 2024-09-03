document.addEventListener("DOMContentLoaded", function() {
    const preciosHabitaciones = {
        simple: { desktop: 100, mobile: 80 },
        doble: { desktop: 150, mobile: 130 },
        suite: { desktop: 200, mobile: 180 },
    };

    const preciosServicios = {
        comida: 20,
        spa: 50
    };

    const tipoDispositivo = window.innerWidth >= 768 ? "desktop" : "mobile";

    const selectHabitacion = document.getElementById("habitacion");
    const servicioComida = document.getElementById("servicio-comida");
    const servicioSpa = document.getElementById("servicio-spa");
    const precioTotalElement = document.getElementById("precio-total");

    function actualizarPrecioTotal() {
        let precioHabitacion = preciosHabitaciones[selectHabitacion.value][tipoDispositivo];
        let precioTotal = precioHabitacion;

        if (servicioComida.checked) {
            precioTotal += preciosServicios.comida;
        }
        if (servicioSpa.checked) {
            precioTotal += preciosServicios.spa;
        }

        precioTotalElement.textContent = "$" + precioTotal;
    }

    selectHabitacion.addEventListener("change", actualizarPrecioTotal);
    servicioComida.addEventListener("change", actualizarPrecioTotal);
    servicioSpa.addEventListener("change", actualizarPrecioTotal);

    const formulario = document.getElementById("form-reserva");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        mensajeConfirmacion.classList.remove("hidden");
        formulario.reset();
        servicioComida.checked = false;
        servicioSpa.checked = false;
        actualizarPrecioTotal();
    });

    actualizarPrecioTotal();
});
