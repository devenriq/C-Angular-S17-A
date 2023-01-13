import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
})
export class WarehouseDetailsComponent implements OnInit {

  products:any[]=[
    {
      "codigo": 1,
      "descripcion": 'Galletas Choco',
      "precio": 593,
      "precio de venta": 600,
      "ganancia": 7,
      "stock": 9583
    },
    {
      "codigo": 2,
      "descripcion": 'Galletas Vain',
      "precio": 533,
      "precio de venta": 600,
      "ganancia": 7,
      "stock": 95883
    },
    {
      "codigo": 3,
      "descripcion": 'Galletas Menta',
      "precio": 553,
      "precio de venta": 600,
      "ganancia": 7,
      "stock": 95873
    }
  ]

  id = 'algo'

  constructor(private router:Router, private route:ActivatedRoute,  ){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }
}
