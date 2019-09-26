Vue.component("my-cmp", {
  data: function() {
    return {
      status: "critical"
    };
  },
  template: "<p>Server Status: {{status }}</p>"
});


new Vue({
  el: "#app",

});
