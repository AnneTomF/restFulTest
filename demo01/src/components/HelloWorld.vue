<template>
<div>
{{"2017/11/14 10:46:56"}}
<el-tag>标签一</el-tag>
   <router-link to="/ProjectProgress">ProjectProgress</router-link>
   <input :selfUpdate="true" v-model="tableData[1].name" ></input>
  <el-table
      :data="tableData"
        style="width: 100%"
        @sort-change="sortChange"
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
        sortChange(column, key, order) {
          
          //获取字段名称和排序类型

          var fieldName = column.prop;
          this.switchfield(fieldName);
          var sortingType = column.order;
          if(sortingType==="ascending"){
            console.log("升序",sortingType)
          }else if(sortingType==="descending")
          {
            console.log("降序",sortingType)
          }
          else
          {
            console.log("null",sortingType)
          }
        },
        switchfield(name){
            switch(name) {
              case "cid.class_StartName":
                  console.log("class_StartName")
                  break;
              case "2":
                  console.log("2")
                  break;
              default:
                  console.log("default")
            } 
        }
    },
    created(){
       let  nameq = this.tableData[0].name;
      Object.defineProperty(this.tableData[0], 'name', {
        set: function (value) {
          nameq = value;
          console.log('你取了一个书名叫做' + value);
        },
        get: function () {
          return '《' + nameq + '》'
        }
      })
      console.log("tableData",nameq)
      var obj = {};
      var initValue = 'hello';
      Object.defineProperty(obj,"newKey",{
          get:function (){
              //当获取值的时候触发的函数
              return initValue;    
          },
          set:function (value){
              //当设置值的时候触发的函数,设置的新值通过参数value拿到
              initValue = value;
          }
      });
      //获取值
      console.log( obj.newKey );  //hello

      //设置值
      obj.newKey = 'change value';

      console.log( obj.newKey ); //change value



      //api
      //为给定 ID 的 weather 创建请求
      // axios.get('https://localhost:44313/weatherforecast/5')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      // 为给定 ID 的 weather 创建请求
      // axios.post('https://localhost:44313/weatherforecast', {
      //   id: 10,
      //   name: 'postName',
      //   className: 'postClass'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // // 为给定 ID 的 weather 创建请求
      // axios.put('https://localhost:44313/weatherforecast/5',
      // {
      //   id: 10,
      //   name: 'postName',
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // // 为给定 ID 的 weather 创建请求
      // axios.delete('https://localhost:44313/weatherforecast/5')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      // // 为给定 ID 的 weather 创建请求
      axios.patch('https://localhost:44313/weatherforecast/5',
      {
        name: "postName"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
