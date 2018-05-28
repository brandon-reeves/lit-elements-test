import { LitElement, html } from '@polymer/lit-element';
import { MDCTopAppBar } from '@material/top-app-bar';

export class MWCTopAppBarElement extends LitElement {

  static get properties() {
    return {
      mainTitle: String
    };
   }

  _render({mainTitle}: {mainTitle: string}) {
    return html`
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="./dist/bundle.css" />
      <style>
        :host {
          display: block;
          height: 64px;
        }
      </style>
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__title">${mainTitle}</span>
          </section>
        </div>
      </header>`;
  }

  _didRender() {
    const topAppBarElement = this.shadowRoot.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
}

customElements.define('mwc-top-app-bar', MWCTopAppBarElement);