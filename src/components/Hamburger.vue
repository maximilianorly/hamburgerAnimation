<template class="nav-animate">
    <header class="nav-animate__header">
        <div v-on:click="this.runAnimation" class="nav-animate__hamburger-container">
            <div :class="{'nav-animate__hamburger-bar--top-animated': this.animate, 'nav-animate__hamburger-bar--top-close': this.close}"
            class="nav-animate__hamburger-bar nav-animate__hamburger-bar--top">
            </div>
            <div :class="{'nav-animate__hamburger-bar--center-animated': this.animate, 'nav-animate__hamburger-bar--center-close': this.close}"
            class="nav-animate__hamburger-bar nav-animate__hamburger-bar--center">
            </div>
            <div :class="{'nav-animate__hamburger-bar--bottom-animated': this.animate, 'nav-animate__hamburger-bar--bottom-close': this.close}"
            class="nav-animate__hamburger-bar nav-animate__hamburger-bar--bottom">
            </div>
            hello
        </div>
    </header>
</template>

<script>

    export default {
        name: 'Hamburger',
        data: function() {
            return {
                animate: false,
                close: false
            }
        },
        methods: {
            runAnimation() {

                if (!this.animate) {
                    this.animate = !this.animate;
                    this.close = false;
                } else {
                    this.animate = !this.animate;
                    this.close = !this.close
                }
                console.log(`animate: ${this.animate}`)
                console.log(`close: ${this.close}`)
            }
        }
    }
</script>

<style lang="scss">
  @import "../styles/_nav-animate.scss";
  body {
      margin: 0;
  }
</style>