import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.page.html',
  styleUrls: ['./demopage.page.scss'],
})
export class DemopagePage implements OnInit {

  fullName: string = 'Bijay';
  submitText: string;
  submit(){
    this.submitText = 'Hello word';  
  }
  constructor() { }

  ngOnInit() {
    
  }

}
