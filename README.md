# Gulp project

## Prerequisites

- Install Node.js or update it to version ```8.x``` or above using ```nvm```
- Install gulp-cli globally on your machine: ```sudo npm i gulp-cli -g``` and check its version using ```gulp -v```
- Gulp-cli version must be ```2.0.1``` or above
- Gulp version ```4.x``` or above

## Installing

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
