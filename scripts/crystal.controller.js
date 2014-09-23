crystal.controller = (function() {

    var model = crystal.model;
    var display = crystal.display;

    var LOOP_INTERVAL_DURATION = 15;
    var initial_time_record;
    var previous_time_record;

    var KEY_UP = 38;
    var KEY_DOWN = 40;

    function setup() {
        bindKeys();
        display.setup();
        model.setup();
        return initiateLoop();
    }

    function loop() {
        var elapsed_time = updateLoop();
        model.update(elapsed_time);
        display.update(elapsed_time);
    }

    function bindKeys() {
        $(document).click(function(event) {
            handleClick(event);
        });

        $(document).keydown(function(event) {
            switch(event.which)
            {
                case KEY_UP: handleUp(); break;
                case KEY_DOWN: handleDown(); break;
            }
        });
    }

    function handleUp() {
        model.increaseSpeed();
    }

    function handleDown() {
        model.decreaseSpeed();
    }

    function handleClick() {
        model.setup();
    }

    function initiateLoop() {
        initial_time_record = new Date().getTime();
        previous_time_record = initial_time_record;
        return setInterval(loop, LOOP_INTERVAL_DURATION);
    }

    function updateLoop() {
        var  updated_time_record = new Date().getTime();
        var elapsed_time_since_start = updated_time_record - initial_time_record;
        var elapsed_time_since_last_loop = updated_time_record - previous_time_record;
        previous_time_record = updated_time_record;
        var elapsed_time = {
            start: elapsed_time_since_start,
            last_loop: elapsed_time_since_last_loop
        };
        return elapsed_time;
    }

    return {
        setup : setup
    }

})();
