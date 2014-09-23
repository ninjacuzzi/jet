jet.model = (function() {

    var ship = {}
    var bullets = []

    function getShip() {
        return ship;
    }

    function getBullets() {
        return bullets;
    }

    function moveShip(dx, dy) {
        ship.lat+= dx;
        ship.long += dy;
    }

    function shoot() {
        var bullet = {
            lat : ship.lat + 25,
            long : ship.long + 10
        }
        bullets.push(bullet);
    }

    function moveShip(dx, dy) {
        ship.lat+= dx;
        ship.long += dy;
    }

    function moveBullets() {
        for (index = 0; index < bullets.length; ++index){
            bullets[index].lat = bullets[index].lat+10;
            if (bullets[index].lat>500)
                bullets.splice(index,1)
        }
    }

    function setup() {
        ship.lat = 50;
        ship.long = 50;
    }

    function update(dt) {
    }

    return {
        getShip : getShip,
        moveShip : moveShip,
        setup : setup,
        update : update,
        getBullets : getBullets,
        moveBullets : moveBullets,
        shoot : shoot
    }
})();
