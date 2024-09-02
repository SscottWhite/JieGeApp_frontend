<template>
    <div class="container">
      <!-- 方块盒子 -->
      <div class="item" ref="cardRef1"></div>
      <!-- 方块盒子 -->
      <div class="item" ref="cardRef2"></div>
      <!-- 方块盒子 -->
      <div class="item" ref="cardRef3"></div>
    </div>
  </template>
  
  <script setup lang="ts">

  //https://mp.weixin.qq.com/s?chksm=ce45fe8ff9327799626867094cc50518a04f49f0cdd5ebd3594a0f18bfe8b91366c03bd1b2e6&exptype=unsubscribed_card_recommend_article_u2i_mainprocess_coarse_sort_tlfeeds&ranksessionid=1716433011_3&scene=169&mid=2247494430&sn=9e5e7f39fc1f1b8020868582d863ae7b&idx=1&__biz=Mzg2NjY2NTcyNg%3D%3D&sessionid=1716433011&subscene=200&clicktime=1716433243&enterid=1716433243&flutter_pos=24&biz_enter_id=5&ascene=0&devicetype=iOS17.4.1&version=1800312e&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&countrycode=CN&fontScale=100&exportkey=n_ChQIAhIQn%2FNT9zkoXkJkn399s7lEhBLZAQIE97dBBAEAAAAAABLuIjSZAmEAAAAOpnltbLcz9gKNyK89dVj0AyDmpP%2BmEQ25BCXie4VETcjnCij0FxSYIYNSplBQQTbCJ0z0B9jKQEvkMoISYQbLJlgndxRz2OCB5htTXvbMTniuRLLsF3VEm5LNPlzdtHWD2ongcKBuMjl2rGFKB57NwRkwdIvRi2C1l56s35be6BFhXHcWPKmkg7QAgNxLZa%2FHDutYefRPw0QHK4WfpS%2FrrDRHgosN3ipXhNJoW6HskKfbjJp2udbpDEGL3rXs%2BKoziko%3D&pass_ticket=b8nJWgee7uryAd8FX6JwDi%2FBQCWuFzdcbNPOH5AqjWfDvvnqdeEhxsb%2BYF480tc4&wx_header=3
  // import { useLightCard } from './use-light-card';
  
  // const { cardRef: cardRef1 } = useLightCard();
  // const { cardRef: cardRef2 } = useLightCard({
  //   light: {
  //     color: '#ffffff',
  //     width: 100,
  //   },
  // });
  // const { cardRef: cardRef3 } = useLightCard({
  //   light: {
  //     color: 'yellow',
  //   },
  // });
  </script>
  
  <style scoped>
  .container {
    background: black;
    width: 100%;
    height: 100%;
    padding: 200px;
    display: flex;
    justify-content: space-between;
  

  }

  .container.item {
    position: relative;
      width: 125px;
      height: 125px;
      background: #1c1c1f;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
  </style>
  