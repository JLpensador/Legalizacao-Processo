import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvaraComponent } from './alvara.component';

describe('AlvaraComponent', () => {
  let component: AlvaraComponent;
  let fixture: ComponentFixture<AlvaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlvaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlvaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
