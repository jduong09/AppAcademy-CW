console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  dataType: "json",
  success: function(resp) {
    console.log(resp);
  },
  failure: function() {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=48e36376e6726517ef180cf68ef91cce");
  }
});
// Add another console log here, outside your AJAX request
console.log("Outside of AJAX request");
