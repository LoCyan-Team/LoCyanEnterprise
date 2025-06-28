<template>
    <div>
        <div
            style="background: rgb(var(--arcoblue-5)); height: 60vh; display: flex; justify-content: center; align-items: center;"
            :key="1">
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
            <div>
                <a-typography-title :heading="2" :key="2">
                    这是什么
                </a-typography-title>
                <ProductInformation />
            </div>
            <div>
                <a-typography-title :heading="2" :key="3">
                    服务特色
                </a-typography-title>
                <ProductFeature />
            </div>
            <div>
                <a-typography-title :heading="2" :key="4">
                    服务价格
                </a-typography-title>
                <ServicePrice />
            </div>
            <div>
                <a-typography-title :heading="2" :key="5">
                    联系销售
                </a-typography-title>
                <Contact />
            </div>
        </a-space>
    </div>
</template>

<script setup>
</script>