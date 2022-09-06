import store, { increment } from "host/zustandStore";
const template = document.createElement("template");

template.innerHTML = `
  <style>div { color: coral; background-color: green}</style>
  <div class="counter-information">
    <div class="name"></div>
    <div>
      <slot name="email"/>
    </div>
    <button class="increment-btn">increment</button>
    <div>The zustand value is: <span class="count-value">0</span></div>
  </div>
`;

const { subscribe } = store;

class CounterInfo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    /*
      If I try to get the attribute in constructor,
      when inside of the react app, the attributes are null
    */
  }

  onClick() {
    increment();
  }

  connectedCallback() {
    const incrementButton = this.shadowRoot.querySelector(".increment-btn");
    incrementButton.addEventListener("click", this.onClick);

    /*
      Getting the attributes in connectedCallback works for both.
    */
    const nameElement = this.shadowRoot.querySelector(".name");
    nameElement.innerText = this.getAttribute("name");

    const countElement = this.shadowRoot.querySelector(".count-value");

    subscribe((state) => {
      countElement.innerText = state.count;
    });
  }

  disconnectedCallback() {
    const incrementButton = this.shadowRoot.querySelector(".increment-btn");
    incrementButton.removeEventListener("click", this.onClick);
  }
}

window.customElements.define("counter-info", CounterInfo);
