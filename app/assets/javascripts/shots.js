Dribbble.Shots = (function(){
  function Shots(container) {
    this.container = container;
    this.shots = this.container.find(".shot");
  }
 
  Shots.fn = Shots.prototype;

  Shots.fn.init = function() {
    $(window).on("scroll", $.proxy(this, "imagesFromVisibles"));
    if($(window).scrollTop()===0){
      this.imagesFromVisibles();
    }
  };

  Shots.fn.imagesFromVisibles = function() {
    $.each(this.shots, function(key, shot){
      if(verge.inViewport(shot, -30)){
        this.show($(shot));
      }
    }.bind(this));
  };

  Shots.fn.show = function(element) {

    var panel = element.find(".panel-heading")
    , url = panel.find(".image-from").data("src")
    , placeholder = panel.find(".placeholder")
    , new_img;

    if(panel.find("img").size() == 0){
      new_img = $("<img>").attr({src: url, class: "img-responsive teaser hide"});
      new_img.appendTo(panel);
      new_img.on("load", $.proxy(this, "imageLoaded"));
    }
  };

  Shots.fn.imageLoaded = function(event) {
    var img = $(event.target),
    placeholder = img.prev(".placeholder");

    img.removeClass("hide");
    placeholder.remove();
  };
 
  return Shots;
})();