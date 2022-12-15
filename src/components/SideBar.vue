<template>
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1" title="Dashboard">
                <!-- <router-link to="/dashboard"></router-link> -->
                <home-outlined />
                <span>Dashboard</span>
            </a-menu-item>
            <a-menu-item key="2" title="Schedule">
                <!-- <router-link to="/schedule"></router-link> -->
                <schedule-outlined />
                <span>Schedule</span>
            </a-menu-item>
            <a-menu-item key="3" title="Execute">
                <!-- <router-link to="/execute"></router-link> -->
                <code-outlined />
                <span>Execute</span>
            </a-menu-item>
            <a-menu-item key="4" title="Management">
                <ClusterOutlined />
                <span>Management</span>
            </a-menu-item>
            <a-menu-item key="5" title="CI/CD">
                <!-- <router-link to="/debug"></router-link> -->
                <CiCircleOutlined />
                <span>CI/CD</span>
            </a-menu-item>
            <a-menu-item key="6" title="Analystic">
                <!-- <router-link to="/analystic"></router-link> -->
                <bar-chart-outlined />
                <span>Analystic</span>
            </a-menu-item>
            <a-menu-item key="7" title="Alert">
                <!-- <router-link to="/framework"></router-link> -->
                <AlertOutlined />
                <span>Alert</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
import {
    DashOutlined, HomeOutlined, ScheduleOutlined, CodeOutlined,
    BugOutlined, BarChartOutlined, SettingOutlined, UserOutlined,
    MenuUnfoldOutlined, MenuFoldOutlined, AlertOutlined, CiCircleOutlined,
    ClusterOutlined
} from '@ant-design/icons-vue';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    components: {
        DashOutlined,
        HomeOutlined,
        ScheduleOutlined,
        CodeOutlined,
        BugOutlined,
        BarChartOutlined,
        SettingOutlined,
        UserOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        AlertOutlined,
        CiCircleOutlined,
        ClusterOutlined,
    },
    setup() {
        const collapsed = inject("collapsed");
        const selectedKeys = inject("selectedKeys");
        return {
            selectedKeys,
            collapsed
        }
    },
})
</script>
<style scoped>
.content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right, #f5f5f5, #e5e5e5);
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    margin-top: 32px;
}
</style>
