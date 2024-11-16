function mostrarAlerta(){
  alert("su mensaje fue enviado");
}
function sendmessages() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    
  
    // Enviar mensaje por Email
    var mailtoLink = 'mailto:gaitan.gabriel@hotmail.com?subject=' + encodeURIComponent('Mensaje de ' + name) + '&body=' + encodeURIComponent('Nombre: ' + name + '\nCorreo: ' + email + '\nMensaje: ' + message);
    window.open(mailtoLink, '_blank');
    mostrarAlerta();
  }
  
function sendwhatsapp(){

   // Enviar mensaje por WhatsApp
    var whatsappURL = 'https://wa.me/+5491123909541?text=' + encodeURIComponent('Nombre: ' + name + '\nCorreo: ' + email + '\nMensaje: ' + message);
    window.open(whatsappURL, '_blank');
    mostrarAlerta();
  }