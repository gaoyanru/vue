/**
 * [用户帖子发布页]
 */
<template>
  <div class="view">
    <wlb-header :options="{ title: boardName }">
      <span slot="right" :class="['rightButton', {disable: !publicEnd || !content}]" @click="toPublic">{{publicEnd ? '发表' : '发表中...'}}</span>
    </wlb-header>
    <!-- <input class="topic-text-title" v-model="title" palceholder="请输入发帖标题"/>
    <div class="line"></div> -->
    <textarea class="topic-text-content" v-model="content" placeholder="说点什么吧..."></textarea>
    <p class="residue">你还可以输入{{num}}字</p>
    <!-- <div class="topic-edit-foot">
      <div class="topic-edit-type">
        <span :class="['topic-edit-type-chat', {active:active}]" @click="checkType(1)">闲聊</span>
        <span :class="['topic-edit-type-ask', {active:!active}]" @click="checkType(0)">问答</span>
      </div>
      <span :class="['topic-edit-sub', {disable: !publicEnd || !content}]" @click="toPublic">{{publicEnd ? '发表' : '发表中...'}}</span>
    </div> -->
  </div>
</template>
<script type="text/javascript">
  import { WlbHeader } from '../components'
  export default {
    data () {
      return {
        active: true,
        title: '',
        content: '',
        num: 500,
        publicEnd: true
      }
    },
    computed: {
      boardName () {
        return this.$route.params.name
      }
    },
    created () {
      if (!this.$route.params.id) {
        this.$router.replace({
          name: 'index'
        })
      }
    },
    mounted  () {
    },
    methods: {
      checkType (type) {
        this.active = type
        console.log(this.active)
      },
      toPublic () {
        this.content = this.content.toString()
        if (this.publicEnd === false || this.content === '') {
          return
        }
        this.publicEnd = false
        this.$http({
          url: this.$api.api_list,
          method: 'BbsPublishThread',
          params: [{
            type_id: this.$route.params.id,
            title: '网利社区',
            content: this.content
          }]
        }).then((res) => {
          this.publicEnd = true
          this.content = ''
          if (res.data.result) {
            this.$rulemodal.show({ title: '系统提示', content: '帖子发布成功，已提交后台审核', style: 'text-align: center' })
          }
        })
      }
    },
    watch: {
      content () {
        var len = this.content.length
        this.num = 500 - len > 0 ? 500 - len : 0
        this.content = this.content.substring(0, 500)
      }
    },
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .view
    background: #fff
    width: 100%
    height: 100%
    .rightButton
      font-family: PingFangSC-Regular
      font-size: .26rem
      color: #FFFFFF
      letter-spacing: 0
    .disable
      color: #ccc
    .topic-text-title
      width: 6.9rem
      padding: 0 .3rem
      height: 1rem
      border: 0
      font-family: PingFangSC-Light
      font-size: .36rem
      color: #9B9B9B
    .line
      border-bottom: 1px solid #E5E5E5
    .topic-text-content
      display: block
      width: 6.9rem
      border: 0
      padding: 0 .3rem
      margin: .3rem 0
      font-family: PingFangSC-Light
      font-size: .3rem
      color: #9B9B9B
      line-height: .42rem
      min-height: 2.7rem
      overflow-y: visible
    .residue
      padding: 0 .3rem .3rem
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #9B9B9B
      line-height: .33rem
      text-align: right
      &::after
        content: ''
        display: block
        margin-bottom: .8rem
    .topic-edit-foot
      width: 100%
      position: fixed
      bottom: 0
      background: #F5F9FC
      border: 1px solid #A1AFB4
      padding: 0 .3rem
      height: .8rem
      box-sizing: border-box
      z-index: 1
      &::before
        display: block
        content: ''
      .topic-edit-type
        width: 2.36rem
        height: .52rem
        border: 1px solid #D7D7D7
        border-radius: 100px
        overflow: hidden
        float: left
        margin-top: .12rem
        span
          float: left
          width: 1.18rem
          text-align: center
          height: .52rem
          line-height: .52rem
          color: #12A5E2
          font-family: PingFangSC-Regular
          font-size: .24rem
        .active
          background-color: #12A5E2
          color: #FFFFFF
      .topic-edit-sub
        float: right
        line-height: .8rem
        font-family: PingFangSC-Regular;
        font-size: .3rem
        color: #12A5E2
        letter-spacing: 0
</style>
