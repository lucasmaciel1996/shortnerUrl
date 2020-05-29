# Desafio Encurtador de URL

Serviço irá receber inicialmente como parâmetro uma URL que deverá ser encurtada seguindo as seguintes regras:

 1. Mínimo de 5 e máximo de 10 caracteres.
 1. Apenas letras e números.

A url retornada deverá ser salva no banco de dados e possui prazo de validade (você poderá escolher quanto tempo) e ao receber uma url encurtada, deverá fazer o
redirecionamento para a url salva no banco.

### Exemplo ao encurtar
Seu sitema recebe uma chamada para encurtar a url http://wisereducacao.com e retorna o seguinte json
 ```json
    {
      newUrl: "http://localhost:8081/abc123ab";
    }
 ```
![img_1](/src/assets/img_1.png)

### Exemplo ao redirecionar
Ao receber uma chamada para http://localhost:8081/abc123ab você irá retornar um redirecionamento para a url salva no banco
( http://wisereducacao.com ), caso não seja encontrada, retornar HTTP 404.

![img_2](/src/assets/img_2.png)
![img_2](/src/assets/img_3.png)

## Tecnologias utilizadas
 `NodeJs`\
 `TypeScript`\
 `Express`\
 `TypeOrm`\
 `Docker`\
 `Docker Composer`

# Instalação
 ```bash
    git clone git@github.com:lucasmaciel1996/shortenerurl.git && cd shortenerurl

    docker-compose up -d

    yarn &&  yarn typeorm migration:run

    yarn dev:server

    ou

    npm install && npm run typeorm migration:run

    npm run dev:server


 ```

# Documentação

[DOC API]("http://localhost:3434/api-docs")

demo `http://localhost:3434/api-docs`

# Testes
```bash
  yarn test
```
