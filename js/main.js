jQuery(document).ready(function($){
    "use strict"

    var TOptions;

    TOptions = {
        selector_counter    : $(".counter"),
        statistic_section: function () {
    
            // Initialize the plugin
            this.selector_counter.countimator({
                // Plugin options add here
            });
        },
    }

})