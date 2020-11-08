import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-products-by-date',
  templateUrl: './view-products-by-date.component.html',
  styleUrls: ['./view-products-by-date.component.css']
})
export class ViewProductsByDateComponent implements OnInit {

  searchDate = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
      this.searchDate = data.date;
    });
  }

}
