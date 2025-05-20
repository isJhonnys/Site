document.addEventListener("DOMContentLoaded", function () {
  function showSection(id) {
    document.getElementById('products').style.display = id === 'products' ? 'block' : 'none';
    document.getElementById('contact').style.display = id === 'contact' ? 'block' : 'none';
  }

  window.showSection = showSection; // Expor para acesso pelo HTML inline

  function Contato(nome, email, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const novoContato = new Contato(nome, email, assunto, mensagem);

    alert(`Mensagem enviada!\n\nNome: ${novoContato.nome}\nEmail: ${novoContato.email}\nAssunto: ${novoContato.assunto}\nMensagem: ${novoContato.mensagem}`);

    this.reset();
  });

  document.getElementById('vehicle-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('vehicle-name').value.trim();
    const price = document.getElementById('vehicle-price').value.trim();
    const imageInput = document.getElementById('vehicle-image');
    const imageUrl = imageInput && imageInput.value.trim() !== '' ? imageInput.value.trim() : 'https://via.placeholder.com/300x150';

    if (!name || !price) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const vehicleCard = document.createElement('div');
    vehicleCard.className = 'vehicle-card';
    vehicleCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <h3>${name}</h3>
      <p>Preço: $${parseFloat(price).toLocaleString()}</p>
      <button onclick="editVehicle(this)">Editar</button>
      <button onclick="removeVehicle(this)">Remover</button>
    `;

    document.getElementById('vehicle-list').appendChild(vehicleCard);
    this.reset();
  });

  window.editVehicle = function (button) {
    const card = button.parentElement;
    const newName = prompt("Novo nome do veículo:", card.querySelector("h3").textContent);
    const newPrice = prompt("Novo preço:", card.querySelector("p").textContent.replace(/[^\d]/g, ''));

    if (newName && newPrice) {
      card.querySelector("h3").textContent = newName;
      card.querySelector("p").textContent = `Preço: $${parseFloat(newPrice).toLocaleString()}`;
    }
  }

  window.removeVehicle = function (button) {
    const card = button.parentElement;
    card.remove();
  }
});
