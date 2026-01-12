import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="hero">
        <div class="hero-text">
            <span class="eyebrow">SOMOS EXPLORADORES</span>
            <h1>Nuestra Base: La Luna</h1>
            <p>Desde 2024, ElementOS 3D ha establecido infraestructuras permanentes en el satélite para facilitar el salto a la Luna.</p>
        </div>
        <div class="model-container" style="height: 600px;">
            <model-viewer src="/luna.glb" camera-controls auto-rotate shadow-intensity="1" tone-mapping="neutral" style="width:100%; height:100%;" style="width:100%; height:100%; min-height: 300px;"></model-viewer>
        </div>
    </section>
  `,
  styleUrls: ['../app.component.css']
})
export class QuienesSomosComponent {}
