var cmp = {
  data: function() {
    return {
      status: "critical"
    };
  },
  template: "<p>Server Status: {{status }} (<button @click='changeStatus'>Change</button>)</p>",
  methods: {
    changeStatus: function() {
      this.status = "Normal";
    }
  }
};


new Vue({
  el: "#app",
  components: {
    'my-cmp': cmp
  }
});

new Vue({
  el: "#app2",

});
