import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesTableComponent } from './affiliates-table.component';

describe('AffiliatesTableComponent', () => {
  let component: AffiliatesTableComponent;
  let fixture: ComponentFixture<AffiliatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
