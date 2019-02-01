
# yapi-plugin-import-rap

1. `npm install yapi-plugin-import-rap`

1. 在config.json中新增插件配置:

    "plugins": [{
      "name": "import-rap"
    }]

2. config.json 配置 `rapOrigin`,为rap项目的地址，如`http://192.168.1.100:8000`

> *本人不知道怎么把plugins中的配置引入到controller中，对react不是很熟，惭愧惭愧, 知道请Issues告知谢谢*

4.  在yapi项目的菜单中会增加“Rap项目导入”菜单，填写rap project id ，执行即可。

#### 说明：

* Project Id：
在RAP中点入项目之后，查看浏览器地址栏中的“projectId=”


* 导入的文件夹：
导入之后以接口的模块建立文件夹，即RAP进入项目后内容区域右上角的Tab


* 接口名称前缀：
如果RAP项目中接口列表有分多个group，则在接口名称前面添加group名称


