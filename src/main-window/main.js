var SVGDocument, hash, args;

SVGDocument = require('curve').SVGDocument

hash = window.location.hash.slice(1)
args = Object.freeze(JSON.parse(decodeURIComponent(hash)))

console.log(args.fileName);

// var canvas, doc, Examples;
//
// canvas = document.createElement('div');
// canvas.id = 'canvas';
// document.body.appendChild(canvas);
//
// window.DOC = doc = new SVGDocument("canvas");
//
// Examples = {
//   rects: '<svg height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="200" height="400" fill="red" /></svg>',
// };
//
// doc.deserialize(Examples.rects);
