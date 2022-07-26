const pool = require('../database/mysql');
const {query} = pool;

function build(data){
    var result = [];
    if (!data) return null;
    for(var i=0;i<data.length;i++){
        var deptdata = data[i]
        if(!result.length){
            let obj1={
                dept:deptdata.dept,
                deptId:[
                    {[deptdata.deptName]:deptdata.deptLeaderId}
                ]
            }
            result.push(obj1);
            continue   
        }
        var flag
        for (var k = 0; k < result.length; k++) {
            if (result[k].dept==deptdata.dept) {//存在类
                flag=1
                break
            }else{//不存在类
                flag=2
            }
        }
        if(flag==1){
            result[k].deptId.push({[deptdata.deptName]:deptdata.deptLeaderId})
        }
        if(flag==2){
            let obj1={
                dept:deptdata.dept,
                deptId:[
                    {[deptdata.deptName]:deptdata.deptLeaderId}
                ]
            }
            result.push(obj1); 
        }
    }
    return result
}

async function getNavData(ctx, next) {
    var sql=`SELECT * from dept`
    let data = await query(sql)
     let treedata = await build(data)
    ctx.body = {
        data: treedata,
        status: '200',
    }
}

module.exports = {
    getNavData,
}