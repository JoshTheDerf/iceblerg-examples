#!/usr/bin/node
// The MIT License (MIT)
//
// Copyright (c) 2015 Joshua Bemenderfer
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/* custom-template-language/build.js - Demonstrates using custom template and
 * content languages with iceblerg.
 * In this example Textile and Lo-Dash templates are used in place of Markdown and Jade.
 */

// Pull in the native fs module.
var fs = require('fs');

// Pull in iceblerg.
var iceblerg = require('iceblerg');

// Pull in lo-dash templates.
var template = require('lodash.template');

// Create a new instance of iceblerg with custom options.
var myBlerg = new iceblerg({
    'post-extensions': ['.textile', '.txt'], // Allowed file extensions for posts.
    'template-extension': '.ldash', // Allowed file extension for templates
    /** Render function used for every file.
     * @param {string} templatePath - The full path to the template used.
     * @param {string} data - An object containing the iceblerg model as well as page-specific data.
     * @param {string} type - The page type, eg. postPage, tagPage, authorPage, overviewPage.
     * @returns {string} - The generated HTML string.
     */
    'render': function(templatePath, data, type) {
        try {
            // This function is for rendering post bodies. In this case we're using textile-js.
            // Normally it would be marked.
            data.iceblerg.contentRenderer = require('textile-js');
            
            // Load the template file
            var source = fs.readFileSync(templatePath, {encoding: 'utf-8'});
            // Compile it into a lo-dash template function.
            var compiled = template(source);
            
            // Return the result of running the compiled function with the passed data.
            return compiled(data);
        } catch (e) {
            return e.message;
        }
    }
});

// Build the blog model. This pulls in all the post data and builds all the
// interconnection trees.
myBlerg.buildModel(function(model) {
    // Generate the blog using the model built.
    myBlerg.generate(model);
    
    // You can also do other things with the model like rendering custom pages or passing
    // blog data to other services.
});
