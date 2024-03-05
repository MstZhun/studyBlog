### 代码分支合并错误，撤回合并
```
// 切换到合并到的错误分支
git checkout release

// 查看最近的合并信息（按q退出查看）
git log --merges

// 撤回合并
git revert -m <commit id>

// 推送到远程（这个命令会强制推送本地撤销合并后的 release 分支到远程仓库，覆盖掉远程仓库上的内容。（即，得通过一个新的提交来“撤销”上一次的提交，本质上是覆盖）
git push -f origin release
```

### 当前分支不想提交，暂存一下
```
// 暂存当前分支
git stash

// 切换到其他分支
git checkout feat/name

// 切换到原来的分支，查看暂存
git stash list

// 从暂存恢复之前的修改
git stash pop
```