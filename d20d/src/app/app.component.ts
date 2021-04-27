import {
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { PlotpointComponent } from './plotpoint/plotpoint.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;
  public PlotpointComponentClass = PlotpointComponent;
  private components = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  public ngOnInit() {}

  public addComponent(PlotpointComponentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      PlotpointComponentClass
    );
    const component = this.container.createComponent(componentFactory);
    component.instance.newItemEvent.subscribe((val) => console.log(val));

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

  public removeComponent(PlotpointComponentClass: Type<any>) {
    // Find the component
    const component = this.components.find(
      (component) => component.instance instanceof PlotpointComponentClass
    );
    const componentIndex = this.components.indexOf(component);
    console.log(componentIndex);

    if (componentIndex !== -1) {
      this.container.remove(this.container.length - 1);
      this.components.splice(componentIndex, 1);
    }
  }

  public onSubmitTemplateBased(user) {
    console.log(user);
  }

  public omit_special_char(event) {
    var k;
    k = event.charCode; //         k = event.keyCode;  (Both can be used)
    if (k === 32) {
      if (
        event.target.value
          .charAt(event.target.value.length - 1)
          .charCodeAt(0) === 95
      )
        return false;
      event.target.value = event.target.value.concat('_');
    }

    return (
      (k > 64 && k < 91) ||
      (k > 96 && k < 123) ||
      k == 95 ||
      k == 8 ||
      (k >= 48 && k <= 57)
    );
  }
}
