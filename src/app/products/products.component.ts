import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    { name: "product1" },
    { name: "product2" },
    { name: "product3" }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute //ekledik çünkü "click" olayına bağlı loadProducts metotu yönlendirmesini bu sayfa üzerinden yapsın diye
  ) { }

  ngOnInit(): void {
  }

  loadProducts() {
    this.router.navigate(["products"],{relativeTo: this.route});
  }
}
