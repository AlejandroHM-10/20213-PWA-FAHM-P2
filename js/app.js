let principal = $("#principal");
let notice = $("#notice");

$(".btn-seguir").on("click", (e) => {
    e.preventDefault();
    console.log("Pulsaste un boton");
    principal.fadeOut("slow", function() {
        notice.slideDown(1000);
    });
});

$(".btn-regresar").on("click", (e) => {
    e.preventDefault();
    notice.fadeOut(() => {
        principal.slideDown(1000);
    });
})