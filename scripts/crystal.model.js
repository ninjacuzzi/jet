crystal.model = (function() {
    var cloud_x;
    var dx = 0.5;

    function getX() {
        return cloud_x;
    }

    function increaseSpeed() {
        dx = dx + 0.1;
    }

    function decreaseSpeed() {
        dx = dx - 0.1;
    }

    function setup() {
        cloud_x = 0;
    }

    function update(elapsed_time){
        dt = elapsed_time.last_loop;
        x = dx * dt / 10;
        cloud_x = cloud_x + x;
    }

    return {
        setup : setup,
        update : update,
        increaseSpeed : increaseSpeed,
        decreaseSpeed : decreaseSpeed,
        getX : getX
    }
})();
