
/* script.js */
const gpayQr = document.getElementById('gpayQr');
const gpayData = "upi://pay?pa=akanshasrivastava62@okhdfcbank&pn=Akansha%20Srivastava"; // Corrected UPI link
gpayQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(gpayData)}`;

