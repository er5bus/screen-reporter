# screen-reporter

Report visual bugs directly into your existing issue tracking tool like Trello.

# Requirements
docker;

# Installation

# Set Environment Variables

``` env
API_BASE_URL=screen reporter API

TRELLO_TOKEN=trello key
```

## Usage

Run this command to start webpack:

``` bash
$ docker run -v $(pwd)/src:/app/src -v $(pwd)/webpack.config.js:/app/webpack.config.js -v $(pwd)/.babelrc:/app/.babelrc -v $(pwd)/.env:/app/.env -v $(pwd)/chrome:/app/chrome chrome_extension
```

Or open the container with :

```bash
$ docker run -v $(pwd)/src:/app/src -v $(pwd)/webpack.config.js:/app/webpack.config.js -v $(pwd)/.babelrc:/app/.babelrc -v $(pwd)/.env:/app/.env -v $(pwd)/chrome:/app/chrome -it -u root chrome_extension /bin/bash
```

Then start webpack :
```bash
$ npm start
```
