import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBakeryComponent } from './homepage-bakery.component';

describe('HomepageBakeryComponent', () => {
  let component: HomepageBakeryComponent;
  let fixture: ComponentFixture<HomepageBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageBakeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
