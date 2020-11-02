import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJoinGroupPageComponent } from './client-join-group-page.component';

describe('ClientJoinGroupPageComponent', () => {
  let component: ClientJoinGroupPageComponent;
  let fixture: ComponentFixture<ClientJoinGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJoinGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJoinGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
