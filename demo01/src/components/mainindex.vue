<template>
	<div style="height:100%">

    <el-divider>进度模板块化</el-divider>
        <el-card class="box-card">
            <h2>泳道图</h2>

           
            进行中
            <el-progress  :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
            未开始
            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            已发布
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            舍弃
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </el-card>
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

        <div class="demo" style="width:1000px;height:600px;">
            <div class="chart-title"><i class="completed">已完成</i><i class="timeout">超时</i><i class="to-be-completed">待完成</i></div>
            <div id="gantt-chart"></div>
        </div>

    </div>
</template>

<script>
    import echarts from 'echarts'

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
                ,
                ganttChart: null,
                 chartData: [
                {
                    name: '可熊-库内',
                    start: '2020-02-10',
                    end: '2020-02-15',
                    status: 1 // 1 待完成 2 已完成 3 超时
                },
                {
                    name: '游梦-退仓退供接收-计划',
                    start: '2020-02-03',
                    end: '2020-02-05',
                    status: 2
                },
                {
                    name: '李坤-退货出库单页-计划',
                    start: '2020-02-02',
                    end: '2020-02-09',
                    status: 3
                },
                {
                    name: '苍岳-合批+合波+占用-计划',
                    start: '2020-02-03',
                    end: '2020-02-17',
                    status: 1
                },
                {
                    name: '善博-拣货单生成-计划',
                    start: '2020-02-03',
                    end: '2020-02-17',
                    status: 1
                },
                {
                    name: '唐汇波-拣货单获取-实操',
                    start: '2020-02-04',
                    end: '2020-02-05',
                    status: 3
                },
                {
                    name: '唐汇波-拣货单批量提交-实操',
                    start: '2020-02-05',
                    end: '2020-02-17',
                    status: 3
                },
                {
                    name: '宸斐-发运',
                    start: '2020-02-03',
                    end: '2020-02-10',
                    status: 2
                },
                {
                    name: '联调',
                    start: '2020-02-17',
                    end: '2020-02-23',
                    status: 2
                },
                {
                    name: '测试',
                    start: '2020-02-24',
                    end: '2020-03-10',
                    status: 1
                },
                {
                    name: '灰度',
                    start: '2020-02-29',
                    end: '2020-03-11',
                    status: 1
                },
                {
                    name: '发布',
                    start: '2020-03-10',
                    end: '2020-03-12',
                    status: 1
                }
                ],

            }
        },
        components: {
        },
        methods: {
                initChart () {
                this.ganttChart = echarts.init(document.getElementById('gantt-chart'))
                const _self = this
                const chartOption = {
                    title: {
                        text: '项目进度表',
                        left: 10
                    },
                    grid: {
                        containLabel: true,
                        left: 20
                    },
                    xAxis: {
                        type: 'time'
                    },
                    yAxis: {
                        data: this.chartData.map(item => item.name)
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (params) {
                            // var res = params[0].name + '</br>'
                            var res = '节点周期:' + '</br>'
                            var date0 = params[0].data
                            var date1 = params[1].data
                            // date0 = date0.getFullYear() + '-' + (date0.getMonth() + 1) + '-' + date0.getDate()
                            // date1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate()
                            res += date0 + '-' + date1 + '</br>'
                            // console.log(params[0])
                            return res
                        }
                    },
                    series: [
                        {
                            name: '实际开始时间',
                            type: 'bar',
                            stack: 'timeout',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            lineStyle: {},
                            data: this.chartData.map(item => item.start)
                        },
                        {
                            name: '超时',
                            type: 'bar',
                            stack: 'timeout',
                            barWidth: 14, // 柱宽度
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 25, // 柱圆角
                                    color: function (params) {
                                        let color = ''
                                        // var colorList = ['#3E84E9','#c23531','#d4cece']; // 超时, 已完成, 待完成
                                        var item = _self.chartData.filter(item => { return item.name === params.name })
                                        var status = item && item[0] && item[0].status
                                        // console.log('====', status)
                                        color = status === 1 ? '#d4cece' : (status === 2 ? '#3E84E9' : '#c23531')
                                        return color
                                    }
                                }
                            },
                            data: this.chartData.map(item => item.end)
                        }
                    ]
                }
                this.ganttChart.setOption(chartOption) // 第二个参数：true: 是否和之前设置的option进行合并，true为不合并，默认为false:合并
                this.resizeCharts()
            },
            resizeCharts () {
                this.ganttChart && this.ganttChart.resize()
            },
            destroyed () {
                window.removeEventListener('resize', this.resizeCharts) // 销毁事件
            }
        },
        mounted() {
                // window.addEventListener(
                // 'resize',
                // window._.debounce(() => {
                //     this.resizeCharts()
                // }, 100)
                // )
                this.$nextTick(() => {
                    this.initChart()
                })
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
    width: 400px;
    height:50%;
    display:inline-block;
  }
  .demo{
    padding: 5px 15px;
    position: relative;}
    .chart-title {
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        i {
            font-style: normal;
            padding-right: 20px;
        }
        i:before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 15px;
            border-radius: 5px;
            vertical-align: bottom;
            margin-right: 3px;
            background-color: #3e84e9;
        }
        i.to-be-completed:before {
            background-color: #d4cece;
        }
        i.timeout:before {
            background-color: #c23531;
        }
    }
    #gantt-chart {
        margin: 1em auto;
        height: 500px;
        width: 100%;
    }


</style>