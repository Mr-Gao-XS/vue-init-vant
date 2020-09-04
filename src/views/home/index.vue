<template>
  <div class="home">
    home
    <div class="name">
      <span>我的名字叫{{ name }}</span>
    </div>
    <van-button type="info">信息按钮</van-button>
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
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: rem(600);
    font-size: rem();
    margin: 0 auto;
    border: 1px solid skyblue;
  }
}
</style>
