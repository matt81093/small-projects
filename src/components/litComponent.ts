import { LitElement, html, css } from "lit";
import { state } from 'lit/decorators.js'

export const tagName = "lit-background";

class Background extends LitElement {
    static styles = css`
    canvas {
        position: fixed;
        top: 0;
        left: 0;
    }`;

    /* @state()
    name: string */

    render() {
        return html`
        <canvas id="bg"></canvas>
        `;
    }
}

customElements.define(tagName, Background);

// Create Lit Element, add reactivbe element
// Then render Background with THREE?