const Vue = require("nativescript-vue");

new Vue({
  data: {
    counter: 3
  },
  template: `
    <Page>
      <StackLayout class="p-20">
        <Label text="Tap the button" class="h1 text-center"></Label>
        <Button text="TAP" @tap="onTap" class="btn btn-primary btn-active"></Button>
        <Label :text="message" class="h2 text-center"></Label>
      </StackLayout>
    </Page>
  `,
  computed: {
    message() {
        if (this.counter <= 0) {
            return 'Tap Challange Complete'
        } else {
            return this.counter + ' taps left'
        }
    }
  },
  methods: {
    onTap() {
        this.counter--
    }
  }
}).$start();