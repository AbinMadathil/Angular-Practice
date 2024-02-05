import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

import { AppModule } from '../../app.module';

fdescribe('BodyComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("hide",()=>{

    component.bookDetails="This is a test";

    component.getBookDetails(2);

    expect(component.bookDetails).toEqual("");

    
    


  });
  it("show",()=>{

    component.bookDetails="";

    component.getBookDetails(1);

    expect(component.bookDetails).toEqual(component.bookArray[1].desc);

    

  });
});