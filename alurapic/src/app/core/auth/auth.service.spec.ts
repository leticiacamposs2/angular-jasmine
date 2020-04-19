import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe('Serviço AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    })

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  })

  it('deve instanciado', () => {
    expect(service).toBeTruthy();
  })

  it('deve autenticar o usuário', fakeAsync(() => {
    const fakeBody = {
      id: 1,
      nome: 'leticia',
      email: 'leehcamposs@gmail.com'
    };

    const spy = spyOn(userService, 'setToken').and.returnValue(null);

    service.authenticate('leticia', '1234').subscribe((response) => {
      expect(response.body).toEqual(fakeBody);
      // expect(response.headers.get('x-access-token')).toBe('tokenTest'); --- avalia o método HTTP
      expect(spy).toHaveBeenCalledWith('tokenTest'); //valida tbm se o parametro passado esta correto e se a funcao foi chamada
    })

    const request = httpMock.expectOne(req => {
      return req.method === 'POST';
    })

    request.flush(fakeBody, {
      headers: {
        'x-access-token': 'tokenTest'
      }
    });

    tick();
  }));

})
