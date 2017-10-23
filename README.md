# ViewchildComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Project Details
  
  @ViewChild() can be used for component communication. A component will get instance of another component inside it using @ViewChild().
  
  Using this way parent component will be able to access the properties and methods of child component. The child component selector will be used in parent component HTML template.
  
  Step1: Create one child component. There we will write methods and properties. I created number.component.ts. In that child component i wrote methods and properties. 
  
  Step2: I Created the instance of NumberComponent in my parent component using @ViewChild(). 
  export class NumberParentComponent {
    @ViewChild(NumberComponent)
    ----- Here we are able to access the methods and properties of NumberComponent.
    }
    
   Note: NumberComponent and NumberParentComponent need to be configured in @NgModule in application module. 
  
  
