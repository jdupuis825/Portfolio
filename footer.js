/*
============================================
; Title: footer.js
; Author: Jocelyn Dupuis
; Date: 06/21/2023
; Description: JS footer for Personal Portfolio
============================================
*/

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<div id="footer">
                <p>Copyright &copy; 2023</p>  
                <a href="https://github.com/jdupuis825" target="_blank">My Github</a>
                &bull;
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Universities Web Development Degree</a>
                &bull;
                <a href="https://www.youtube.com/@bellevueuniversity" target="_blank">Web-330's Youtube Channel</a>
                &bull;
                <a href="https://github.com/buwebdev/web-330" target="_blank">Github for Course 330</a>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);

