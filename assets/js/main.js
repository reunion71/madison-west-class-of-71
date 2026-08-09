document.getElementById('radioOption1').addEventListener('change', function() {
    if (this.checked) {
        console.log('Radio button 1 was selected!');
        //window.location.href = 'https://www.paypal.com/ncp/payment/EZ8LNPNCAKXY8';
        window.open('https://www.paypal.com/ncp/payment/EZ8LNPNCAKXY8', '_blank');
        $('#golfing').modal('show');
        //alert("Hello! This is your custom alert message.");
        // Insert your button action code here
    }
});

document.getElementById('radioOption2').addEventListener('change', function() {
    if (this.checked) {
        console.log('Radio button 2 was selected!');
        alert("Hello! This is your custom alert message.");
        // Insert your button action code here
    }
});







