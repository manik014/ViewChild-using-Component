import { Component,ViewChild } from '@angular/core';
import{NumberComponent} from './number.component';
@Component({
  selector: 'number-parent',
  templateUrl: './number-parent.component.html',
})

export class NumberParentComponent{
@ViewChild(NumberComponent)
private numberComponent: NumberComponent;

increase(){
    this.numberComponent.increateByOne();
}

decrease(){
    this.numberComponent.decreaseByOne();
}

}