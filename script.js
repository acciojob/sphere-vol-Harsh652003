function volume_sphere(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the radius input value
    const radiusInput = document.getElementById('radius').value;
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius <= 0) {
        // Display an error message if radius is not valid
       
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the volume input field with the result
    document.getElementById('volume').value = volume.toFixed(2);
}


window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
