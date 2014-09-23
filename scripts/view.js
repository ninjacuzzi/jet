jet.view = (function() {

    var app = jet.app;
    var images = jet.images;
    var model = jet.model;

    var canvas_context;

    var player = {
        pos: [0, 0],
        sprite: new Sprite('images/sprites.png', [0, 0], [39, 39], 20, [0, 1])
    };

    var bulletsprite = {
        sprite: new Sprite('images/sprites.png', [0, 39], [18, 8])
    };

    function setup() {
        canvas = document.getElementById("monitor");
        canvas_context = canvas.getContext("2d");
        render(10);
    }

    function render(dt) {
        drawBackground();
        color = {r: 255, g: 0, b: 0};
        center = {x: 260, y: 130};
        radius = 15;
        polygon_sides = 6;
        polygon_filled = false;
        alpha = 1.0;
        DrawPolygonRaw(canvas_context, polygon_sides, center, radius, color, alpha, polygon_filled);
        DrawPolygonRaw(canvas_context, polygon_sides, center, 10, color, alpha, polygon_filled);
        insidecolor = {r: 255, g: 0, b: 0};
        center = {x: 260, y: 130};
        radius = 8;
        polygon_sides = 6;
        polygon_filled = true;
        alpha = (dt % 1000) / 1000;
        DrawPolygonRaw(canvas_context, polygon_sides, center, radius, color, alpha, polygon_filled);
        DrawPolygonRaw(canvas_context, polygon_sides, center, 3, color, alpha, polygon_filled);
        canvas_context.save();
        writeElapsedTime(dt);

        player.sprite.update(dt);
        bulletsprite.sprite.update(dt);

        for (index = 0; index < model.getBullets().length; ++index){
            canvas_context.save();
            canvas_context.translate(model.getBullets()[index].lat, model.getBullets()[index].long);
            bulletsprite.sprite.render(canvas_context);
            canvas_context.restore();
        }

        canvas_context.save();
        canvas_context.translate(model.getShip().lat, model.getShip().long);
        player.sprite.render(canvas_context);
        canvas_context.restore();
    }

    function draw(image_label, x, y) {
        image_path = 'images/' + image_label +'.png';
        image = images[image_path];
        canvas_context.drawImage(image, x, y);
    }

    function write(text, x, y) {
        canvas_context.fillStyle = "black";
        canvas_context.font = "15px code";
        canvas_context.fillText(text, x, y);
    }

    function drawBackground() {
        background_label = 'forest';
        draw(background_label, 0, 0)
    }

    function drawCloud() {
        cloud_label = 'cloud';
        cloud_x = app.getX();
        cloud_y = app.getX();
        draw(cloud_label, cloud_x, cloud_y)
    }

    function writeElapsedTime(elapsed_time) {
        x = 100;
        y = 20;
        write(elapsed_time, x, y)
    }

    return {
        setup : setup,
        render : render
    }
})();
