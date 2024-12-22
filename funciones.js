let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    toggleCart(true); // Esta línea se agregó para abrir el carrito automáticamente
    
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    document.getElementById('cart-items').value = cart.join(', ');
}

function toggleCart(forceOpen) {
    const cart = document.getElementById('cart');
    if(forceOpen){
      cart.classList.toggle('open');
    }else{
      cart.classList.toggle('open');

    }
    }

function sendCart(event) {
    event.preventDefault();
    const email = "https://formspree.io/f/mvgoeeqn";
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const cartItems = cart.join(', ')
    const body = `Nombre y Apellido: ${encodeURIComponent(name)}%0D%0A` 
    + `Localidad: ${encodeURIComponent(location)}%0D%0A` 
    + `Fecha de Entrega: ${encodeURIComponent(deliveryDate)}%0D%0A`
    + `Productos en el carrito: ${encodeURIComponent(cartItems)}`; 
    const mailtoLink = `mailto:${email}?subject=Carrito de Compras&body=${body}`; 
    window.location.href = mailtoLink;
    mostrarAlerta();
}








function mostrarAlerta(){
  alert("su mensaje fue enviado");
}
  document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const form = event.target;
    const formData = new FormData(form);
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    try{
        const response = await fetch('https://formspree.io/f/mvgoeeqn', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
          alert('¡Mensaje enviado con éxito!'); 
          form.reset();  //Resetea el formulario 
           } 
          else 
          { 
            throw new Error('Error en la solicitud'); 
          } 
        } 
          catch (error)
          { 
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'); 
          }
});
displayCart();

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
  } else {
      localStorage.setItem('darkMode', null);
  }
});


if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
