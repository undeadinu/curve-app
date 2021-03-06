var Curve = require('./curve');
var SVGEditor = require('./svg-editor');
var SidebarView = require('./sidebar-view');

window.onload = function() {
  var hash, args, editor, sidebar
  hash = window.location.hash.slice(1)
  args = Object.freeze(JSON.parse(decodeURIComponent(hash)))

  document.body.classList.add(`platform-${process.platform}`)

  global.curve = new Curve(args)
  editor = new SVGEditor(args.fileName, document.querySelector('#canvas'), args)
  global.EDITOR = editor // debugging

  sidebar = new SidebarView(editor, {element: document.querySelector('#sidebar')})

  nicelyCenter(editor)

  window.onbeforeunload = function() {
    return curve.confirmClose()
  }

  document.addEventListener('keydown', function(event) {
    curve.keymaps.handleKeyboardEvent(event)
  })
}

function nicelyCenter(editor) {
  let top, left, scroller, canvas = editor.getCanvas()

  scroller = document.querySelector('#canvas-scroller')

  top = canvas.offsetTop - 20
  left = (canvas.offsetWidth / 2 + canvas.offsetLeft) - window.innerWidth / 2 - scroller.offsetLeft/2

  scroller.scrollTop = top
  scroller.scrollLeft = left
}
