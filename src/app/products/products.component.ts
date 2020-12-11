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
    // //router params(router parametrelerini çekiyoruz)
    // this.route.paramMap.subscribe(params => {
    //   let id = params.get('id');
    // });
    // //ya da
    // this.route.snapshot.paramMap.get('id');

    //query params
    this.route.queryParamMap.subscribe( params => {
      console.log(params);
    });
    
    //alttaki yöntemle bilgiler yalnızca sayfa yenilenince gelir.
    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);
  }

  loadProducts() {
    this.router.navigate(["/products"], {
      queryParams: {
        page: 1
      }
    });
  }
}
