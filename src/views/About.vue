<!--
 * @Descripttion: 说明
 * @version: V1.0
 * @Author: GaoWei
 * @Date: 2021-07-01 18:20:04
 * @LastEditors: GaoWei
 * @LastEditTime: 2021-07-05 15:07:38
-->
<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handlerClick">请求{{}}</button>
    </div>
</template>
<script>
import { get, post, put, del } from '@/axios/request'
import tag from '@/axios/texst'
import { reactive, getCurrentInstance, onMounted } from "vue";
export default {
    data() {
        return {

        }
    },
    setup() {
        
    },
    methods: {
        handlerClick: function () {
            console.log(12312312);
            tag('dudududu');
            // this.$post('/auth/login', {
            //     password: "123",
            //     userName: "15884568565",
            //     verifyCode: ""
            // }).then((response) => {
            //     console.log(response);
            // }).catch((error) => {
            //     console.log(error)
            // })

        }
    }
}
</script>
