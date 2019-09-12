import { async, TestBed } from '@angular/core/testing';
import { AngularComponentsModule } from './angular-components.module';

describe('AngularComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularComponentsModule).toBeDefined();
  });
});
