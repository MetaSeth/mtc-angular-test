import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../../services/user.service';
import { UserModule } from '../../user.module';
import { PageAddUserComponent } from './page-add-user.component';

describe('PageAddUserComponent', () => {
  let component: PageAddUserComponent;
  let fixture: ComponentFixture<PageAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule],
      declarations: [PageAddUserComponent],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
