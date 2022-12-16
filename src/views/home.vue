<template>
    <div>
        <a-layout class="wrapper">
            <Sidebar />
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-row>
                        <a-col :span="1">
                            <menu-unfold-outlined v-if="collapsed" class="trigger"
                                @click="() => (collapsed = !collapsed)" />
                            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                        </a-col>
                        <a-col :span="1" :offset="22">
                            <a-dropdown>
                                <a-avatar :size="{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40, xxl: 48 }">
                                    <template #icon>
                                        <UserOutlined />
                                    </template>
                                </a-avatar>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item key="profile">
                                            <UserOutlined />
                                            Profile
                                        </a-menu-item>
                                        <a-menu-item key="setting">
                                            <SettingOutlined />
                                            Setting
                                        </a-menu-item>
                                        <a-menu-item key="logout">
                                            <LogoutOutlined />
                                            Logout
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </a-col>
                    </a-row>
                </a-layout-header>
                <a-layout-content class="content">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import { defineComponent, ref, provide } from 'vue';
import {
    MenuUnfoldOutlined, MenuFoldOutlined, AntDesignOutlined, UserOutlined,
    SettingOutlined, LogoutOutlined
} from '@ant-design/icons-vue';
import Sidebar from '../components/sideBar.vue'
export default defineComponent({
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        AntDesignOutlined,
        Sidebar,
        UserOutlined,
        SettingOutlined,
        LogoutOutlined,
    },
    setup() {
        const collapsed = ref(false);
        const selectedKeys = ref(['1']);
        provide('collapsed', collapsed)
        provide('selectedKeys', selectedKeys)
        return {
            collapsed
        }
    }
})
</script>
<style scoped>
@media (prefer-color-scheme: dark) {
    body {
        background: #333;
        color: white;
    }
}

@media (prefer-color-scheme: light) {
    body {
        background: #ddd;
        color: white;
    }
}

.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

header {
    -webkit-app-region: drag
}


.content {
    padding: 1px;
    background: rgba(255, 255, 255, 0.5);
}

.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}

:deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>