# Gulp project

## Installing

- Install gulp globally on your machine:
```npm install gulp@next```
```sudo npm i gulp-cli -g```

- Install the node modules: ```npm i```

## Running

- Default: ```gulp```
- To spin up a web server, watch and reload the browser for changes: ```gulp watch``` 

## Information

General:
- To compile more than one file see Node globs
- Gulp-sass uses LibSass to convert Sass into CSS
- !file.* to exclude a file from a matched pattern
- *.+(scss|sass) to match multiple patterns

To work with gulp 4.* see:
- https://github.com/gulpjs/gulp#installation
- https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/

Versions must be:
- CLI version 2.0.1
- Local version 4.0.0

To check: ```gulp -v```