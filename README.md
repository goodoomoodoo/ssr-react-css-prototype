# Prototype 

This project is my attempt to create isomorphic react app with css modules.

## To begin...

This documentation enumerates the difficulties and the dilemma encountered.

### 1. Incorrect usage of babel and webpack

Two distinct commands - babel and webpack - build this project. Webpack, as defined in webpack.config.js, bundles the Javascript files into bundle.js and css files into style.css, AKA the browser code. Babel, as defined in package.json, reads and compiles the source file and server.js into node executable code. However, since webpack and babel both refer to .babelrc for Javascript compilation, I cannot add plugins into .babelrc, for it will alter the webpack output.

Solution?

I still need to do research on such topic, for I can't conceive a proper solution but workarounds. So what are the workarounds I have thought of, which probably doesn't work. 

1. Two .babelrc files (Nothing I've read so far suggested this...)
2. Compile everything through webpack

### 2. Unable to match the server html to browser html

This issue is inextricable to the first issue, for its main reason of occurence is due to the use of two different commands. The issue occurs as the babel can't produce the same class name as the webpack has produced. This issue has plenty of workaround, but they aren't sufficient enough to escape the label, "workaround." 

Solution?

1. CSS in JS. 

  -This eliminates all issues surrounding the css files, but it has two down side. First, CSS in JS in my opinion are less readable and
  editable, for they require more setup syntax, whereas pure css and other css preprocessors are plain and simple. Second, it increases
  the size of the bundle.js, and the html wouldn't be styled until the bundle.js is downloaded. As the result, the user would be staring
  at unstyled html page for a few seconds.

2. Critical CSS

  -To avoid the scenario mentioned in the first point, the server could send back necessary css file while the download is in action, and this will prevent the user from viewing the raw html page. However, it didn't solve the readability of the file, and setting up can be complex.

3. Plugins: Isomorphic Style Loader

  -Downside and upside? Haven't got it to work yet lol

4. Forget about SSR

  -No.

