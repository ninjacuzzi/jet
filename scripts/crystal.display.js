crystal.display = (function() {

    var model = crystal.model;
    var images = crystal.images;

    var canvas_context;

    function setup() {
        canvas = document.getElementById("monitor");
        canvas_context = canvas.getContext("2d");
    }

    function update(elapsed_time) {
        drawBackground();
        writeElapsedTime(elapsed_time.last_loop);
        writeElapsedTime(model.getX());
        color = {r: 255, g: 0, b: 0};
        center = {x: 260, y: 130};
        radius = 15;
        polygon_sides = 6;
        polygon_filled = false;
        alpha = 1.0;
        DrawPolygonRaw(canvas_context, polygon_sides, center, radius, color, alpha, polygon_filled);
        insidecolor = {r: 255, g: 0, b: 0};
        center = {x: 260, y: 130};
        radius = 8;
        polygon_sides = 6;
        polygon_filled = true;
        alpha = (elapsed_time.start % 1000) / 1000;
        DrawPolygonRaw(canvas_context, polygon_sides, center, radius, color, alpha, polygon_filled);
        drawCloud();
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
        cloud_x = model.getX();
        cloud_y = model.getX();
        draw(cloud_label, cloud_x, cloud_y)
    }

    function writeElapsedTime(elapsed_time) {
        x = 100;
        y = 100;
        write(elapsed_time, x, y)
    }

    return {
        setup : setup,
        update : update
    }
})();
