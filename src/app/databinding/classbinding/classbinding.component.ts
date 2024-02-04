import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent {

mystyle={
  'color':'yellow',
  'background-color':'purple',
  'width':'200px',
  'border-radius':'10px',
  'padding':'10px 20px'

}
myclass={
  'color':false,
  'fontme':true,
  'borderme':true
}



}
