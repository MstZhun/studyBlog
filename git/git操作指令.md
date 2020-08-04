### 初始化仓库
    git init

### 新增
    在工作目录新增文件
    git status
    git add ./
    git commit -m 'msg'

### 修改
    在工作目录修改文件
    git status
    git add ./
    git commit -m 'msg'

### 删除 & 重命名
    git rm 删除文件名                git vm 老文件 新文件
    git status                     git status
    git commit -m 'msg'            git commit -m 'msg'

### 查询
    git status              查看工作目录中文件的状态（已跟踪（已提交，已暂存，已修改），未跟踪）
    git diff                查看未暂存的修改
    git diff --cache        查看未提交的暂存
    git log --oneline       查看提交记录
    
### 分支
    分支的本质就是一个提交对象
    HEAD：
        是一个指针，他默认是master分支，切换分支时其实就是让HEAD指向不同的分支
        每次有新的提交时，HEAD都会带着当前指向的分支一起往前移动
    git log --oneline --decorate --graph --all      查看整个项目的分支图
    git branch          查看分支列表
    git branch name     在当前提交对象上创建新的分支
    git branch name commitHash      在指定的提交对象上创建新的分支
    git checkout name       切换分支
    git branch -d name      删除空的分支，删除已经被合并的分支
    git branch -D name      强制删除分支
    