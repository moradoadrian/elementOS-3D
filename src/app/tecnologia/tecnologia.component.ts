import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="hero">
        <div class="hero-text">
            <span class="eyebrow">INGENIERÍA AVANZADA</span>
            <h1>Tecnología Robótica</h1>
            <p>Nuestros robots autónomos están diseñados para soportar las condiciones más extremas han destacado en el universo entero.</p>
        </div>
        <div class="model-container" style="height: 600px;">
            <model-viewer src="/robot.glb" camera-controls auto-rotate shadow-intensity="1" tone-mapping="neutral" style="width:100%; height:100%;" style="width:100%; height:100%; min-height: 300px;"></model-viewer>
        </div>
    </section>
  `,
  styleUrls: ['../app.component.css']
})
export class TecnologiaComponent {}
