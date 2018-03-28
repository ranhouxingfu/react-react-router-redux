/**
 * Created by sky on 2018/3/22.
 */
import Mock from 'mockjs';
//Mock.setup({timeout: '5100-500'});
Mock.mock(/\.json/, {
        'status':6005,
        'data': [{
            'id': 1,
            'type': 'React',
            time:'@date',
            scanTimes:'@natural(60, 100)',
            'title': 'title1',
            'content': '语法:forEach方法按升序为数组中含有效值的每一项执行一次callback 函数，那些已删除（使用delete方法等情况）或者未初始化的项将被跳过（但不包那些值为 undefined 的项）（例如在稀疏数组上）。callback函数会被依次传入三个参数：数组当前项的值 数当前项的索引  数组对象本身如果给forEach传递了thisArg参数，当调用时，它将被传给callback函数，作为它的this值。否则，将会传入undefined作为它的this值forEach遍历的范围在第一次调用callback前就会确定。调用forEach后添加到数组中的项不会被callback访问到。如果已经存在的值被改变，则传递callback的值是forEach遍历到它们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了(例如使用 shift())，之后的元素将被跳过。forEach()为每个数组元素执行callback函数；不像map()或者reduce()，它总是返回undefined值，并且不可链式调用。注意：没有办法中止或者跳出forEach循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。如果你正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用Array.every或Array.some。示例'
        }, {
            'id': 2,
            'type': 'React',
            time:'@date',
            scanTimes:'@natural(60, 100)',
            'title': 'title2',
            'content': '有时路径名中存在我们需要获取的参数。例如，在运动员界面，我们需要获取运动员的编号。我们可以向route的路径字符串中添加path参数'
        }, {
            'id': 3,
            'type': 'React',
            time:'@date',
            scanTimes:'@natural(60, 100)',
            'title': 'title3',
            'content': '组合在相同组件中分享共同前缀的路由是一种有用的方法。这就需要简化父路由并且提供一个区域来渲染具有相同前缀的通用路由'
        }, {
            'id': 4,
            'type': 'React',
            time:'@date',
            scanTimes:'@natural(60, 100)',
            'title': 'title4',
            'content': '注意：主页路由包含额外参数。该参数用来保证路由能准确匹配path。'
        }]
})