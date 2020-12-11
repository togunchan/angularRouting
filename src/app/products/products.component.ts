import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products; // products, products.tz üzerinden çekiliyor.

  constructor(
    private router: Router,
    private route: ActivatedRoute //ekledik çünkü "click" olayına bağlı loadProducts metotu yönlendirmesini bu sayfa üzerinden yapsın diye
  ) { }

  ngOnInit(): void {
  }

  loadProducts() {
    this.router.navigate(["products"], { relativeTo: this.route });
  }
}
