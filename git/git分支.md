### 分支
    分支本质是一个提交对象，所有分支都会有机会被HEAD引用（HEAD时刻只会指向一个分支）
    当我们有新的分支提交时，HEAD会携带当前持有的分支往前移动

### 分支注意点
    最佳实践：每次切换分支之前，当前分支一定是要干净的！！！（已提交状态）
    允许切换分支：
        分支上所有内容都处于已提交状态
        （避免）分支上的内容是初始化创建，属于未跟踪状态
        （避免）分支上的内容是初始化创建，第一次处于已暂存状态
    不允许切分支：
        分支上所有内容处于已修改状态 或者 第二次以后的暂存状态
    坑：在切换分支时，如果当前分支有未暂存的修改（第一次）或者有未提交的暂存（第一次）
        分支可以切换成功，但这种操作有可能污染其他分支
    
    动三个地方
        HEAD
        暂存区
        工作目录

### 指令
    git branch 查看分支
    git branch name 创建分支
    git checkout name 切换分支
    git branch -b name 创建分支并切换到该分支
    git branch -d name 删除空分支
    git branch -D name 强制删除分支（可能数据丢失，小心使用）
    git merge name   合并分支
        快进合并：不会产生冲突
        典型合并：有机会产生冲突
        解决冲突：打开冲突文件，进行修改，然后add，commit
    git branch name commitHash      版本穿梭（时光机）
    git branch      查看分支列表
    git branch --merged     查看哪些分支合并到了当前分支（一旦出现在这个列表当中就应该删除）
    git branch --no--merged     查看当前没有合并到当前分支的分支列表（一旦出现在这个列表，要观察是否需要合并）

### 存储
    不想提交分支，还想切换分支，使用存储
    git stash list              查看储存列表
    git stash                   存储，没有生成提交记录，会将当前分支上的工作推到一个栈中
    git stash apply stash@{2}   如果指定一个储藏，git认为指定的是最近的储藏
    git stash drop stash@{2}    移除相应的储藏
    git stash pop               为应用储藏然后立即重栈上删除它

