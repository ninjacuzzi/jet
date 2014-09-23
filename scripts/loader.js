var jet = {};
jet.images = [];

window.addEventListener("load", function() {

    yepnope.addPrefix("loader", function(resource) {
        
        var isImage = /.+\.(jpg|png|gif)$/i.test(resource.url);
        resource.noexec = isImage;

        resource.autoCallback = function(e) {
            if (isImage) {
                var image = new Image();
                image.src = resource.url;
                jet.images[resource.url] = image;
            }
        };
        return resource;
    });

    Modernizr.load([
    {
        load : [
            "loader!images/forest.png",
            "loader!images/cloud.png",
            "loader!images/sprites.png",
            "scripts/vendor/jquery.min.js",
            "scripts/requestAnimationFrame.js",
            "scripts/sprite.js",
            "scripts/model.js",
            "scripts/view.js",
            "scripts/controller.js",
            "scripts/jet.js",
            "scripts/hex.js"
       ],
        complete : function() {
            app = jet.app;
            app.setup();
        }
    }
    ]);

}, false);
