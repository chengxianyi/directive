<template>
    <div class="hello">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-monitor="{name:'查询事件',params:formInline}">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: 'demo',
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        created() {
        },
        methods: {
            handleClick() {
                // console.log("点击")
            },
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style scoped>
    .listItem {
        margin-right: 10px;
    }
</style>
