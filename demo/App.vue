<template>
  <div id="app" :data-from="from">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      from: ''
    }
  },
  created() {
    this.from = getQueryString('from')
  }
}
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
</script>
<style class="from-clair">
#app[data-from='clair'] > header {
  display: none;
}
#app[data-from='clair'] .page {
  margin: 0;
  padding: 0;
}
#app[data-from='clair'] .side-menu {
  display: none;
}
#app[data-from='clair'] ~ .github-corner {
  display: none;
}
#app[data-from='clair'] .block-demo--fixed .bock-demo__ctrl {
  padding-right: 15px !important;
}
</style>
<style lang="less">
@import './styles/index.less';
</style>
