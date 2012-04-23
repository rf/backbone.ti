Ti.API.debug 'hi'

Backbone = require 'backbone'

class Main extends Backbone.View
  
  initialize: =>
    @proxy = Ti.UI.createWindow
      navBarHidden: false

    alert 'opening'
    @proxy.open()

main = new Main
