Dribbble.Application = (function(){
  function Application(container) {
    this.container = $(container);
    this.shots = new Dribbble.Shots(this.container.find(".shots-container"));
  }
 
  Application.fn = Application.prototype;

  Application.fn.run = function() {
    this.shots.init();
  };
 
  return Application;
})();