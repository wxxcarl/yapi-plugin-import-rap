
# yapi-plugin-import-rap

1. `npm install yapi-plugin-import-rap`

2. 在config.json中新增插件配置:

    "plugins": [{
      "name": "import-rap",
      "options": {
        "rapOrigin": "http://192.168.1.100:8000" // rap项目地址
      }
    }]

3.  在yapi项目的菜单中会增加“Rap项目导入”菜单，填写rap project id ，执行即可。


### 说明：

*本人所使用的rap版本为`0.14.16-beta`版本，对其它rap版本以及rap2，未做测试，不清楚格式是否一致。数据格式转换成json-schema导入，规则限制，mock结果未必和rap完全一致(比如`float|.1-10`只转化为`@float`等)，但是基本可用。*

* Project Id：
在RAP中点入项目之后，查看浏览器地址栏中的“projectId=”


* 导入的文件夹：
导入之后以接口的模块建立文件夹，即RAP进入项目后内容区域右上角的Tab


* 接口名称前缀：
如果RAP项目中接口列表有分多个group，则在接口名称前面添加group名称

#### 另外

因考虑到使用体验，另外改造了一个yapi版本，主要对权限和界面进行修改，导入功能并入“数据管理”菜单内，yapi插件没有此项钩子，所以此插件独立菜单。
详见[https://github.com/wxxcarl/yapi_add_rap1](https://github.com/wxxcarl/yapi_add_rap1)



