function closeAnimationOnLoad() {
    $(window).on("load", function(){
        try {
            $(".loader-wrapper").fadeOut("slow");
        } catch (err) {
            // Error occasionally thrown with long wait times, caught and the loading animation is simply hidden
            if (!(err instanceof TypeError && err.message === "$(...).fadeOut is not a function")) {
                throw err;
            } else {
                $(".loader-wrapper").hide();
            }
        } finally {
            $("#header").show();
            $(".container").show();
        }
    });
}
