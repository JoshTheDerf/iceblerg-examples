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

// getting-started/build.js - Demonstrates basic usage of the iceblerg blog build system.

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
