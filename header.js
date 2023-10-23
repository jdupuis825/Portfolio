/*
============================================
; Title: header.js
; Author: Jocelyn Dupuis
; Date: 06/21/2023
; Description: JS header for Personal Portfolio
============================================
*/

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `<div id="nav-container">
                <ul id="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="database.html">Database Diagrams</a></li>
                    <li><a href="api-unit-tests.html">API Unit Tests</a></li>
                    <li><a href="web-430/dupuis-tech-value-stream.html</a></li>
                </ul>
            </div>

            <div id="banner">
                <h1>Jocelyn Dupuis' Personal Portfolio</h1>
            </div>
            <hr>
        `;
    }
}

customElements.define("header-component", Header);


        
    