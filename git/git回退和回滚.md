
### 撤回 & 重置
    工作区
        撤回自己在工作目录的修改：
          git checkout --filename | git restore <file>
    暂存区
        如何撤回自己的暂存：
          git rest HEAD filename   |   git restore --staged <file>
    版本库
        撤销提交
          git commit --amend

### reset
  git log     
  git reflog      主要是HEAD有变化，那么git reflog就会记录下来

  三部曲：
    第一部：git reset --soft commitHash    （HEAD~）
          只动HEAD，带着分支一起移动，用commitHash内容重置HEAD内容
    第二部：git reset [--mimixed] commitHash   （HEAD～）
          动HEAD，带着分支一起移动，用commitHash内容重置HEAD内容，重置暂存区
          动了暂存区
    第三部：git reset --hard commitHash   （HEAD～）   ==>危险用法命令
          动HEAD，带着分支一起移动
          动了暂存区
          动了工作目录
          用commitHash内容重置HEAD内容，重置暂存区，重置工作目录

### checkout
  都需要重置HEAD，暂存区，工作目录
  git checkout 分支名   &   git reset --hard HEAD～
  1.动HEAD，不带分支走                1.动HEAD，带着分支一起走
  2.对工作目录是安全的         2.强制覆盖工作目录



#### 取消当前合并

```
git merge --abort

git add .
git merge --continue // 解决冲突后继续合并
```



