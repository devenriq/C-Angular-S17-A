import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
})
export class WarehouseDetailsComponent implements OnInit {



  id = 'algo'

  constructor(private router:Router, private route:ActivatedRoute,  ){}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }
}
