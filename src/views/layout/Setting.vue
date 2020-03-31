<template>
  <a-drawer :visible="visible" @close="onClose">
    <a-divider>主题风格设置</a-divider>
    <a-divider>导航设置</a-divider>
    <div class="setting-item">
      <span class="setting-item-desc">固定侧边栏</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">固定顶栏</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="headerFix" @change="TOGGLE_FIX('headerFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">下滑时隐藏顶栏</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">置顶顶栏</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">侧边栏开启手风琴模式</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">显示折叠侧边栏按钮</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">显示全局面包屑导航</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">全局面包屑显示图标</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">显示重载页面按钮</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>

    <a-divider>其它设置</a-divider>
    <div class="setting-item">
      <span class="setting-item-desc">开启多页签</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="tagsNavShow" @change="TOGGLE_FIX('tagsNavShow')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">多页签显示图标</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="sidebarFix" @change="TOGGLE_FIX('sidebarFix')" />
      </span>
    </div>
    <div class="setting-item">
      <span class="setting-item-desc">固定多页签</span>
      <span class="setting-item-action">
        <a-switch size="small" :checked="tagsNavFix" @change="TOGGLE_FIX('tagsNavFix')" />
      </span>
    </div>
  </a-drawer>
</template>

<script>
// import config from '@/config'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Setting',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('layout', ['sidebarFix', 'headerFix', 'tagsNavFix', 'tagsNavShow'])
  },
  methods: {
    ...mapMutations('layout', ['TOGGLE_FIX']),
    onClose() {
      this.$emit('update:visible', false)
      // this.visible = false
    },
    setHandle(a) {
      this.TOGGLE_FIX(1)
      console.log(a)
    }
  }
}
</script>

<style lang="less" scoped>
.setting-item {
  display: flex;
  align-items: center;
  padding: 12px 0;

  .setting-item-desc {
    flex: 1 1;
    font-size: 14px;
  }
  .setting-item-action {
    flex: 0 0 auto;
  }
}
</style>
