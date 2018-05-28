import { html } from '@polymer/lit-element';
import { LitFamElement, Prop } from '../utils';
import '../mwc-top-app-bar/mwc-top-app-bar.element';
import '../mwc-card/mwc-card.element';

class TestAppElement extends LitFamElement {
  @Prop()
  appBarTitle = 'Sup';

  @Prop()
  cardTitle = 'Fam';

  @Prop()
  cardContent = 'Esketittt';

  _render({appBarTitle, cardTitle, cardContent}: {appBarTitle: string, cardTitle: string, cardContent: string}) {
    return html`
      <style>
        section {
          padding: 1em;
        }
      </style>
      
      <mwc-top-app-bar mainTitle="${appBarTitle}"></mwc-top-app-bar>
      <section>
        <mwc-card>
          <span slot="title">${cardTitle}</span>
          <span slot="content">${cardContent}</span>
        </mwc-card>
      </section>
    `;
  }
}

customElements.define('test-app', TestAppElement);