/**
 * 一个一个选择图标太麻烦 ,直接在console打了一段代码 ,调用当前页所有图标的'添加到购物车'按钮
 * 一键下载[fonticon](http://www.iconfont.cn/)当前页图标
 */
let iconList = $('.collection-detail .block-icon-list')
let icons = iconList.children;
for (let index in icons) {
  let iconItem = icons[index];
  if(iconItem instanceof HTMLLIElement){
    if(iconItem.className.indexOf('selected')===-1){
      let coverDiv = iconItem.lastElementChild;
      if(coverDiv instanceof HTMLDivElement){
        let addButton = coverDiv.firstElementChild;
        if(addButton instanceof HTMLSpanElement){
          addButton.click();
        }
      }
    }
  }
}
