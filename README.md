# PersonalWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Or inside docker:

```bash
docker run --rm --name portfolio-dev -it -v $PWD:/app -p 4206:4200 -w /app node:21 npm run start -- --host 0.0.0.0
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Building Resume PDF

```bash
docker run --rm -it --name portfolio-resume -v $PWD/resume:/data --entrypoint rendercv -w /data ghcr.io/rendercv/rendercv:v2.3 render --watch "David_Nimon_CV.yaml"
```