

class Frame extends HTMLElement {
    static get observedAttributes(){
        return ["postpirata", "nick"]
    }
    
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propiedades, oldValue, newValue) {
        this[propiedades] = newValue
        this.render();
    }
    
    render (){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/components/postpirata/styles.css">
        <section class = "cartablanca">
        <image class= "imagenprincipal" src="${this.postpirata}"></image>
        <image class= "corazon" src="./imagenes/like.png"></image>
        <image class= "globo" src="./imagenes/globo.png"></image>
        <image class= "mensaje" src="./imagenes/mensaje.png"></image>
        <image class= "puntos" src="./imagenes/puntos.jpg"></image>
        <image class= "guardado" src="./imagenes/guardado.png"></image>
        <image class= "perfil" src="./imagenes/perfil.png"></image>

        <h2 class= "nick"> ${this.nick} </h2>
        <h2 class= "views"> 7,777 views </h2>
        <h2 class= "hermenejildo"> hermenejildo </h2>
        <h2 class= "all"> view all comments </h2>




        </section>`;
}

 
}
customElements.define('my-frame', Frame); 
export default Frame;