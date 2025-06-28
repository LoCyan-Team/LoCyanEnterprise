<template>
    <a-row class="grid-demo">
        <a-col :xs="24" :xl="12">
            <a-card class="card" hoverable>
                <a-space>
                    <icon-check />
                    优秀的服务品质，拥有三年内网穿透行业服务经验，用户超过三万，解决方案获得普遍认证
                </a-space>
            </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
            <a-card class="card" hoverable>
                <a-space>
                    <icon-lock />
                    高安全性，满足企业 / 社会团体对数据传输安全的需求，节点自主部署，防止流量监控
                </a-space>
            </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
            <a-card class="card" hoverable>
                <a-space>
                    <icon-swap />
                    数据双向传输加密，支持上下行速度限制
                </a-space>
            </a-card>
        </a-col>
        <a-col :xs="24" :xl="12">
            <a-card class="card" hoverable>
                <a-space>
                    <icon-customer-service />
                    专业的服务支持，深耕 Frp 行业，拥有多种情况下的故障处理经验
                </a-space>
            </a-card>
        </a-col>
    </a-row>
</template>
<style scoped>
.grid-demo {
    width: 70vw;
}

@media (min-width: 1200px) {
    .grid-demo {
        width: 40vw;
    }
}

.grid-demo .arco-col {
    height: auto;
    line-height: 25px;
    color: var(--color-white);
    text-align: center;
    padding: 10px;
}

.card {
    font-size: 14px;
    transition-property: all;
}

.card:hover {
    transform: translateY(-4px);
}
</style>
<script setup>
</script>