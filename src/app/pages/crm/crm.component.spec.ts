import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmComponent } from './crm.component';

describe('CrmComponent', () => {
  let component: CrmComponent;
  let fixture: ComponentFixture<CrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
