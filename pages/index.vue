<template>
    <div>
        <div
            style="background: rgb(var(--arcoblue-5)); height: 60vh; display: flex; justify-content: center; align-items: center;"
            :key="1"
            class="scroll-reveal-item">
            <Typography>
                <a-space direction="vertical" fill style="text-align: center;">
                    <a-typography-title>
                        LoCyanFrp Enterprise
                    </a-typography-title>
                    <a-typography-title :heading="4" >
                        乐青映射企业级解决方案
                    </a-typography-title>
                </a-space>
            </Typography>
        </div>
        <a-space direction="vertical"
            style="display: flex; justify-content: center; align-items: center; text-align: center; padding-bottom: 5vh; min-height: 100vh">
            <div class="scroll-reveal-item">
                <a-typography-title :heading="2" :key="2">
                    这是什么
                </a-typography-title>
                <ProductInformation />
            </div>
            <div class="scroll-reveal-item">
                <a-typography-title :heading="2" :key="3">
                    服务特色
                </a-typography-title>
                <ProductFeature />
            </div>
            <div class="scroll-reveal-item">
                <a-typography-title :heading="2" :key="4">
                    服务价格
                </a-typography-title>
                <ServicePrice />
            </div>
            <div class="scroll-reveal-item">
                <a-typography-title :heading="2" :key="5">
                    联系销售
                </a-typography-title>
                <Contact />
            </div>
        </a-space>
    </div>
</template>

<script setup>

onMounted(() => {
  if (import.meta.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-reveal-item').forEach(el => {
      observer.observe(el);
    });
  }
});

</script>

<style>
.scroll-reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.2s, transform 1.2s;
}

.scroll-reveal-item.reveal {
  opacity: 1;
  transform: translateY(0);
}
</style>