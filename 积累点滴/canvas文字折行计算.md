#### 思路1

```javascript
let tempStr = '';
let tempArr = [];
const end = this.ctx.measureText('...展开').width;
for (let a = 0; a < options.text.length; a++) {
  const p = tempArr.length + 1 === options.row ? end : '';
  if (
    this.ctx.measureText(tempStr + options.text[a]).width + p <=
    options.maxWidth
  ) {
    tempStr += options.text[a];
    // 循环结束，也不足row行时，剩余文本放入数组
    if (a + 1 === options.text.length) {
      tempArr.push(tempStr);
    }
  } else {
    tempArr.push(tempStr);
    if (tempArr.length === options.row) break; // 满足row行，结束循环
    tempStr = options.text[a];
  }
}
for (let b = 0; b < tempArr.length; b++) {
  this.ctx.fillText(
    tempArr[b],
    options.x,
    options.y + b * options.lineHeight
  );
}
this.ctx.fillText(
  '...展开',
  options.x +
  this.ctx.measureText(tempArr[options.row - 1]).width,
  options.y + (options.row - 1) * options.lineHeight
);
```

#### 思路2

```javascript
let lineStr = options.text;
let lineArr = [];

const ellWidth = this.ctx.measureText('...展开');

for (let i = 0; i < options.row; i++) {
  const { reStr, index } = this.getStrByWidth(lineStr, options.maxWidth);
  if (!reStr) {
    break;
  }
  lineArr.push(reStr);
  lineStr = lineStr.substr(index);
}
if (lineStr) {
  lineArr[options.row - 1] =
    this.getStrByWidth(lineArr[options.row - 1], options.maxWidth - ellWidth).reStr +
    '...展开';
}
```

