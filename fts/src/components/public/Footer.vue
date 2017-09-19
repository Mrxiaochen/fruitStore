<template>
  <div class="footer">
      <ul>
          <li>
              <router-link to="/home">首页</router-link>
          </li>
          <li>
              <router-link to="/classify">分类</router-link>
          </li>
          <li>
              <router-link to="/eat">吃饭吧</router-link>
          </li>
          <li>
                <router-link to="/car">购物车</router-link>
            </li>
            <li>
                <router-link to="/mine">我的易果</router-link>
            </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"footer"
}
</script>

<style>
.footer {position:fixed; bottom:0; left: 0; width: 100%; height: 50px; border-top: 1px solid #ccc; line-height: 50px; text-align: center; background:#fff}
 .footer ul { overflow:hidden;}
 .footer li { float:left; width:20%}
</style>
