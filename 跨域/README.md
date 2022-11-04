#### 跨域

*跨域是浏览器行为，不是服务器行为。。。

*同源策略：是指协议，域名，端口都要相同，其中有一个不同都会产生跨域。

实际上，请求已经到达服务器了，只不过在回来的时候被浏览器限制了，就像Python他可以进行抓取数据一样，不经过浏览器而发起请求是可以得到数据。



####  跨域解决方案

1. jsonp
2. document.domain + iframe
3. location.hash + iframe
4.  window.name + iframe
5. postMessage
6.  跨域资源共享CORS
7. nginx代理
8.  nodejs中间件代理
9.  WebSocket协议



