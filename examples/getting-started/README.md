### Getting Started with iceblerg
(This folder contains all the files for this tutorial. Run `node build.js` to generate the blog)

This guide assumes you already have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed, and have at a basic knowledge of their usage.

1. If you haven't already, create a folder in which to store your blog.
2. Open a terminal in that directory and install iceblerg using `npm install iceblerg`
3. Create your build file (henceforth known as `build.js`.) It will run iceblerg and generate your blog. Paste this into it.

  ```javascript
// Pull in iceblerg. (Having previously installed it with 'npm install iceblerg')
var iceblerg = require('iceblerg');

// Create a new instance of iceblerg. This allows you to have multiple blogs in
// the same site or project.
var myBlerg = new iceblerg();

// Build the blog model. This pulls in all the post data and builds all the
// interconnection trees.
myBlerg.buildModel(function(model) {
    // Generate the blog using the model built.
    myBlerg.generate(model);

    // You can also do other things with the model like rendering custom pages or passing
    // blog data to other services.
});
  ```
4. Create two folders, `posts` and `templates`. These are the default directories from which iceblerg generates the blog.
5. Create a new file (henceforth known as `hello-world.md`) in the posts directory and paste this into it. (See [Post Format](#post-format) for an explanation of the file)

  ```markdown
---
title: Hello World!
author: YOUR_NAME
date: 2015-7-28
tags:
    - Hello World
    - Tutorial
---
## Hello World!
***
==[END PREVIEW]==

Well, what do you know, this appears to be a **Blog Post!**
Ooh, I can use *Markdown* in it!

  ```
6. Download the [example templates](https://github.com/Tribex/iceblerg-examples/tree/master/example-templates) from the [example repository](https://github.com/Tribex/iceblerg-examples) and paste them into the directory folder so that the final structure is like so:

  ```markdown
My Blog/
    | build.js
    | posts/
        | hello-world.md
    | templates/
        | post.jade
        | tag.jade
        | author.jade
        | overview.jade
  ```
Take a closer look at those templates to see how to build your own. It's really not that hard. If you'd like to use a different template language, such as Handlebars, follow the [custom template langauge guide](https://github.com/Tribex/iceblerg-examples/tree/master/examples/custom-template-language).
7. Head back to the terminal and run `node build.js`. Your freshly-generated site should now be sitting in a new directory called `out`. Open `out/main/overview.html`
in a web browser to take a look!

See? That wasn't so bad was it? All the files for this guide can be found [here](https://github.com/Tribex/iceblerg-examples/tree/master/examples/getting-started) in the [example repository](https://github.com/Tribex/iceblerg-examples). Now go and make your super-awesome blerg.
