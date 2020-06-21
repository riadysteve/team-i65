const template = document.createElement('template');
template.innerHTML = `
  <style>
    .service-card img {
      height: 60px;
    }
    .service-card h3 {
      font-size: 1.3rem;
    }
    .service-card p {
      opacity: .8;
    }
  </style>
  <div class="service-card">
    <img />
    <h3><slot name="title" /></h3>
    <p><slot name="para" /></p>
  </div>
`;

class ServiceCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('img').src = this.getAttribute('src');

  }
}

window.customElements.define('service-card', ServiceCard);