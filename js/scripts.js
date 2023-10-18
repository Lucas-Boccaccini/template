
    // Obtén una referencia a los elementos relevantes
    document.addEventListener("DOMContentLoaded", function () {
        const opcAdmin = document.getElementById("opcAdmin");
        const opcUsuario = document.getElementById("opcUsuario");
        const adminDiv = document.getElementById("Admin");
        const usuarioDiv = document.getElementById("Usuario");
    
        // Establecer el estado inicial (solo mostrar Admin)
        adminDiv.style.display = "block";
        usuarioDiv.style.display = "none";
    
        // Agregar controlador de eventos para el enlace de Admin
        opcAdmin.addEventListener("click", function () {
            adminDiv.style.display = "block";
            usuarioDiv.style.display = "none";
    
            // Cambiar las clases activas en los enlaces
            opcAdmin.classList.add("active");
            opcUsuario.classList.remove("active");
        });
    
        // Agregar controlador de eventos para el enlace de Usuario
        opcUsuario.addEventListener("click", function () {
            adminDiv.style.display = "none";
            usuarioDiv.style.display = "block";
    
            // Cambiar las clases activas en los enlaces
            opcAdmin.classList.remove("active");
            opcUsuario.classList.add("active");
        });
    });
