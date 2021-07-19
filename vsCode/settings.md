### 全局

```json
{
    "editor.fontFamily": "Monaco,'思源黑体','Courier New', monospace", // 文字字体
    "editor.lineHeight": 20,
    "terminal.integrated.shell.osx": "/bin/zsh", // zsh
    "workbench.iconTheme": "material-icon-theme", // 文件图标主题
    "git.autofetch": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化工具
    "prettier.tabWidth": 4, // tab缩进
    "prettier.singleQuote": true, // 格式化以单引号为主
    "prettier.useTabs": true,
    "prettier.semi": true, // 格式化是否分号、
    "prettier.trailingComma": "none", // 没有尾随逗号
    "html.format.wrapAttributesIndentSize": 4,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "window.zoomLevel": 3
}
```

### 小程序项目

```json
{
    
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "minapp-vscode.wxmlFormatter": "prettyHtml", //指定wxml格式化工具
    "minapp-vscode.prettyHtml": { //prettyHtml 默认配置
        "useTabs": true,
        "tabWidth": 4,
        "printWidth": 200,
        "singleQuote": false,
        "usePrettier": false,
        "wrapAttributes": true, //设置成 true 强制属性换行
        "sortAttributes": false
    }
}
```

### h5项目

```json
{
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "files.exclude": {
        "**/node_modules": true
    },
    "prettier.requireConfig": true,
    "minapp-vscode.formatMaxLineCharacters": 1000,
    "workbench.preferredHighContrastColorTheme": "Abyss",
    "workbench.preferredLightColorTheme": "Default High Contrast",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    // 重新设定tabsize
    "editor.tabSize": 4,
    // #值设置为true时，每次保存的时候自动格式化；值设置为false时，代码格式化请按shift+alt+F
    "editor.formatOnSave": false,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    // 添加 vue 支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //  #让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    //  #去掉代码结尾的分号
    "prettier.semi": false,
    //  #使用带引号替代双引号
    "prettier.singleQuote": true,
    "prettier.tabWidth": 4,
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // #这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // #让vue中的js按"prettier"格式进行格式化
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // #vue组件中html代码格式化样式
            "wrap_attributes": "force-aligned", //也可以设置为“auto”，效果会不一样
            "wrap_line_length": 200,
            "end_with_newline": false,
            "semi": false,
            "singleQuote": true
        },
        "prettier": {
            "semi": false,
            "singleQuote": true
        }
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分号
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    "prettier.useTabs": true,
    "files.autoSave": "off",
    "explorer.confirmDelete": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "[scss]": {
        "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "eslint.trace.server": null,
    "terminal.integrated.shell.osx": "",
    "terminal.integrated.shell.windows": "" // 两个选择器中是否换行
}
```

