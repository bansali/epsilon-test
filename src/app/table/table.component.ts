import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  products:{name:String, category: String, price: number}[]= [];
  sortDirection = 'desc';
  sortColumn = 'product'
  
  constructor(private tableService: TableService) {
   }

  ngOnInit(): void {
    
    this.tableService.getTableData().subscribe(data=> {
      console.log(data)
      data?.products.forEach((product:any) => {
        this.products.push({name: product.brand,  category: product.category, price: product.price})
      })
    })
    console.log(this.products)
  }

  sortProduct(column:string) {
    
    this.getDirection(column);
    console.log(column, this.sortDirection)
    this.products = this.products.sort((a:any,b:any) => {
      if(column !== 'price') {
        if(this.sortDirection === 'asc'){
          console.log('in here', a[column].toLowerCase())
          if(a[column].toLowerCase() > b[column].toLowerCase()) {
            return 1
          } else  if(a[column].toLowerCase() < b[column].toLowerCase()) {
            return -1
          } else  {
            return 0
          } 
        } else{ 
          if(a[column].toLowerCase() < b[column].toLowerCase()) {
            return 1
          } else  if(a[column].toLowerCase() > b[column].toLowerCase()) {
            return -1
          } else  {
            return 0
          } 
        }
      } else{
        if(this.sortDirection === 'asc'){
          return a[column] - b[column] 
        } else{ 
          return b[column] - a[column]
        }
      }      
    })
  }
  getDirection(column:string) {
    console.log('in solrt',column , this.sortColumn);
    if(column === this.sortColumn) {

      this.sortDirection = this.sortDirection !== 'asc' ? 'asc' : 'desc'
    } else {
      this.sortDirection = 'asc';
      this.sortColumn = column;
    }
  }



}
