import { html } from '@polymer/lit-element';
import { LitFamElement, Prop } from '../utils';

class TestAppElement extends LitFamElement {
  @Prop()
  appBarTitle = 'Sup';

  @Prop()
  contentText = 'Fam';

  _render({appBarTitle, contentText}: {appBarTitle: string, contentText: string}) {
    return html`
      <style>
        section {
          padding: 1em;
        }
      </style>
      
      <mwc-top-app-bar mainTitle="${appBarTitle}"></mwc-top-app-bar>
      <section>
        <mwc-card>
          ${contentText}
        </mwc-card>
      </section>
    `;
  }
}

customElements.define('test-app', TestAppElement);