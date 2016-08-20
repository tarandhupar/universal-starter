import { Component, Directive, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';

// templateUrl example
import { Home } from './home';
import { Opportunity } from './opportunities';
//
/////////////////////////h
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'about',
  template: `
    <div>This is the "About" page</div>
  `
})
export class About { }

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.style.css',    
    '../../node_modules/samwds/dist/css/samwds.min.css'
  ],
  template: `
  <section id="iae-header"><header><div class="iae-header"><div class="usa-grid"> 
             <div class="iae-header-menu"><div class="iae-header-nav"><i class="fa fa-bars"></i>  
           <div class="m_T-1x">MENU</div></div><div class="iae-header-logo"><a class="image-wrap" href="#"> 
           <img alt="Transtion SAM.gov Logo" src="assets/img/transition-sam-logo.png"></a></div></div> 
             <div class="iae-sign-in"><i class="fa fa-search"></i><i class="fa fa-bell"></i> 
           <div class="pull-right m_L-3x">Create Account</div><div class="pull-right">|</div> 
           <div class="pull-right m_R-3x">Sign in</div></div></div></div></header>
   </section>

   <nav>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./home'] ">Home</a>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./opportunity'] ">Opportunities</a>
  </nav>

  <main>
        <router-outlet></router-outlet>
  </main>

  <section id="iae-footer"><footer><div class="usa-grid usa-footer-return-to-top"><a href="#">Return to top</a> 
            </div><div class="iae-footer"><div class="iae-footer-body usa-grid"> 
                 <div class="iae-footer-logo usa-width-one-sixth"> 
                   <a class="image-wrap" href="http://www.gsa.gov" target="_blank"><img alt="GSA logo" src="assets/img/logo-gsa.png"></a></div> 
                <ul class="iae-footer-links usa-unstyled-list usa-width-five-sixths"> 
              <li class=" usa-width-one-fourth"> 
            <h4 class="m_T-0 iae-footer-head">About</h4><ul class="iae-footer-links usa-unstyled-list"> 
            <li class="m_B"><a href="/about/" title="What Is This Site?">What Is This Site?</a></li> 
            <li class="m_B"><a href="/transition-roadmap/" title="Transition Timeline">Transition Timeline</a></li> 
            <li class="m_B"><a href="https://interact.gsa.gov/group/integrated-award-environment-iae-industry-community" target="_blank" title="Join our Interact Community">Join our Interact Community</a></li> 
            <li class="m_B"><a href="/for-developers/" title="For Developers">For Developers</a></li></ul></li></ul></div></div></footer></section>

   
  `
})
export class App {
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    

    // use services for http calls
    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
