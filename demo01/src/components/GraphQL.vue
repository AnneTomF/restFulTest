<template>
	
</template>

<script>
var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

//构建schema,定义查询语句的类型
var schema = buildSchema(`
    type Account{
        name: String
        age: Int
        sex: String
    }
    type Query{
        hello: String
        account: Account
    }
`)
//定义查询所需要的resolver
var root = {
    hello:()=>{
        return 'hello world';
    },
    account:()=>{
        return {
            name: 'GraphQL'
            age: '18'
            sex: '男'
        }
    }
} ;
var app = express();
app.use('/graphql',graphqlHTTP(
    {
        schema:schema,
        rootValue:root,
        graphql:true,//调试界面
    }
))
</script>

<style>
  
</style>