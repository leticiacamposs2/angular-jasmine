# Testes de componentes
A nossa aplicação front end é composta (além dos serviços) dos componentes visuais que o usuário vai interagir então é fundamental criar testes para que as ações do usuário seja coberto nos nossos testes.

----

## Atividades

- [x] Componente Footer
- [x] TestBed assíncrono
- [x] Componente Header
- [x] Teste de Rotas 

----

## Aprendizado

- Criação de testes para componentes visuais;
- Boas práticas para o uso da classe `TestBed` para criação de componentes visuais.
- Criação de testes de navegação de rotas através do uso da função `spyOn()`.
- O componente não é só uma classe javascript, ele envolve outros elementos, sendo possível fazer a criação do componente na mão, mas é recomendável utilizar o `TestBed`.
- Diferente do serviço para capturar a instancia do `TestBed` ao invés de usar o method `get` no teste do componente usamos o `fixture`, porque o componente é a junção do template com o comportamento (typescript)
- Criamos a variavel component que recebe a instancia da fixture
- Para acessar o ciclo de vida do component é necessário chamar o método `fixture.detectChanges()`
- Como testar ou instanciar o rotas no angular ? Atráves da classe RouterTestingModule
- Quando o retorno do meu spyOn é um `Observable` eu uso a minha função `of`
- A equipe do angular recomenda a montagem de objetos de componentes no TestBed utilizando o payOnModel, porque dependendo do componente a instanciação pode ser um pouco demorada ele é feito no próprio Angular de uma maneira assincrona, sendo assim é recomendado separar a criação do componente de tela em 2 beforeEach um assincriono e outro sincrono.
- O `compileComponents` por padrão é assincrono, então para fazer com que ele se torne sincrono ou seja após compilar os componentes executar os testes, usa a função async dentro do beforeEach

----

## Componentes que foram testados

- Footer
- Header