$(function () {
  var canvas = document.getElementById("myCanvas");
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  $("#btn-patatap").on("click", function () {
    $("#header-container").hide()
    $("main").hide()
    $("#canvas-container").show()
    canvas = document.getElementById("myCanvas")
    // canvas.height = window.innerHeight
    // canvas.width = window.innerWidth
  })
})