<template>
    <div class="container">
      <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-servers-details></app-servers-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './Header.vue';
  import Servers from './Servers.vue';
  import ServerDetails from './server-details.vue';
  import Footer from './Footer.vue';

  export default {
    components: {
        'app-header': Header,
        'app-servers': Servers,
        'app-servers-details': ServerDetails,
        'app-footer': Footer,
    }
  }
</script>

<style>

</style>
