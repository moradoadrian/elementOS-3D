import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@google/model-viewer';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'] // Reusamos estilos globales
})
export class HomeComponent {}
