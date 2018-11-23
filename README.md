# Gulp project

## Prerequisites

- Install Node.js or update it to version ```8.x``` or above using ```nvm```
- Install Gulp-cli globally on your machine with ```sudo npm i gulp-cli -g``` and check its version using ```gulp -v```
- Gulp-cli version must be ```2.0.1``` or above
- Gulp version must be ```4.x``` or above

## Installing

- Install the node modules via ```npm i```

## Running

At the rooot folder of the project, you can run:
- ```npm run build ``` to compile SASS stylesheets and JavaScript files
- ```npm run start``` to spin up a web server, watch and reload the browser for changes

## Information

General:
- To compile more than one file see Node globs
- Gulp-sass uses LibSass to convert Sass into CSS
- !file.* to exclude a file from a matched pattern
- *.+(scss|sass) to match multiple patterns

*To work with gulp 4.x see:*
- https://github.com/gulpjs/gulp#installation
- https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/
