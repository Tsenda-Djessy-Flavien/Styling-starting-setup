const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      boxASelectead: false,
      boxBSelectead: false,
      boxCSelectead: false,
    };
  },
  methods: {
    boxSelected(box) {
        if (box = 'A') {
            this.boxASelectead = true;
        } else if (box = 'B'){
            this.boxBSelectead = true;
        } else {
            this.boxCSelectead = true;
        }
    }
  },
});

app.mount("#styling");
