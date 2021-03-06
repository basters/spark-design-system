import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDividerDirective } from './sprk-divider.directive';

@Component({
  selector: 'sprk-test',
  template: `<div sprkDivider idString="test"></div>`,
})
class TestComponent {}

describe('Spark Divider Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkDividerDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element = fixture.nativeElement.querySelectorAll('div')[0];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(element.classList.contains('sprk-c-Divider')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(element.getAttribute('data-id') === 'test').toBe(true);
  });
});
