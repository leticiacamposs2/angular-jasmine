import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { UserService } from '../user/user.service';
import { MenuModule } from '../../shared/componets/menu/menu.module';
import { AlertModule } from '../../shared/componets/alert/alert.module';
import { LoadingModule } from '../../shared/componets/loading/loading.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let userService: UserService;
  let router: Router;
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MenuModule,
        AlertModule,
        LoadingModule
      ],
      providers: [UserService]
    }).compileComponents;
  })

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);

    spyOn(userService, 'getUser').and.returnValue(of({
      name: 'leticia',
      email: 'leehcamposs@gmail.com',
      id: 1
    }))

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve realizar o logout', () => {
    const spy = spyOn(userService, 'logout').and.returnValue(null);
    const spyNavigate = spyOn(router, 'navigate');
    component.logout();
    expect(spy).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['']);
  });
})
