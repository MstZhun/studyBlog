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
    树对象:项目的快照是一个树对象
    提交对象:项目的版本就是一个提交对象

#### .git文件目录说明
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

#### git操作最基本流程
    创建工作目录，对工作目录进行修改
    git add ./
        git hash-object -w 文件名 （修改了多少个工作目录中的文件，此命令就要被执行多少次）
        git update-index ... (暂存区)
    git commit -m '注释'
        git write-tree
        git commit-tree

#### git高层命令
    git init                初始化仓库
    git status              查看文件状态
    git diff                查看哪些修改还没有暂存
    git diff --staged       查看哪些更新暂存了还没有提交
    git add ./              将修改添加到暂存区
    git rm 文件名            删除工作目录中对应的文件，再将修改添加到缓存区
    git mv 原文件名 新文件名   将工作目录相应文件重命名，再将修改添加到缓存区
    git commit -m '注释'（注释少的时候用-m）     将暂存区提交到版本库
    git commit -a -m （跳过暂存区）
    git diff --cached（git diff --staged 1.61以上）       有哪些更新已经暂存以来准备下次提交
    git log --pretty=oneline （--oneline）               查看提交记录（q键退出）

#### git高层命令（分支）
    git branch                 显示分支列表
    git branch 分支名           创建分支
    git checkout 分支名         切换分支
    git branch -d 分支名        删除分支（切换到master分支在使用此命令，-D强制删除）
    git branch -v              查看每个分支的最后一次提交
    git log --oneline --decorate --graph --all   查看所有分支历史
    git config --global alias.别名 ”指令（git后面的，不包括git，一个单词不需要加双引号）“    配置指令别名

#### git底层命令
    git对象：
        git hash-object -w fileUrl ：生成一个key（hash，唯一）:val（压缩过的文件内容），存到.git/objects文件
    tree对象：
        git update-index --add --cacheinfo 100644 hash test.text：往暂存区添加一条记录（让git对象对应上文件名），存到.git/index
        git write tree：生成树对象，存到.git/objects文件
    commit对象：
        echo “first commit” | git commit-tree treeHash：生成一个提交对象，存到.git/objects文件
    对以上对象查询：
        git cat-file -p hash：拿对应对象内容
        git cat-file -t hash：拿对应对象数据类型

#### 查看暂存区
    git ls-files -s