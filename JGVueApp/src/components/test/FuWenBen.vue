<template>
    <div class="m-4">
      <div class="mb-4">替换富文本的内容为 Vue 组件</div>
      <div>
        <el-input
          type="textarea"
          v-model="content"
          autosize="{minRows:10, maxRows:20}"
          disabled
        ></el-input>
      </div>
  
      <div class="rich-content" v-html="content"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, h, render } from 'vue'
  import { ElImage } from 'element-plus'
  
  const content = ref(`
  <div>
    <p>海洋 1</p>
    <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg" width="800"/>
    <p>海洋 2</p>
    <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg" width="800"/>
    <p>海洋 3</p>
    <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg" width="800"/>
  </div>
  `)
  
  onMounted(() => {
    const els = document
      .querySelector('.rich-content')
      ?.querySelectorAll('img') as NodeListOf<HTMLImageElement>
  
    if (!els || els.length === 0) return
  
    els?.forEach((el) => {
      const divElement = document.createElement('div')
      el.after(divElement)
  
      const imgSrc = el.getAttribute('src')
      if (imgSrc) {
        const vNode = h(ElImage, {
          src: imgSrc,
          style: { width: el.getAttribute('width') + 'px' },
          lazy: true,
          previewSrcList: [imgSrc]
        })
        render(vNode, divElement)
        el.remove()
      }
    })
  })
  </script>