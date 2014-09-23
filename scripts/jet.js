jet.app = (function() {

    var model = jet.model;
    var view = jet.view;
    var controller = jet.controller;

    var lastTime = null;

    function setup() {
        model.setup();
        view.setup();

        window.requestAnimationFrame(loop);
    }

    function loop(now) {
        if (lastTime === null)
            lastTime = now;

        var dt = (now - lastTime) / 1000.0;

        if(controller.isDown('SPACE')){
            model.shoot();
            //console.log(model.getBullets());
        }
        model.moveBullets();

        if(controller.isDown('DOWN'))
            model.moveShip(0, Math.floor(200*dt));
        if(controller.isDown('UP'))
            model.moveShip(0, -Math.floor(200*dt));
        if(controller.isDown('LEFT'))
            model.moveShip(-Math.floor(200*dt), 0);
        if(controller.isDown('RIGHT'))
            model.moveShip(Math.floor(200*dt), 0);

        view.render(dt);

        lastTime = now;
        window.requestAnimationFrame(loop);
    };

    return {
        setup : setup
    }

})();
