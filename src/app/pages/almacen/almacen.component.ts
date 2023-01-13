import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
})
export class AlmacenComponent implements OnInit {
  id='prueba'

  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id=String(this.route.snapshot.paramMap.get('id'))
  }

  goDetail(id:number){
    this.router.navigate(['/warehouse-details',id])
  }

}
