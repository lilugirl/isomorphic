在服务器端实现页面重定向 必须在相应对象中写入头部信息，包括一个指明URL重定向的状态码(如302)以及客户端将要跳转的地址location

代码见main.js


$ node main.js


在浏览器打开 http://127.0.0.1:1377  页面跳转成功


好奇之下 对main.js进行构建 发现index.html引用bundle.js报错