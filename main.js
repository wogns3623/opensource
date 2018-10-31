var menu_box = $(".menu#box");
        var menu_name = $(".menu#name");
        var menu_nav = $(".menu#nav");

        menu_box.hover(() => {
            menu_box.css("height", "100%");
            menu_box.on("transitionend", function() {
                menu_nav.css("visibility", "visible");
            });
        }, () => {
            menu_box.off("transitionend");
            menu_nav.css("visibility", "hidden");
            menu_box.css("height", "70px");
        })