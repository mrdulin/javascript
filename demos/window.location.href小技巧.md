# window.location.href 小技巧

__前言:__

有些做法是每个项目对应一个域名，例如, `www.p1.com`, `www.p2.com`，不在讨论范围。

我们的项目是按照业务划分，并且我们的域名是收敛的，例如，收敛后的域名是`www.company.com`, 在这个域名下，每个项目都有自己的一个路径（服务器上的一个目录），例如，`www.company.com/p1/index.html`, `www.company.com/p2/index.html`, 单页面应用的`url`可能是这样的: `www.company.com/p3/index.html#/home`。

__需求:__

现在有个需求，要从`www.company.com/p1/index.html#/book/23`跳转到`www.company.com/p2/index.html#/consult`，并且要同时适用不同的环境（开发环境：`www.dev.company.com/p1`, 测试环境: `www.test.company.com/p1`, 预发环境: `www.pre.company.com/p1`，线上环境: `www.company.com/p1`）。

__方案一：__

开发人员在预先准备的配置系统中将`www.company.com/p2/index.html#/consult`地址的不同环境的地址都配置好，通过项目编译部署时的构建脚本，在不同部署环境生成相应的`autoconfig.js`文件，
该文件保存着各个外部应用地址的`url`。使用方式：一种方式是使用`webpack`的`ProvidePlugin`暴露该配置文件中模块在项目全局可见。在具体使用的地方，可以通过`autoconfig.P2`(`www.[不同环境].company.com/p2/index.html#/consult`)

__方案二：__

考虑，`p1`和`p2`这两个应用在不同环境下始终是同一个域名，因此，并没有必要用方案一。直接使用`window.location.href = '//www.company.com/p2/index.html#/consult'`即可，写死肯定是不行，改进：
`www.location.href = location.protocol + '//' + location.host + /p2/index.html#/consult`, 通过获取当前应用的`http`协议和域名进行`url`地址拼接。

__方案三:__

这次的重点，直接使用 `location.href = '/p2/index.html#/consult'`




