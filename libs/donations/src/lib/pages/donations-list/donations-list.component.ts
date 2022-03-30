import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crowdfunding-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {
    categories :any[] = [
      {
        id: 1,
        name: "medical",
        checked : false
      },
      {
        id: 2,
        name: "memorial",
        checked : false
      },
      {
        id: 3,
        name: "education",
        checked : false
      },
      {
        id: 4,
        name: "politics",
        checked : false
      },
    ]
  constructor() { }

  ngOnInit(): void {
  }

  categoryFilter(){
    const selectedCategories = this.categories.filter(category => category.checked)
          .map((category) => category.id);

    console.log(selectedCategories)
    
    // this.getDOnations(selectedCategories)
  }

}
