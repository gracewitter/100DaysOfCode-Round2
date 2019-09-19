var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');

    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.$refs.heading.innerText = "Something Else";

setTimeout(function(){
  vm1.title = "changed by timer";
  vm1.show();
}, 1000);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "New Instance"
  },
  methods: {
    onChange: function() {
      vm1.title = "changed";
    }
  }
});

var vm3 = new Vue({
  el: 'hello',
  template: '<h1>Hello</h1>'
});

// vm3.$mount('#app3');
