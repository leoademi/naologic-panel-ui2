import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFieldsDataComponent } from './panel-fields-data.component';

describe('PanelFieldsDataComponent', () => {
  let component: PanelFieldsDataComponent;
  let fixture: ComponentFixture<PanelFieldsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PanelFieldsDataComponent]
    });
    fixture = TestBed.createComponent(PanelFieldsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
