import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { FooterComponent } from './footer.component';
import { UserService } from '../user/user.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let userService: UserService;
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule],
      providers: [UserService]
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    spyOn(userService, 'getUser').and.returnValue(of({
      email: 'leehcamposs@gmail.com',
      name: 'Leticia',
      id: 1
    })
  );

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  })

});
