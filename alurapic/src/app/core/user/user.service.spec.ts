import { UserService } from './user.service';
import { TokenService } from '../token/token.service';
import { TestBed } from '@angular/core/testing';

describe('Serviço UserService', () => {
  let service: UserService;
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4NzA0MDY1OSwiZXhwIjoxNTg3MTI3MDU5fQ.x2qwIoVpRhCqtr-xf2YgJTksGJD78GbPg55wJ_lGrJk';

  beforeEach(() => {
    // service = new UserService(new TokenService());
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    service = TestBed.get(UserService);
  })

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  })

  it('deve, através de um token recuperar as informações do usuário', () => {
    service.setToken(token);

    service.getUser().subscribe(user => {
      expect(user.name).toBe('flavio');
    })

    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe('flavio');
  });

  it('deve limpar as informações no logout', () => {
    service.setToken(token);
    service.logout();

    expect(service.isLogged()).toBeFalsy();
    expect(service.getUserName()).toBe('');
  })

})
