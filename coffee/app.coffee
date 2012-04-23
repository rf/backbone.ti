Backbone = require 'backbone'

class Main extends Backbone.View
  
  initialize: =>
    @window = Ti.UI.createWindow
      navBarHidden: true
    @label = Ti.UI.createLabel
      text: 'Welcome to backbone.ti'
      color: '#CCCCCC'

    @window.add @label
    @window.open()

main = new Main
