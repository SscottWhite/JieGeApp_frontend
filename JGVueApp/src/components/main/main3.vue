<script setup>
    import { onMounted, ref } from 'vue';

    const imgList = ref([
        {
            children: [
                'https://img0.baidu.com/it/u=3437608980,3764577023&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=159658854,529024301&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=1455054759,3989649687&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
                'https://img1.baidu.com/it/u=247347551,2294790425&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=2786686805,1164056483&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=4178062836,2849871316&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img2.baidu.com/it/u=3849022039,636137377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=374731875,3495315356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
            ]
        },
        {
            children: [
                'https://img1.baidu.com/it/u=1396617261,3982093786&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=247347551,2294790425&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=3849022039,636137377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img0.baidu.com/it/u=3061354181,1774842491&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=374731875,3495315356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=1455054759,3989649687&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475',
                'https://img1.baidu.com/it/u=159658854,529024301&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=4178062836,2849871316&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
            ]
        },
        {
            children: [
                'https://img0.baidu.com/it/u=3061354181,1774842491&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=1396617261,3982093786&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
                'https://img1.baidu.com/it/u=247347551,2294790425&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=3849022039,636137377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=4178062836,2849871316&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img1.baidu.com/it/u=369109427,3732995194&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img1.baidu.com/it/u=374731875,3495315356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=1455054759,3989649687&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
            ]
        },
        {
            children: [
                'https://img0.baidu.com/it/u=2181756197,910882438&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380',
                'https://img1.baidu.com/it/u=159658854,529024301&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=1396617261,3982093786&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=247347551,2294790425&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=3849022039,636137377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img1.baidu.com/it/u=4178062836,2849871316&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img1.baidu.com/it/u=369109427,3732995194&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
                'https://img1.baidu.com/it/u=374731875,3495315356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                'https://img2.baidu.com/it/u=1455054759,3989649687&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475',
                'https://img0.baidu.com/it/u=1407819487,3489675233&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
            ]
        }
    ])

    onMounted(() => {
        const itemList = document.querySelectorAll('.item');
        // 鼠标移入移出事件
        for (const item of itemList) {
            // 鼠标移入
            item.addEventListener('mouseenter', function(e) {
                let it = e.target;
                it.classList.add('bigger');
                // 当前元素索引
                let index = [...it.parentNode.children].indexOf(it);
                // 当前元素父级的索引
                let parentIndex = [...it.parentNode.parentNode.children].indexOf(it.parentNode);
                if(parentIndex % 2 === 1){
                    index = index - 1;
                }
                // 左右元素添加类名
                if(it.previousElementSibling){
                    it.previousElementSibling.classList.add('smaller');
                }
                if(it.nextElementSibling){
                    it.nextElementSibling.classList.add('smaller');
                }
                // 上一排元素添加类名
                if(it.parentNode.previousElementSibling){
                    if(it.parentNode.previousElementSibling.children[index]){
                        it.parentNode.previousElementSibling.children[index].classList.add('smaller');
                    }
                    if(it.parentNode.previousElementSibling.children[index+1]){
                        it.parentNode.previousElementSibling.children[index+1].classList.add('smaller');
                    }
                }
                // 下一排元素添加类名
                if(it.parentNode.nextElementSibling){
                    if(it.parentNode.nextElementSibling.children[index]){
                        it.parentNode.nextElementSibling.children[index].classList.add('smaller');
                    }
                    if(it.parentNode.nextElementSibling.children[index+1]){
                        it.parentNode.nextElementSibling.children[index+1].classList.add('smaller');
                    }
                }
            });
            // 鼠标移出
            item.addEventListener('mouseleave', function(e) {
                let it = e.target;
                e.target.classList.remove('bigger');
                // 当前元素索引
                let index = [...it.parentNode.children].indexOf(it);
                // 当前元素父级的索引
                let parentIndex = [...it.parentNode.parentNode.children].indexOf(it.parentNode);
                if(parentIndex % 2 === 1){
                    index = index - 1;
                }
                // 左右元素添加类名
                if(it.previousElementSibling){
                    it.previousElementSibling.classList.remove('smaller');
                }
                if(it.nextElementSibling){
                    it.nextElementSibling.classList.remove('smaller');
                }
                // 上一排元素添加类名
                if(it.parentNode.previousElementSibling){
                    if(it.parentNode.previousElementSibling.children[index]){
                        it.parentNode.previousElementSibling.children[index].classList.remove('smaller');
                    }
                    if(it.parentNode.previousElementSibling.children[index+1]){
                        it.parentNode.previousElementSibling.children[index+1].classList.remove('smaller');
                    }
                }
                //下一排元素添加类名
                if(it.parentNode.nextElementSibling){
                    if(it.parentNode.nextElementSibling.children[index]){
                        it.parentNode.nextElementSibling.children[index].classList.remove('smaller');
                    }
                    if(it.parentNode.nextElementSibling.children[index+1]){
                        it.parentNode.nextElementSibling.children[index+1].classList.remove('smaller');
                    }
                }
            });
        }
    })
</script>

<template>
  <div class="container">
    <div class="line" v-for="(items, index) in imgList" :key="index">
        <div class="item" v-for="it in items.children" :key="it">
            <img :src="it" alt="" />
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$n: 9;
$size: 100vw / $n;

.container {
    overflow: hidden;
    padding: 30px 0;
    .line {
        display: flex;
        &:nth-child(even) {
            transform: translateX(-$size / 2);
        }
        &:nth-child(n + 2) {
            margin-top: -$size / 6;
        }
        .item {
            width: $size;
            height: $size;
            transition: all 0.3s ease;
            img {
                flex-shrink: 0;
                width: $size;
                height: $size;
                outline: 1px solid #1890ff;
                clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
            }
        } 
        .bigger {
            transform: scale(1.2);
        }
        .smaller {
            transform: scale(0.8);
        }
    }
}
</style>