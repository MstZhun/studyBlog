 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200727174816990.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYW9xaXpodW4=,size_16,color_FFFFFF,t_70#pic_center)

```mermaid
graph LR
A[工作区] -->|git add| B[暂缓区]

		B -->|git checkout| A

    B -->|git commit| C[本地仓库]
    
    C -->|git reset| B
    
    C -->|git push| D[远程仓库]
    
    D -->|git pull| C
    
    
    
   

```

