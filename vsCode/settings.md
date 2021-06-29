```json
{
    "editor.fontFamily": "Monaco,'思源黑体','Courier New', monospace", // 文字字体
    "editor.lineHeight": 20, // 文字行高
    "terminal.integrated.shell.osx": "/bin/zsh",    // zsh
    // "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化工具
    "prettier.tabWidth": 4, // tab缩进
    "prettier.singleQuote": true, // 格式化以单引号为主
    "prettier.useTabs": true,
    "prettier.semi": true, // 格式化是否分号
    "prettier.trailingComma": "none", // 没有尾随逗号
    "html.format.wrapAttributesIndentSize": 4,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "git.autofetch": true, // git 自动fetch
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "minapp-vscode.disableAutoConfig": true,
    "window.zoomLevel": 3,
    "workbench.iconTheme": "material-icon-theme", // 文件图标主题
    "minapp-vscode.wxmlFormatter": "prettyHtml", //指定wxml格式化工具
    "minapp-vscode.prettyHtml": { //prettyHtml 默认配置
        "useTabs": true,
        "tabWidth": 4,
        "printWidth": 100,
        "singleQuote": false,
        "usePrettier": false,
        "wrapAttributes": true, //设置成 true 强制属性换行
        "sortAttributes": false
    }
    
}
```

