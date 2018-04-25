## Project Monic UI v3 Angular 5.2

- Clone repo
```sh
    git clone https://github.com/santaz1995/angular5-starter.git
```
- Create local variables
```sh
    cd path/to/project/src/environments
```
In folder two files: environment.ts -for dev; environment.prod.ts for -prod

- Then setup backendUrl and frontendUrl. For example

```sh
      backendUrl: 'http://localhost:8601/api',
```
- Start dev server
```sh 
    npm start
```
- Build prod server (build project in dist folder)
```sh 
    npm run build
```

### Setup project with docker:

#####Download docker from  'https://www.docker.com/'.

- For start project in dev run:
```sh 
    docker-compose up -d
```
- For build project and start project in prod run:
```sh 
    docker-compose -f docker-compose.build.yml up
    docker-compose -f docker-compose.prod.yml up
```
