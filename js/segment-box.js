'use strict';

class segmentBox extends HTMLElement {
  STYLES = `
  <style>
  </style>
  <link rel="stylesheet" href="./css/segment-box.css" />`;

  HTML = `
  <div class="bar-h bar-a"></div>
  <div class="bar-h bar-b"></div>
  <div class="bar-h bar-c"></div>
  <div class="bar-v bar-v-t bar-d"></div>
  <div class="bar-v bar-v-t bar-e"></div>
  <div class="bar-v bar-v-b bar-f"></div>
  <div class="bar-v bar-v-b bar-g"></div>
  `;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = this.STYLES + this.HTML;
  
    this.shadow.appendChild(template.content.cloneNode(true));
    //this.shodow.classList.add('digit-9');
  }

};

window.customElements.define('segment-box', segmentBox);