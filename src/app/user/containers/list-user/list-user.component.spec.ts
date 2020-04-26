import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user.service';
import { ListUserComponent } from './list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../../user.module';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [UserModule],
      declarations: [ ListUserComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
