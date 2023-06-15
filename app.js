const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
        if (box === 'A') {
            // this.boxASelected = true; // no toggle
            this.boxASelected = !this.boxASelected; // toggle
        } else if (box === 'B'){
            this.boxBSelected = !this.boxBSelected;
        } else {
            this.boxCSelected = !this.boxCSelected;
        }
    }
  },
});

app.mount("#styling");
