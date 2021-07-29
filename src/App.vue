<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="sass">

*
  box-sizing: border-box
body
  background-color: var(--light-grey)
#app
  font-family: "Rotonda", sans-serif
  font-size: 16px
  color: var(--black)
  overflow-x: hidden
  a
    text-decoration: none

  button
    border: none
    cursor: pointer
  h1
    font-size: 54px
    font-weight: bold
    text-transform: uppercase
  h2
    font-size: 36px
  h3
    font-size: 16px
    font-weight: bold
  .title
    text-align: center
    margin: 0 auto

</style>
