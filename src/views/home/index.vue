<template>
  <div class="home">
    home页
    <div class="name">
      <span>我的名字叫{{ name }}</span>
    </div>
    <van-button type="info">这是一个vant按钮</van-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {},
  mixins: [],
  provide() {
    return {}
  },
  data() {
    return {
      tabs: [],
    }
  },
  computed: {
    ...mapState(['name']),
  },
  watch: {},
  methods: {
    // 使用api
    async getTabs() {
      try {
        this.tabs = await this.$get('/tabs')
        console.log(this.tabs, '获取数据成功了')
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getTabs()
  },
  mounted() {},
  destroyed() {},
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  .name {
    @include flex-center;
    height: 100px;
    width: rem(600); // 页面总宽度 750
    margin: 0 auto;
    border: 1px solid skyblue;
  }
}

// 用户片段 scss.json 请添加  直接r即可提示
//   "rem": {
//     "prefix": "r",
//     "body": ["rem($1)"],
//     "description": "rem"
//   }
</style>
