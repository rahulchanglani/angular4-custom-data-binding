import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None or Native
})
export class ServerElementComponent implements OnInit,
 OnChanges, 
 DoCheck, 
 AfterContentInit, 
 AfterContentChecked,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {

  /*

   BINDING TO CUSTOM PROPERTY

   To access child property from parent component we bind the element property
   in the template code [element]="serverElement"
   But by default as all properties of this component are accessible from the same component; not from outside.
   We can select which properties we can allow other components can access.
   We use @Input decorator for the property 'element' & exposing 'element' property to the world.So now any parent or
   any component hosting server-element component by implementing through its selector is now able to bind this element.


   At last, we replicate this element property for each element in array &
   successfully can pass element property down to that component & bind to property in that component

   For aliasing property binding in other component, we can pass name of alias for property as string in @Input decorator
 */
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit called');    
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called');        
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called');                
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit called');    
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called');    
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called');        
  }

}
