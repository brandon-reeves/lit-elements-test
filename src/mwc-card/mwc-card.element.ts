import { LitElement, html } from '@polymer/lit-element';

class MWCCardElement extends LitElement {
  _render({appBarTitle = 'Sup'}: {appBarTitle: string}) {
    return html`
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="./dist/bundle.css" />
      <style>
        :host {
          display: block;

          height: 5rem;
          width: 15rem;
        }

        .mdc-card {
          padding-left: 1em;
          font-family: sans-serif;
          height: 5rem;
          width: 15rem;
        }
      </style>
      <div class="mdc-card">
        <div class="mdc-card__media mdc-card__media--square">
          <div class="mdc-card__media-content">
            <h1><slot id="content" /></h1>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('mwc-card', MWCCardElement);