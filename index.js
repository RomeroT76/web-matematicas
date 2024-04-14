(function() {
    // Lista de URLs de imágenes
    let imageUrls = ["Suma1.png", "Resta.png", "Multiplicacion.png"];

    // Índice de la imagen actual
    let currentIndex = 0;

    // Elemento de la imagen
    let image = document.getElementById("calculator-image");

    // Función para cambiar la imagen con efecto de transición
    function changeImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        let nextImage = new Image();
        nextImage.src = imageUrls[currentIndex];
        nextImage.onload = function() {
            image.style.opacity = 0;    
            setTimeout(function() {
                image.src = nextImage.src; 
                image.style.opacity = 1; 
            }, 2000); 
        };
    }

    setInterval(changeImage, 5000);
})();

