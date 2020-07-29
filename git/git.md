#### 安装
    傻瓜式安装
    git --version

#### 初始化
    --system:系统中对所有用户都普遍适用的配置
    --global:用户下配置该文件，只适用于该用户
    不加以上参数只适用于当前项目（config文件下）
    每个级别的配置都会覆盖上层配置
    
    git config --global user.name 'lqz'
    git config --global user.email 'XXX'
    git congif --list

#### 区域
    工作区
    暂存区
    版本库

#### 对象
    git对象
        key:val 组成的键值对（key是val对应的hash）
                键值对在git内部是一个blob类型
    树对象
    提交对象

#### .git文件目录
    hooks:目录包含客户端或服务端的钩子脚本
    info:包含一个全局性排除文件
    logs:保存日志信息
    objects:目录存储所有数据内容
    refs:目录存储指向数据（分支）的提交对象的指针
    config:文件包含项目特有的配置选项（项目下配置的一些信息会显示，如：名字，邮箱）
    description:用来显示对仓库的描述信息
    HEAD:文件指示目前被检出的分支
    index:文件保存暂存区信息

#### 基础Linux命令
    clear：清除屏幕
    echo 'test content'：往控制台输出信息（echo 'test content' > test.text 将信息输出到创建test.txt文件)
    ll：将当前文件下的子文件和子目录平铺在控制台
    find 目录名：将对应下的子孙文件和子孙目录平铺在控制台
    find 目录名 -type f：将对应下的子文件平铺在控制台
    rm 文件名：删除文件
    mv 源文件 重命名文件：重命名
    cat 文件的url：查看对应文件内容
    vim 文件的url（在英文模式下）
        按 i 进入插入模式，进行文件编辑
        按 esc : 进行命令的执行
        q！强制退出（不保存）
        :wq 保存退出
        set nu 设置行数

