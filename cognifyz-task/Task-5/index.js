document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('ipAddress').textContent = `Your IP Address is: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ipAddress').textContent = 'Unable to fetch IP address. Please try again later.';
        });
});
