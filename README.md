# Gulp project

## Prerequisites

- Node.js version must be ```8.x``` and above
- Gulp-cli version must be ```2.0.1``` and above
- Gulp version 4.0.0 and above
- To check gulp versions: ```gulp -v```

## Installing

- Install node or update it using ```nvm```
- Install gulp-cli globally on your machine: ```sudo npm i gulp-cli -g``` -> CLI must be version ```2.0.1``` and above
- Install the node modules: ```npm i```

## Running

At the folder of the project, you can run:
- ```gulp``` by default to compile Sass stylesheets and JavaScript files
- ```gulp watch``` to spin up a web server, watch and reload the browser for changes

## Information

General:
- To compile more than one file see Node globs
- Gulp-sass uses LibSass to convert Sass into CSS
- !file.* to exclude a file from a matched pattern
- *.+(scss|sass) to match multiple patterns

To work with gulp 4.* see:
- https://github.com/gulpjs/gulp#installation
- https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/
