import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  basicData! : any;
  constructor() {
  // window.location.reload()

   }

  ngOnInit(): void {
    this.basicData = {
      labels: ['Heart Transplant', 'Road rehabilitation', 'Orphans meals', 'Keith Tuition', ],
      datasets: [
          {
              label: 'Raised',
              backgroundColor: '#42A5F5',
              data: [650, 1000, 800, 3000, ]
          },
          {
              label: 'Goal',
              backgroundColor: '#FFA726',
              data: [2800, 5000, 1000, 2000,]
          }
      ]
  };
  }

}
