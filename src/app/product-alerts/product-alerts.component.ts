import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts' /*identif o componente*/,
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

/*exporta a classe que trata da funcionalidade do componente*/
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

}
