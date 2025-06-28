<template>
    <a-row class="grid-demo">
        <a-col :xs="24" :xl="8">
            <a-card class="card">
                <a-typography-title :heading="4">
                    夏沫花火zzz / Muska_Ami
                </a-typography-title>
                <a-typography-title :heading="6">
                    站长
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: 'E-Mail',
                        value: 'ami@muska.zip',
                    },
                    {
                        label: 'QQ',
                        value: '2549619802',
                    }
                ]" size="medium" title="联系方式" :column="1" />
            </a-card>
        </a-col>
        <a-col :xs="24" :xl="8">
            <a-card class="card">
                <a-typography-title :heading="4">
                    Daiyangcheng
                </a-typography-title>
                <a-typography-title :heading="6">
                    副站长
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: 'E-Mail',
                        value: 'daiyangcheng@locyan.cn',
                    },
                    {
                        label: 'QQ',
                        value: '3143105972',
                    }
                ]" size="medium" title="联系方式" :column="1" />
            </a-card>
        </a-col>
                <a-col :xs="24" :xl="8">
            <a-card class="card">
                <a-typography-title :heading="4">
                    筱烷 / Shiroiame-Kusu
                </a-typography-title>
                <a-typography-title :heading="6">
                    技术总监
                </a-typography-title>
                <a-divider />
                <a-descriptions style="margin-top: 20px" :data="[
                    {
                        label: 'E-Mail',
                        value: 'kusu@kusu.moe',
                    },
                    {
                        label: 'QQ',
                        value: '2024986092',
                    }
                ]" size="medium" title="联系方式" :column="1" />
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