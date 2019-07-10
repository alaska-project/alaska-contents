import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showLoader(): any {
    const loader = new Loader(this);
    loader.show();
    return loader;
  }  
}

export class Loader {
  
  constructor(private loaderService: LoaderService) {}
  
  show() {}

  dismiss() {}
}
