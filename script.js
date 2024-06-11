function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function sendLocation(position) {
    const phone = document.getElementById('phone').value;
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `gainingcontainer.azurewebsites.net/save_location?phone=${phone}&latitude=${latitude}&longitude=${longitude}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Location saved successfully.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to save location.');
        });
}