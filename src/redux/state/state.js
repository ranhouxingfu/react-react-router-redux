/**
 * Created by sky on 2018/3/20.
 */
const initState = {
    articleList: [
        {
            id: 1,
            uploadTime: '2018-01-02',
            uploadUser: '张三',
            type: 'React',
            scanNum: 222,
            title: 'react+react-router+react-redux搭建环境',
            content: 'for...in循环以任意序迭代一个对象的属性，对属性的删除、添加、修改需要注意以下几个问题：如果一个属性在一次迭代中被修改，并在之后的迭代中被访问，那么再次被访问的值为修改之后的值；一个在被访问之前已经被删除的属性将不会在之后被访问；在迭代进行时被添加到对象的属性，可能在之后的迭代被访问，也可能被忽略；所以不能保证迭代时添加的属性一定能被访问到；因为迭代的顺序是不确定的，所以不能保证在迭代过程中被修改或被删除的属性会在修改或删除前还是修改或删除后被访问到（除非是正在被访问的属性）；所以，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性；'
        }, {
            id: 2,
            uploadTime: '2018-01-02',
            uploadUser: '张三',
            type: 'React',
            scanNum: 223,
            title: 'react+react-router+react-redux搭建环境',
            content: 'for...in循环以任意序迭代一个对象的属性，对属性的删除、添加、修改需要注意以下几个问题：如果一个属性在一次迭代中被修改，并在之后的迭代中被访问，那么再次被访问的值为修改之后的值；一个在被访问之前已经被删除的属性将不会在之后被访问；在迭代进行时被添加到对象的属性，可能在之后的迭代被访问，也可能被忽略；所以不能保证迭代时添加的属性一定能被访问到；因为迭代的顺序是不确定的，所以不能保证在迭代过程中被修改或被删除的属性会在修改或删除前还是修改或删除后被访问到（除非是正在被访问的属性）；所以，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性；'
        }, {
            id: 3,
            uploadTime: '2018-01-02',
            uploadUser: '张三',
            type: 'React',
            scanNum: 224,
            title: 'react+react-router+react-redux搭建环境',
            content: 'for...in循环以任意序迭代一个对象的属性，对属性的删除、添加、修改需要注意以下几个问题：如果一个属性在一次迭代中被修改，并在之后的迭代中被访问，那么再次被访问的值为修改之后的值；一个在被访问之前已经被删除的属性将不会在之后被访问；在迭代进行时被添加到对象的属性，可能在之后的迭代被访问，也可能被忽略；所以不能保证迭代时添加的属性一定能被访问到；因为迭代的顺序是不确定的，所以不能保证在迭代过程中被修改或被删除的属性会在修改或删除前还是修改或删除后被访问到（除非是正在被访问的属性）；所以，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性；'
        }, {
            id: 4,
            uploadTime: '2018-01-02',
            uploadUser: '张三',
            type: 'React',
            scanNum: 224,
            title: 'react+react-router+react-redux搭建环境',
            content: 'for...in循环以任意序迭代一个对象的属性，对属性的删除、添加、修改需要注意以下几个问题：如果一个属性在一次迭代中被修改，并在之后的迭代中被访问，那么再次被访问的值为修改之后的值；一个在被访问之前已经被删除的属性将不会在之后被访问；在迭代进行时被添加到对象的属性，可能在之后的迭代被访问，也可能被忽略；所以不能保证迭代时添加的属性一定能被访问到；因为迭代的顺序是不确定的，所以不能保证在迭代过程中被修改或被删除的属性会在修改或删除前还是修改或删除后被访问到（除非是正在被访问的属性）；所以，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性；'
        }
    ],
    archiveList: [
        {
            id: 1,
            archiveTime: '2018-01-02',
            archiveUser: '张三',
            type: 'React',
            scanNum: 224,
            children: [{
                id: 1,
                title: 'react+react-router+react-redux搭建环境',
            }, {
                id: 2,
                title: 'react+react-router+react-redux搭建环境',
            }, {
                id: 3,
                title: 'react+react-router+react-redux搭建环境',
            }]
        }, {
            id: 2,
            archiveTime: '2018-01-12',
            archiveUser: '张三',
            type: 'React',
            scanNum: 224,
            children: [{
                id: 1,
                title: 'react+react-router+react-redux搭建环境',
            }]
        }, {
            id: 2,
            archiveTime: '2018-01-13',
            archiveUser: '张三',
            type: 'React',
            scanNum: 224,
            children: [{
                id: 1,
                title: 'react+react-router+react-redux搭建环境',
            }, {
                id: 2,
                title: 'react+react-router+react-redux搭建环境',
            }]
        }
    ]
}
export default initState