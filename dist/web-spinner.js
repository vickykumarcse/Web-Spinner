/*!
 * Web Spinner Version 1.1.1
 * Author: Vicky Kumar
 * MIT License

  Copyright (c) 2019 Vicky Kumar

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 */

class WebSpinner extends HTMLElement {

    static get observedAttributes() {
        return ['loading', 'color', 'size', 'position'];
    }

    constructor() {
      super();
      this.shadow = this.attachShadow({'mode':'open'});
      this.color = "#3f51b5";
      this.size = "75px";
      var template = `
      <style>
        .web-spinner {
          width: ${this.size};
          height: ${this.size};
          border: 10px solid ${this.color};
          border-top-color: rgba(0,0,0,0);
          border-radius: 50%;
          position: absolute;
          top:calc(50% - 75px);
          left:calc(50% - 75px);
          animation-name: spin;
          animation-duration : 1s;
          animation-iteration-count: infinite;
          animation-play-state: running;
          animation-timing-function: linear;
          animation-delay: 0s;
          z-index:20000;
        }
        @keyframes spin{
          from{
            transform: rotate(0deg);
          }
          to{
            transform: rotate(360deg);
          }
        }
        .web-spinner-overlay{
          width:100%;
          height:100%;
          position:fixed;
          top:0px;
          left:0px;
          background-color: rgba(0,0,0,0.1);
          z-index:19999;
          display:none;
        }
      </style>
      <div class="web-spinner-overlay">
        <div class="web-spinner">
        </div>
      </div>
    `;
      this.shadow.innerHTML = template;
    }
  
    attributeChangedCallback(name, oldVal, newVal) {
      var webSpinnerOverlay = this.shadow.querySelector(".web-spinner-overlay");
      var webSpinner = this.shadow.querySelector(".web-spinner");
      switch(name) {
        case 'loading':
          if(webSpinnerOverlay){
            if(newVal === "true"){
              webSpinnerOverlay.style.display = "block";
            }
            else{
              webSpinnerOverlay.style.display = "none";
            }
          }
          break;

        case 'color':
          this.color = newVal;
          webSpinner.style.borderColor = this.color;
          webSpinner.style.borderTopColor = "rgba(0,0,0,0)";
          break;
        case 'size':
          var size = Number(newVal);
          if(size >= 25 && size <= 100){
            this.size = size +"px";
            var borderWidth = Math.ceil((size*13.33)/100)+"px";
            webSpinner.style.width = this.size;
            webSpinner.style.height = this.size;
            webSpinner.style.borderWidth = borderWidth;
          }
          break;
        case 'position':
          var position = newVal.split(",");
          position.forEach((el, index, array) => {
            array[index] = Number(el.trim());
          });
          if(position[0] && position[0]>=500){
            webSpinnerOverlay.style.width = position[0]+"px";
          }
          if(position[1] && position[1]>=500){
            webSpinnerOverlay.style.height = position[1]+"px";
          }
          if(position[2]){
            webSpinnerOverlay.style.top = position[2]+"px";
          }
          if(position[3]){
            webSpinnerOverlay.style.left = position[3]+"px";
          }
          break;
      }
    }
  
    connectedCallback() {

    }
  
  }
  
  window.customElements.define('web-spinner', WebSpinner);
  