import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: '[d20d-plotpoint]',
  templateUrl: './plotpoint.component.html',
  styleUrls: ['./plotpoint.component.scss'],
})
export class PlotpointComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;
  public PlotpointComponentClass = PlotpointComponent;
  private components = [];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public addNewItem($event) {
    console.log($event.target.name);

    this.newItemEvent.emit($event.target.value);
  }

  public ngOnInit() {}

  public removeComponent(PlotpointComponentClass: Type<any>) {
    // Find the component
    const component = this.components.find(
      (component) => component.instance instanceof PlotpointComponentClass
    );
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      this.container.remove(this.container.length - 1);
      this.components.splice(componentIndex, 1);
    }
  }

  public onSubmitTemplateBased(user) {
    console.log(user);
  }
}
