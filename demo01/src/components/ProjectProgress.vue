<template>
	<div>
        <div class="block">
            <div class="radio">
                排序：
                <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
                </el-radio-group>
            </div>

            <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="70" status="warning"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
 <el-divider>进度模板块化</el-divider>
        <div class="block">
            <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
            </el-timeline-item>
            </el-timeline>
            </div>
    <el-divider>进度模板块化</el-divider>
        <el-card class="box-card">
            <h2>正在进行中</h2>

            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
                <el-progress v-if="o==1" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                <el-progress v-if="o==2" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress v-if="o==3" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress v-if="o==4" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
            </div>
            
            
        </el-card>
        <el-card class="box-card">
            <h2>已完成</h2>
            <div v-for="o in 4" :key="o" class="text item" >
                {{'列表内容 ' + o }} <el-progress v-if="o==1" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                <el-progress v-if="o==2" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress v-if="o==3" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress v-if="o==4" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
            </div>
        </el-card>
        <el-card class="box-card ">
            <h2>拖延</h2>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }} <el-progress v-if="o==1" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                <el-progress v-if="o==2" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress v-if="o==3" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress v-if="o==4" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
            </div>
        </el-card>
    </div>
</template>

<script>

    export default {
        name: "PP",
        data() {
            return {
                reverse: true,
                activities: [{
                content: '活动按期开始',
                timestamp: '2018-04-15'
                }, {
                content: '通过审核',
                timestamp: '2018-04-13'
                }, {
                content: '创建成功',
                timestamp: '2018-04-11'
                }]
            }
        },
        components: {
        },
        methods: {
        },
        mounted() {

        },
        created(){
        }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-table .primary-row {
        background: #409EFF;
    }

    .el-table .info-row {
        background: #909399;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

.text {
    font-size: 14px;
  }


  .box-card {
    width: 480px;
    display:inline-block;
  }

</style>