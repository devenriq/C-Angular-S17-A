import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
})
export class AlmacenComponent implements OnInit {
  id=''

  products:any[]=[
    {
      "codigo": 1,
      "descripcion": 'Galletas Choco',
      "precio": 593,
    },
    {
      "codigo": 2,
      "descripcion": 'Galletas Vain',
      "precio": 533,
    },
    {
      "codigo": 3,
      "descripcion": 'Galletas Menta',
      "precio": 553,
    }
  ]

  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id=String(this.route.snapshot.paramMap.get('id'))
  }

  goDetail(id:number){
    this.router.navigate(['/warehouse-details',id])
  }

}
