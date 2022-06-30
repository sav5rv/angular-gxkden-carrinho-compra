import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts' /*identif o componente*/,
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

/*exporta a classe que trata da funcionalidade do componente*/
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit() {}
}
