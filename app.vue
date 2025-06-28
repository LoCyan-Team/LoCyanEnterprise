<template>
    <a-layout class="full-layout">
        <a-layout-header class="layout-header">
            <Header></Header>
        </a-layout-header>
        <a-layout class="content-layout">
            <a-layout-content class="layout-content">
                <nuxt-page />
            </a-layout-content>
        </a-layout>
        <a-layout-footer class="layout-footer">
            <Footer></Footer>
        </a-layout-footer>
    </a-layout>
</template>
<script setup>
onMounted(() => {
    useHead({
        bodyAttrs: {
            'arco-theme': 'dark'
        }
    })
})
</script>

<style scoped>
.full-layout {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
}

.layout-header {
    flex-shrink: 0;
}

.content-layout {
    flex: 1;
    min-height: 0;
}

.layout-content {
    overflow: auto;
}

.layout-footer {
    flex-shrink: 0;
    padding: 16px;
}
</style>

<style>
/* 全局样式确保body和html高度正确 */
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

body[arco-theme='dark'] {
    --color-bg: #1a1a1a;
    --color-text: rgba(255, 255, 255, 0.85);
    background: var(--color-bg);
    color: var(--color-text);
    color-scheme: dark;
}

.arco-icon {
    font-size: 36px;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>