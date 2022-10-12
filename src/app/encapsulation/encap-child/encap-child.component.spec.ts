import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapChildComponent } from './encap-child.component';

describe('EncapChildComponent', () => {
  let component: EncapChildComponent;
  let fixture: ComponentFixture<EncapChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncapChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
