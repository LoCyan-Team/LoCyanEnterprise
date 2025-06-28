<template>
    <a-row class="grid-demo">
        <a-col :xs=24 :xl="8">
            <a-card class="card" title="代部署 GoFrp">
                <a-space>
                    <a-typography-title :heading="3">
                        ￥10
                    </a-typography-title>
                    <a-typography-title :heading="6" style="padding-top: 15px;">
                        / 一次性
                    </a-typography-title>
                </a-space>
                <a-typography-title :heading="6">
                    适合个人使用
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: '要求',
                        value: '需要自行提供服务器',
                    },
                    {
                        label: '地区',
                        value: '取决于您提供的服务器',
                    },
                    {
                        label: '速率',
                        value: '取决于您提供服务器的上下行速率的最小值',
                    },
                    {
                        label: '隧道数',
                        value: '不限制',
                    },
                    {
                        label: '流量',
                        value: '取决于您提供的服务器',
                    },
                    {
                        label: '保障',
                        value: '提供后续 30 天的技术支持',
                    }
                ]" size="medium" title="具体配置" :column="1" />
            </a-card>
        </a-col>
        <a-col :xs=24 :xl="8">
            <a-card class="card" title="初级套餐">
                <a-space>
                    <a-typography-title :heading="3">
                        ￥500
                    </a-typography-title>
                    <a-typography-title :heading="6" style="padding-top: 15px;">
                        / 月
                    </a-typography-title>
                </a-space>
                <a-typography-title :heading="6">
                    适合中小型企业/社会团体使用
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: '要求',
                        value: '不需要自行提供服务器',
                    },
                    {
                        label: '地区',
                        value: '华北 / 东北 / 西北 / 华东 / 中南 / 西南',
                    },
                    {
                        label: '速率',
                        value: '50Mbps+',
                    },
                    {
                        label: '隧道数',
                        value: '不限制',
                    },
                    {
                        label: '流量',
                        value: '不限制',
                    },
                    {
                        label: '保障',
                        value: '提供后续 30 天的技术支持, 高 SLA',
                    }
                ]" size="medium" title="具体配置" :column="1" />
            </a-card>
        </a-col>
        <a-col :xs=24 :xl="8">
            <a-card class="card" title="定制套餐">
                <a-space>
                    <a-typography-title :heading="3">
                        联系定制
                    </a-typography-title>
                    <a-typography-title :heading="6" style="padding-top: 15px;">
                        / 月
                    </a-typography-title>
                </a-space>
                <a-typography-title :heading="6">
                    适合大型企业使用
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: '要求',
                        value: '不需要自行提供服务器',
                    },
                    {
                        label: '地区',
                        value: '华北 / 东北 / 西北 / 华东 / 中南 / 西南',
                    },
                    {
                        label: '速率',
                        value: '联系定制',
                    },
                    {
                        label: '隧道数',
                        value: '不限制',
                    },
                    {
                        label: '流量',
                        value: '不限制',
                    },
                    {
                        label: '保障',
                        value: '提供后续 30 天的技术支持, 高 SLA',
                    }
                ]" size="medium" title="具体配置" :column="1" />
            </a-card>
        </a-col>
    </a-row>
</template>

<style scoped>
.grid-demo {
    width: 70vw;
}

.grid-demo .arco-col {
    height: auto;
    line-height: auto;
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