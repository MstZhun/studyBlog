### 切换分支
    最佳实践：每次切换分支之前，当前分支一定是要干净的（已提交状态）
    坑：在切换分支时，如果当前分支有未暂存的修改（第一次）或者有未提交的暂存（第一次）
        分支可以切换成功，但这种操作有可能污染其他分支
    
    动三个地方
        HEAD
        暂存区
        工作目录

    git branch 查看分支
    git branch name 创建分支
    git branch -b name 创建分支并切换到该分支
    git checkout name 切换分支
    git branch -d name 删除空分支
    git branch -D name 强制删除分支
    git merge 分支名   合并分支

### 存储
    git stash list              查看储存列表
    git stash                   存储，没有生成提交记录
    git stash apply stash@{2}   如果指定一个储藏，git认为指定的是最近的储藏
    git stash drop stash@{2}    移除相应的储藏
    git stash pop               为应用储藏然后立即重栈上删除它

