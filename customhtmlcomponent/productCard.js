const template = document.createElement("template");
template.innerHTML = `
    <style>
        h1{
            color:red;
        }
        
    </style>

    <div class="card">
        <div>
            <slot name="ptitle"/>
        </div>
        <img width="100px" height=" 150px"/>
        <div class="container">
            <h3></h3>
            <p></p>
            <button class="btn"> Buy</button>
            <button class="btn" id="trash"> Delete</button>
        </div>
    </div>
`;

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h3").innerText =
            this.getAttribute("pname") + " ," + this.getAttribute("price");
        this.shadowRoot.querySelector("img").src = this.getAttribute("pimg");
        this.shadowRoot.querySelector("p").innerText =
            this.getAttribute("pstatus");
    }

    // triggered as soon as DOM is painted
    connectedCallback() {
        this.shadowRoot.querySelector("button").onclick = () => {
            // this.shadowRoot.querySelector("p").innerText = "Sold";
            this.pstatus = "Sold";
            // this.setAttribute("pstatus", "Sold");
        };

        // this.shadowRoot.querySelector("#trash").onclick = () => {
        //     this.remove();
        // };

        this.shadowRoot
            .querySelector("#trash")
            .addEventListener("click", () => {
                this.remove();
            });
    }
    set pstatus(val) {
        this.setAttribute("pstatus", val);
    }

    // which attributes change will be monitored to trigger attributeChangedCallback
    static get observedAttributes() {
        return ["pstatus"];
    }

    // Callback when attribute is changed
    attributeChangedCallback(attr, oldValue, newValue) {
        // to make it work static get observed attributes
        this.shadowRoot.querySelector("p").innerText = newValue;
    }

    // As soon as something is removed
    disconnectedCallback() {
        alert(this.getAttribute("pname") + " Component Removed");
        this.shadowRoot.querySelector("#trash").removeEventListener();
    }
}

window.customElements.define("product-card", ProductCard);
