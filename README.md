
# yapi-plugin-import-rap

1. `npm install yapi-plugin-import-rap`

2. 在config.json中新增插件配置:

    "plugins": [{
      "name": "import-rap"
    }]

3. config.json 配置 `rapOrigin`,为rap项目的地址，如`http://192.168.1.100:8000`

> *本人不知道怎么把plugins中的配置引入到controller中，对react不是很熟，惭愧惭愧, 知道请Issues告知谢谢*

4.  在yapi项目的菜单中会增加“Rap项目导入”菜单，填写rap project id ，执行即可。


### 说明：

*本人所使用的rap版本为`0.14.16-beta`版本，对其它rap版本以及rap2，未做测试，不清楚格式是否一致。本插件转换成json-schema格式导入，所以mock规则未必和rap完全一致，比如id|+1等，时间有限，未深入研究，但是基本可用，满足了我们自己的需求。*

* Project Id：
在RAP中点入项目之后，查看浏览器地址栏中的“projectId=”


* 导入的文件夹：
导入之后以接口的模块建立文件夹，即RAP进入项目后内容区域右上角的Tab


* 接口名称前缀：
如果RAP项目中接口列表有分多个group，则在接口名称前面添加group名称

### Todo
- `id|+1`等mock规则如何转化
- 本人Rap只使用了`GET`,`POST`，`DELETE`和`PUT`未做测试，可能有错误

#### 另外

因考虑到使用体验，另外改造了一个yapi版本，主要对权限和界面进行修改，导入功能并入“数据管理”菜单内，yapi插件没有此项钩子，所以此插件独立菜单。
详见[https://github.com/wxxcarl/yapi_add_rap1](https://github.com/wxxcarl/yapi_add_rap1)



