<template>
  <div class="header">
      <ul>
          <li class="header-btn"><slot name="left"></slot></li>
          <li class="header-tit">{{title}}</li>
          <li class="header-btn"><slot name="right"></slot></li>
      </ul>
  </div>
</template>

<script>
    export default{
        name :"header",
        props:{
            title:{
                type:String,
                dafault:"头部"
            }
        }
    }
</script>

<style>
 .header { position:fixed; top:0; left: 0; width: 100%; height: 45px; border-bottom: 1px solid #ccc; line-height: 44px; text-align: center; background:#fff}
    .header ul {  display: flex}
    .header-btn { width: 80px;}
    .header-tit { flex: 1; font-size:20px}
</style>
