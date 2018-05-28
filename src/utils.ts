import { LitElement } from '@polymer/lit-element';
import { } from 'reflect-metadata';

export class LitFamElement extends LitElement {
  private static _props: { [prop: string]: object } = {};
  
  private static get properties() {
    return this._props;
  }
}

export function Prop(propName?: string): Function {
  return function (target: any, propertyKey: PropertyKey, value: PropertyDescriptor): void {
    const typeReflection = Reflect['getMetadata']('design:type', target, propertyKey as string) as object;
    target.constructor._props[propName || propertyKey] = typeReflection;
  }
}