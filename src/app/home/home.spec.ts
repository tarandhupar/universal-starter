import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';

import { Home } from './home.component';


describe('Home Component', () => {
	var home;
  beforeEach(() => {
    home = new Home();
  });

  it('should have name property', () => {
    expect(home.name).toBe('John');
  });

  it('should say hello with name property', () => {
    expect(home.sayHello()).toBe('Hello John');
  });

});



 