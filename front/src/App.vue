<template>
  <div>
    <h3>Book a Zoom meeting with Thomas Sohet</h3>
    <Scheduler class="calendar" />
  </div>
</template>

<script>
import Scheduler from './components/Scheduler.vue';

export default {
  name: 'App',
  components: {
    Scheduler,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.calendar {
  margin: 0% 2% 2% 2%;
  max-height: 90vh;
}
</style>
