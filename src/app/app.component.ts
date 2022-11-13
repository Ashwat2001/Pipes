import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  show1 : any = '' ;
  show2 : any = '' ;
  show3 : any = '';

  getString(val:any){
    this.show2 = val;
   }

  convert(val:any){
    this.show3 = val;
   }

  getValue(val:any){
   this.show1 = val;
  }

  title = 'demo';

  public date = new Date();
  public name = "ashwat rajbhandari";
  public msg = "Hello World";
}
