import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed, getTestBed, inject, fakeAsync,tick } from '@angular/core/testing';
import {Router, RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Q5'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Q5');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Q5!');
  });
//   it('should navigate to /article',
//     (() => {
//       const injector = getTestBed();
//       const router = injector.get(Router);
//       const fixture = TestBed.createComponent(ArticleComponent);
//  fixture.detectChanges();
 
//       // initial navigation
//       router.navigate(['/article'])
//         .then(() => {

//           expect(router.url).toEqual('/article');
//         });
//       }));
});
