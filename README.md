<p align="center">
   <img src="https://github.com/AfonsoMachado/happy-nlw/blob/master/.github/logo.svg" alt="Turma" width="350"/>   
</p>

<p align="center">:rocket: Projeto implementado durante o evento Next Level Week #3, organizado pela <a href="https://rocketseat.com.br/">Rocketseat</a>, com o objetivo de durante uma semana desenvolver um projeto completo aplicando conceitos e ferramentas usados no mercado atualmente.</p>

<p align="center">O Happy é uma plataforma de localização de orfanatos abertos para visitas e doações em determinada região.</p>

<p align="center">
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-layout">Layout</a>
</p>

## :computer: Tecnologias

<ul>
 <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://reactjs.org/">ReactJS</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://reactrouter.com/">React Router</a></li>
  <li><a href="https://react-leaflet.js.org/">React Leaflet</a></li>
  <li><a href="https://typeorm.io/#/">TypeORM</a></li>
  <li><a href="https://typehttps://github.com/expressjs/multer#readme">Multer</a></li>
  <li><a href="https://github.com/mapbox/node-sqlite3">SQLite3</a></li>
   <li><a href="http://expressjs.com/">Express</a></li>
   <li><a href="https://github.com/expressjs/cors#readme">Cors</a></li>
   <li><a href="https://github.com/jquense/yup">Yup</a></li>
</ul>

## :fire: Instalação

É necessário ter um ambiente NodeJS ou Yarn instalado em sua máquina

### Clonando o repositório:

```
$ git clone https://github.com/AfonsoMachado/proffy-nlw.git
```

### Executando back-end

```bash
# Go to server folder
$ cd happy-server

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Executando em http://localhost:3333/ .

#### Criando banco de dados

```bash
# Go to server folder
$ cd happy-server

# Run Migrations
$ yarn typeorm migration:run
```

### Executando front-end web

```bash
# Go to web folder
$ cd happy-nlw

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Executando em http://localhost:3000/ .

### Executando aplicação mobile

Necesário um smartphone com Android ou iOS, com o aplicativo Expo ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/br/app/expo-client/id982107779)) instalado, ou um emulador rodando uma máquina virtual Android/iOS

```bash
# Go to mobile folder
$ cd happy-mobile

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Após a execução, leia o QRCode usando o aplicativo Expo em seu smartphone

#### Conectando aplicação mobile com o back-end

```bash
# Go to services folder
$ cd happy-mobile/src/services

$ code api.ts
```

Editar o arquivo 'api.ts' inserindo como baseURL a URL indicada no expo junto com a porta do backend.

Caso esteja usando um emulador de android, executar o seguinte comando no seu terminal:

```bash
$ adb reverse tcp:3333 tcp:3333
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## :bookmark: Layout

Você pode visualizar o layout do projeto web por meio [desse link](https://www.figma.com/file/mmdHBtnZ6K6KW98aA20wFX/Happy-Web-Copy) e o layout do projeto mobile por meio desse [outro link](https://www.figma.com/file/mCXfuFnhFSiIONhkYjyLYO/Happy-Mobile-Copy). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
