import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None or Native
})
export class ServerElementComponent implements OnInit {

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
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
