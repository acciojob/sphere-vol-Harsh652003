function volume_sphere(event) {
   
    event.preventDefault();


    const radiusInput = document.getElementById('radius').value;
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius <= 0) {
        // Display an error message if radius is not valid
       
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the volume input field with the result
    document.getElementById('volume').value = volume.toFixed(4);
}


window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
