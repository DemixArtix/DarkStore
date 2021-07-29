<template lang="pug">
  div(class="home")
    Benefits
    Steps
    CallToAction
</template>

<script>
// @ is an alias to /src

import Benefits from "../components/Benefits";
import Steps from "../components/Steps";
import CallToAction from "../components/CallToAction";
export default {
  name: 'Home',
  components: {
    CallToAction,
    Steps,
    Benefits
  }
}
</script>


