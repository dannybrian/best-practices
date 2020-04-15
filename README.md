# Best Practices

Developers have evolved a long list of approaches to modules, testing, and above all, front-end frameworks to tackle maintainable JavaScript projects. But in 2020, standards including ES6 modules and custom elements provide most of what is needed. This repo demonstrates one such approach with vanilla JavaScript, supported in all modern browsers, with no polyfills.

Of course, "best practices" never are, with new innovations and improvements constantly moving the target on what is "best". But having grown tired of framework opinionation and convention, this repo represents a simple and sensible approach from the perspective of reusable JavaScript for both browsers and NodeJS with minimal dependencies.

## How To 

1. Clone the repo.

   `% git clone https://github.com/dannybrian/best-practices.git`

2. Install dependencies. You might need root permissions.

   `% npm install -g local-web-server browserify uglify-es`
   `% cd best-practices/; npm install`

3. Run the tests.

   `% npm test`

4. Build the app.

   `% npm run build;`
   `% npm run build-prod;`

5. Run the app.

   `% npm run serve`

6. Explore the code:

    * `tests/` - stubs for unit tests
    * `src/index.js` - the entry-point for the build, containing imports
    * `src/OurWidget.js` - the ES6 class for a component, imported by `index.js`
    * `web/index.html` - the HTML
    * `web/build.js` - the built JavaScript
    * `web/build.min.js` - the minified JavaScript
    




