import { LitElement, html } from '@polymer/lit-element';
import { MDCTopAppBar } from '@material/top-app-bar';

class TestAppElement extends LitElement {

  static get properties() {
    return {
      title: String
    };
   }

  _render({title = 'Sup'}: {title: string}) {
    return html`
      <link rel="stylesheet" href="@material/top-app-bar/mdc-top-app-bar" />
      <style>
        @import '@material/top-app-bar/mdc-top-app-bar';
        .mdc-top-app-bar__title {
          text-transform: uppercase;
        }
      </style>
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__title">${title}</span>
          </section>
        </div>
      </header>`;
  }

  _didRender() {
    const topAppBarElement = this.shadowRoot.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
}

customElements.define('test-app', TestAppElement);