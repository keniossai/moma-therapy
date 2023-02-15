jQuery(document).ready(function ($) {
    "use strict";

    var TOptions;

    TOptions = {
        // variables
        class_active: "active",                             // active class
        class_trigger: "trigger",                            // trigger class
        toggle_btn: $(".site-nav-toggle"),                // header navigation toggle button for mobile view
        navigation: $(".site-nav"),                       // navigation selector
        sub_menu: ".sub-menu",                          // navigation sub menu
        indicator_mobile: ".indicator-mobile",                  // navigation indicator font awesome icons
        sticky_header: "#sticky-header",                     // sticky header selector
        sticky_wrapper: ".sticky-wrapper",                    // sticky header wrapper class
        pre_loader: $(".site-preloader"),                 // pre loader selector
        windows: $(window),                            // document window
        selector_slider: document.getElementById("sequence"),  // header slider javascript selector
        selector_google_map: document.getElementById("site-map"),  // google map javascript selector
        selector_counter: $(".counter"),                        // counter section for (statistic section)
        selector_tab: $("#site-tabs-1"),                    // tabs selector for (tabs section)
        tabs_button: $(".site-tabs-buttons"),              // tabs buttons for (tabs section)
        site_tabs: $(".site-tabs"),                      // tabs for (tabs section)
        tabs_bg: $(".site-tab-bg"),                    // tabs background image for (tabs section)
        portfolio: $(".site-portfolio-tabs-content"),    // portfolio content for (portfolio section)
        portfolio_tabs: $(".site-portfolio-tabs"),            // portfolio tabs for (portfolio section)
        light_box: $(".venobox"),                        // light box for (portfolio section)
        selector_team: $("#team-section-slider"),            // team slider selector for (team section)
        team_thumbs: $("#team-thumbnails"),                // team thumbnails selector for (team section)
        selector_testimonial: $("#testimonial-slider"),             // testimonial selector for (testimonial section)
        twitter_carousel: $(".tweet-carousel"),                 // twitter selector for (tweet section)
        twitter_slider: $("#tweet-slider"),                   // twitter slider for (tweet section)
        contact_form: $("#contactForm"),


        statistic_section: function () {

            // Initialize the plugin
            this.selector_counter.countimator({
                // Plugin options add here
            });
        },


        header_section: function (self, animate_speed) {

            // Changeable options
            animate_speed = 400;    // sub menu animate speed

            // this
            self = this;

            // Mobile view navigation toggle button
            self.toggle_btn.on("click", function (event) {

                // Stop default behaviour
                event.preventDefault();

                // Check if the toggle button not have active class
                if (!$(this).hasClass(self.class_active)) {

                    // Add class active
                    $(this).addClass(self.class_active);

                    // Show the menu
                    self.navigation.stop(true, true).slideDown(animate_speed);

                } else {

                    // Remove class active
                    $(this).removeClass(self.class_active);

                    // Hide the menu
                    self.navigation.stop(true, true).slideUp(animate_speed);
                }
            });

            // Mobile view sub menu show or hide on click event
            self.navigation.find(self.indicator_mobile).on("click", function (subMenu) {

                // sub menu
                subMenu = $(this).parent("li").children(self.sub_menu);

                // check if the sub menu is hidden
                if (subMenu.is(":hidden")) {

                    // if sub menu is hidden then show the sub menu on click
                    subMenu.stop(true, true).slideDown(animate_speed);
                } else {

                    // if sub menu is visible then hide the sub menu on click
                    subMenu.stop(true, true).slideUp(animate_speed);
                }
            });

        },


        /*-----------------------------------------------------------------------------------*/
        /* Sticky header changeable options
         * Source: https://github.com/garand/sticky */
        /*-----------------------------------------------------------------------------------*/
        sticky_header_menu: function () {

            // Sticky header plugin initialize
            $(this.sticky_header).sticky({
                topSpacing: 0,              // Pixels between the page top and the element's top
                zIndex: 10000           // controls z-index of the sticked element.
            });
        },
    };

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            center: true,
            loop:true,
            margin:10,
            nav:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    });

    

});

