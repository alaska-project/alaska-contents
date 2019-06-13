import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FieldResolverService } from '../field-resolver/field-resolver.service';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Injectable({
  providedIn: 'root'
})
export class FieldFactoryService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private resolver: FieldResolverService) { }

  renderField(fieldType: string, mode: ContentMode, viewContainerRef: ViewContainerRef) {
    const fieldComponentType = this.resolver.resolveFieldComponent(fieldType, mode);
    return this.renderComponent(fieldComponentType, viewContainerRef);
  }

  private renderComponent(componentType: any, viewContainerRef: ViewContainerRef) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    viewContainerRef.clear();
    const ref = viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
}
