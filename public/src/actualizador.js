import * as components from "./components/index.js";

class AppContainer extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }
    
    render (){
        this.shadowRoot.innerHTML = `<my-frame
        postpirata= "./imagenes/aguacate.jpg"
        nick= "Hermenejildo"








        ></my-frame>`
        
        
}

}

customElements.define('app-container', AppContainer);


//  ``