import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { SignUpComponent } from './signup.component';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { VMessageModule } from '../../shared/componets/vmessage/vmessage.module';

describe('SignUp Component', () => {
  let component: SignUpComponent;
  let signupService: SignUpService;
  let router: Router;
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        HttpClientTestingModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        SignUpService,
        UserNotTakenValidatorService
      ]
    }).compileComponents;
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    signupService = TestBed.get(SignUpService);
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente', () => {
    expect(component).toBeTruthy();
  })

  it('deve cadastrar um usuário', () => {
    const navigateSpy = spyOn(router, "navigate");

    spyOn(signupService, "signup").and.returnValue(of(null));

    component.signupForm.get("email").setValue("leehcamposs@gmail.com");
    component.signupForm.get("fullName").setValue("Leticia");
    component.signupForm.get("userName").setValue("leticia");
    component.signupForm.get("password").setValue("1234");
    component.signUp();

    expect(navigateSpy).toHaveBeenCalledWith([""]);
  })

  it('deve retornar um log caso ocorra algum erro', () => {

    const spyLog = spyOn(console, 'log');

    spyOn(signupService, "signup").and.returnValue(throwError('Erro do servidor'));

    component.signupForm.get("email").setValue("leehcamposs@gmail.com");
    component.signupForm.get("fullName").setValue("Leticia");
    component.signupForm.get("userName").setValue("leticia");
    component.signupForm.get("password").setValue("1234");
    component.signUp();

    expect(spyLog).toHaveBeenCalledWith('Erro do servidor');
  })
})
