<template>
  <div>
      <v-header title="首页">
          <a solt="right" href="">消息</a>
      </v-header>
      <v-content>
          <div class="list">
              {{msg}}
          </div>
      </v-content>
      <v-footer></v-footer>
  </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return{
            msg:'home component'
        }
    }
}
</script>

<style>

</style>
