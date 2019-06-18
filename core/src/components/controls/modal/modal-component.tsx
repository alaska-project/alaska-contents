import { Component, h, Method } from "@stencil/core";

@Component({
    tag: 'alaska-modal',
    shadow: true
})
export class SelectComponent {

    componentWillLoad() {
        customElements.define('modal-page', class extends HTMLElement {
            connectedCallback() {
                this.innerHTML = `
          <ion-header>
            <ion-toolbar>
              <ion-title>Super Modal</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            Content
          </ion-content>`;
            }
        });
    }

    @Method()
    async presentModal() {
        // initialize controller
        const modalController = document.querySelector('ion-modal-controller');
        await (modalController as any).componentOnReady();

        // present the modal
        const modalElement = await (modalController as any).create({
            component: 'modal-page'
        });
        await modalElement.present();
    }

    render() {
        return (
            <ion-modal-controller></ion-modal-controller>
        );
    }
}

