
### 撤回 & 重置
    工作区
        撤回自己在工作目录的修改：git checkout --filename | git restore <file>
    暂存区
        如何撤回自己的暂存：git rest --filename   |   git restore --staged <file>
    版本库
        如何撤回自己的提交
        注释写错了，重新给用户写注释的机会 git commit --amend

### reset
  git log     
  git reflog      主要是HEAD有变化，那么git reflog就会记录下来

  三部曲：
    第一部：git reset --soft HEAD~
          只动HEAD，带着分支一起移动
    第二部：git reset --mimixed HEAD～
          动HEAD，带着分支一起移动
          动了暂存区
    第三部：git reset --hard HEAD～   ==>危险用法命令
          动HEAD，带着分支一起移动
          动了暂存区
          动了工作目录

### checkout
  git checkout 分支名   &   git reset --hard HEAD～
  1.只动HEAD                1.动HEAD，带着分支一起走
  2.对工作目录是安全的         2.强制覆盖工作目录







