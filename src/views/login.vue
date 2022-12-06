<template>
    <a-layout class="login-wrapper">
        <!-- <a-layout-header>
        </a-layout-header> -->
        <a-layout-content>
            <div class="icarus-login">
                <div class="icarus-title">Icarus-Testing</div>
                <a-form :model="formState" name="normal_login" autocomplete="off" @finish="onFinish"
                    @finishFailed="onFinishFailed" class="login-form">
                    <a-form-item label="Username" name="username"
                        :rules="[{ required: true, message: 'Please input your username!' }]">
                        <a-input v-model:value="formState.username" placeholder="username">
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item label="Password" name="password"
                        :rules="[{ required: true, message: 'Please input your password!' }]">
                        <a-input-password v-model:value="formState.password" placeholder="password">
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item>
                        <a-form-item name="remember" no-style>
                            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                        </a-form-item>
                        <a class="login-form-forgot" href="">Forgot password</a>
                    </a-form-item>
                    <a-form-item>
                        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                            Log in
                        </a-button>
                        Or
                        <a href="">register now!</a>
                    </a-form-item>
                </a-form>
            </div>
        </a-layout-content>
        <!-- <a-layout-footer style="text-align: center">
        </a-layout-footer> -->
    </a-layout>
</template>
<script>
import { reactive, defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

const router = useRouter();

// interface FormState {
//     username: string;
//     password: string;
//     remember: true
// }

export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
    },
    setup() {
        const formState = reactive({
            username: '',
            password: '',
            remember: true
        });
        const onFinish = (values) => {
            console.log('Success: ', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed: ', errorInfo);
        };
        const disabled = computed(() => {
            return !(formState.username && formState.password)
        })
        return {
            formState,
            onFinish,
            onFinishFailed,
            disabled
        };
    },
});
</script>
<style scoped>
.login-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.png);
    background-size: 100%;
}

.icarus-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    margin: -190px 0 0 -250px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.icarus-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}

.login-form {
    padding: 30px;
    max-width: 500px;
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
</style>