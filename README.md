# my_midway_project

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


[midway]: https://midwayjs.org

# 挺有意思的一个作业
写一个简单的网页抓取分析逻辑
## Actions:
1. 在本地电脑，初始化一个空的Midway3.0框架项目
   
2. 在src/controller/home.ts代码文件里，写一个简单的网页抓取分析逻辑
  - 使用node内置的http模块，或者第三方的npm库，通过GET请求，获取"https://www.baidu.com/"
  网页的HTML源代码文本
  - 从获取的HTML源代码文本里，解析出id=lg的div标签里面的img标签
  - 返回此img标签上的src属性值
  
3. 在test/controller/home.test.ts代码文件里，写一个针对src/controller/home.ts的单元测试案例
  - 使用Jest或Mocha测试框架
  - 如果接口请求时间超过1秒钟，则Assert断言失败
  - 如果接口返回值不等于"//www.baidu.com/img/bd_logo1.png"，
  则Assert断言失败
