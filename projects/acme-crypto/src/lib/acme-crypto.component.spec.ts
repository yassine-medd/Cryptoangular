import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeCryptoComponent } from './acme-crypto.component';

describe('AcmeCryptoComponent', () => {
  let component: AcmeCryptoComponent;
  let fixture: ComponentFixture<AcmeCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcmeCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
