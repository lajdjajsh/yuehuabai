// console.log(1)

//新增数据函数
function row_improve()
{
    let table=document.getElementsByTagName('table')[0];
    //获取指定table位置
    // console.log(table);
    let length =table.rows.length;
    //获取table行数
    // console.log(length);
    let newrow = table.insertRow(length);
    //将newrow赋值为下一行
    // console.log(newrow);

    //插入列节点对象
    let newname=newrow.insertCell(0);
    let newphone = newrow.insertCell(1);
    let newaction = newrow.insertCell(2);

    newname.innerHTML = '未命名';
    newphone.innerHTML = '无';
    newaction.innerHTML = '<button onclick="row_change(this)">编辑</button><button onclick="row_delete(this)">删除</button>';
    //记得新的button按钮也需要点击事件

}
 
//删除数据函数
function row_delete(button)
{

    // console.log(button);
    let row = button.parentNode.parentNode;
    //获取按钮的父节点的父节点
    // console.log(row);
    row.parentNode.removeChild(row);
    //从row的父节点删除子节点（即对应row）

}

//编辑数据函数
function row_change(button)
{
    let row=button.parentNode.parentNode;
    let change_name=row.cells[0];
    let change_phone=row.cells[1];
    
    let newname=prompt("请输入姓名：");
    let newphone=prompt("请输入手机号：");

    change_name.innerHTML=newname;
    change_phone.innerHTML=newphone;

}


