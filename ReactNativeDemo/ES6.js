import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import construct from '@babel/runtime/helpers/esm/construct';



// class 外部定义函数需要加 function
function logfunc(x, y='World') {
    alert(x + y)
}


function laodImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => {
            resolve(image)
        }
        image.onerror = ()=> {
            reject(new Error('Could not load image at ' + url))
        }
        image.src = url
    })
}


// 函数参数个数任意
function add(...values) {
    let sum = 0
    for(var val of values){
        sum += val
    }
    return sum
}

class ES6 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            result : 0
        }
    }


    componentDidMount(): void {

        // 变量解构
        // this.varJiegou()

        // 字符串处理
        // this.stringOperation()

        // this.jsFunctionTest()

        // this.jsArrayTest()

        // this.jsObjectTest()


        // this.jsProxyText()

        this.jsPromissTest()

        // laodImageAsync


    }

    jsPromissTest() {

        // function timeout(ms) {
        //     return new Promise((resolve, reject) => {
        //         // setTimeout(resolve, ms, 'result')
        //         // setTimeout(reject, ms, 'result')
        //
        //         reject('error')
        //
        //     })
        // }
        //
        // timeout(1000).then(value => {
        //     alert('Success ' + value)
        // }).then(error => {
        //     alert('error ')
        // })

        // const promiss = new Promise(function (resolve, reject) {
        //     // resolve('success')
        //     reject('failed')
        // })
        // promiss.then(function (value) {
        //     alert(value)
        // },function (error) {
        //     alert(error)
        // })


        // const promiss = new Promise((resolve, reject) => {
        //     resolve('success')
        //     // reject('failed')
        // })
        // promiss.then(value => {
        //     alert(value)
        // },error => {
        //     alert(error)
        // })


        // 异步加载网络图片
        // function laodImageAsync(url) {
        //     return new Promise((resolve, reject) => {
        //         const image = new Image()
        //
        //         image.onload = () => {
        //             resolve(image)
        //         }
        //
        //         image.onerror = ()=> {
        //             reject(new Error('Could not load image at ' + url))
        //         }
        //
        //         image.src = url
        //     })
        // }



        // const p1 = new Promise((resolve, reject) => {
        //     console.log('begin p1')
        //     setTimeout(()=> {
        //         console.log('begin p11')
        //         reject(new Error('fail'))
        //     }, 3000)
        // })
        //
        // const p2 = new Promise((resolve, reject) => {
        //     console.log('begin p2')
        //     setTimeout(()=>{
        //         console.log('begin p22')
        //         resolve(p1)
        //     },5000)
        // })
        //
        // p2.then(result => {
        //     console.log('begin p3')
        //     console.log(result)
        // }).catch(error => {
        //     console.log('begin p4')
        //     console.log(error)
        // })
        // p1p2 2s p22 3s p11 p4

        // yield 总结
        // 只能在Generator函数内部使用
        // 运行.next()，遇到一个yield命令，就暂停
        //     .next()的返回值表示一个状态{value,done}
        // 再运行.next()，从之前遇到的那个yield [表达式]处（后）继续恢复运行
        // 当.next()传参的时候，yield [表达式]整个被替换为传入的参数。

        // yield : 程序遇到yield会触发暂停，当执行了 next() 后会继续往下执行
        // var a = 0;
        // function* foo() {
        //     a += 1;
        //     yield  '';
        //     yield '11';
        //     yield '12';
        //     return ;
        // }
        // var f = foo();
        // // f.next();
        // // alert(a);
        //
        // var s1 = f.next();
        // console.log(s1);
        // var s2 = f.next();
        // console.log(s2);
        // var s3 = f.next();
        // console.log(s3);
        // var s4 = f.next();
        // console.log(s4);

        // var foo = function *() {
        //     var x = 1;
        //     var y = yield (x+1);
        //     var z = yield (x + y);
        //     return z;
        // }()
        //
        // var a = foo.next();
        // var b = foo.next(3);
        // var c = foo.next(6);
        //
        // console.log('a=',a, 'b=', b, 'c=', c)


    }

    jsProxyText() {

        let obj = {
            name: 'zhangsan',
            age: '20'
        }
        var proxy = new Proxy(obj, {
            get: function (target, property) {
                console.log(target, property)
                if (property in target){
                    return target[property]
                }
                // return 0
                return new ReferenceError('Property ' + property + ' does not exist.')
            }

        })

        alert(proxy.kk)

    }


    jsObjectTest() {
        // const foo = 'bar'
        // const baz = {foo}
        // alert(baz.foo)


        // const cart = {
        //     _wheels: 4,
        //
        //     get wheels () {
        //         return this._wheels;
        //     },
        //
        //     set wheels (value) {
        //         if (value < this._wheels) {
        //             throw new Error('数值太小了！');
        //         }
        //         this._wheels = value;
        //     }
        // }
        //
        // alert(cart._wheels)


        // var obj = {}
        // obj.foo = true
        // obj['a'+'bc'] = 123
        // alert(obj.foo + ' ' + obj.abc)


        // let obj = {
        //     ['h' + 'ello'](){
        //         return 'Hi'
        //     },
        //     sayHello(){
        //         return 'Hello'
        //     }
        // }
        // alert(obj.hello())
        // alert(obj.sayHello())


        // const key1 = {a: 1}
        // const key2 = {b: 2}
        //
        // const myObject = {
        //     [key1]: 'value1',
        //     [key2]: 'value2'
        // }
        // alert(myObject)

        // 可枚举性
        // for...in循环：只遍历对象自身的和继承的可枚举的属性。
        // Object.keys()：返回对象自身的所有可枚举的属性的键名。
        // JSON.stringify()：只串行化对象自身的可枚举的属性。
        // Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
        // let obj = {foo: 123}
        // alert(Object.getOwnPropertyDescriptor(obj,'foo').enumerable)

        // let map = new Map([
        //     [1, 'one'],
        //     [2, 'two'],
        //     [3, 'three'],
        // ]);
        //
        // let arr = [...map.values()]
        // alert(arr)

        // let obj = {
        //     foo: 123,
        //     baz: 456
        // }
        // // alert(Object.keys(obj))
        // // alert(Object.values(obj))
        //
        // for(let i in obj){
        //     console.log('key is '+ i + ',' + 'value is ' + obj[i])
        // }
        //
        // console.log(Object.getOwnPropertyNames(obj))


        // let obj = {a: 1, b: 3}
        // let {a, b} = obj
        // obj.a = 10
        // alert(a + ' ' + b)

        // class Name extends Component{
        //     getname(){
        //         return 'zhangsan'
        //     }
        // }
        //
        // // 为对象添加方法
        // Object.assign(Name.prototype, {
        //     getAge() {
        //         return '20'
        //     }
        // })
        //
        // let nn = new Name()
        // // alert(nn.getname())
        // alert(nn.getAge())

        // const prot = {
        //     foo: 123
        // }
        //
        // // Object.create 实现继承
        // const obj = Object.create(prot)
        // obj.name = 'zhangsan'
        // alert(Object.keys(obj))

        // const obj = { 100: 'a', 2: 'b', 7: 'c' ,1: 'd', 0: 'bb'};
        // alert(Object.values(obj))

        // alert(Object.keys('foo'))

        // const map = new Map()
        // map.set('key1', 1).set('key2', 2).set('key1', 3)
        // const obj = Object.fromEntries(map)
        // console.log(obj)

        // const obj = Object.fromEntries(new URLSearchParams('foo=bar&bar=qux'))
        // console.log(obj.keys)

        // let obj = Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'));
        // console.log(obj)


        // let s1 = Symbol('foo')
        // let s2 = Symbol('foo')
        // // alert(s1.description)
        // // alert(s1 === s2)
        // let ss1 = 'foo'
        // let ss2 = 'foo'
        // alert(ss1 == ss2)

        // let obj = {
        //     'aa': 'key',
        //     'jj': 'value',
        //     c: 'cc'
        // }
        // alert(obj.c)

        // let map = new Map()
        // map.set(1, 'aaa')
        // map.set(2, 'bbb')
        // alert(map.get(1))

    }




    jsArrayTest() {

        // alert(Date(...[2019, 1, 1]))

        // var arr1 = [1,2,3]
        // var arr2 = [4,5,6]
        // arr1.push(...arr2)
        // alert(arr1)


        // var arr1 = [1,2,3]
        // var arr2 = arr1  // 赋值后指向同一份数组
        // arr2[1] = 4
        // alert(arr1)

        // 真正赋值，copy一份新数组
        // const a1 = [1,2]
        // const a2 = [...a1]
        // const [...a3] = a1
        // a2[0] = 5
        // alert(a1 + '|' + a2 + '|' + a3)

        //数组合并
        // const arr1 = [1,2]
        // const arr2 = [3,4]
        // const arr3 = [5,6]
        // arr1.concat(arr2)
        // alert(arr1)

        // const arr4 = [...arr1, ...arr2, ...arr3]
        // alert(arr4)

        // arr1.push(...arr2)
        // arr1.push(...arr3)
        // alert(arr1)

        // let map = new Map([
        //     [1, 'one'],
        //     [2, 'two'],
        //     [3, 'three'],
        // ]);
        //
        // let arr = [...map.values()]
        // alert(arr)

        // let arrayLike = {
        //     '0': 'a',
        //     '1': 'b',
        //     '2': 'c',
        //     length: 3
        // };
        //
        // // ES6的写法
        // let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
        // alert(arr2)

        // let arr = Array.from('hello')
        // alert(arr)


        // let namesSet = new Set(['a','b','a', 'c'])
        // let arr = Array.from(namesSet)
        // alert(arr)

        // alert(Array.from('\uFFFF').length)

        //数组实例的 copyWithin()
        //target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
        //start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
        //end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

        // 将3号位复制到0号位
        // [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
        // [4, 2, 3, 4, 5]

        // -2相当于3号位，-1相当于4号位
        // [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
         // [4, 2, 3, 4, 5]

        // 找出数组中第一个符合条件的元素
        // let arr = [1, 2, -5, 5]
        // let result = arr.find((n) => n < 0)
        // alert(result)

        // let result = [1,,2,3,4].reduce((x,y) => x+y)
        // alert(result)

        // let result = [1,2,3].join('#')
        // alert(result)

        // let result = [1,2,3].toString()
        // alert(result)


        // 排序
        const arr = ['m', 'h', 'j','z','a']
        const stableSorting = (s1, s2) => {
            if (s1[0] < s2[0]) return -1
            return 1
        }

        arr.sort(stableSorting)
        alert(arr)


    }


    jsFunctionTest() {
        // this.log('Hello')
        // logfunc('Hello','')

        // alert(add(1, 2, 3))

        // alert(add.name)  // 返回函数名字

        // var f = add

        // alert(f.name)

        // alert(f(1, 3, 5))

        //箭头函数
        // var f = function () {
        //     return 5
        // }
        // alert(f())

        // var sum = (p1, p2) => p1 + p2
        // alert(sum(1, 2))

        // var res = () => 5
        // alert(res())

        // 箭头函数的代码块部分多于一条语句，需要使用大括号括起来，并且使用return语句返回
        // var sum = (p1, p2) => {return p1 + p2}
        // alert(sum(1,3))


        // let array = [1,2,3].map(function (x) {
        //     return x * x
        // });
        // alert(array)

        // let array2 = [1,2,3].map(x => x * x)
        // alert(array2)

        var handler = {
            id: '123456',
            init: function () {
                document.addEventListener('click', event=> this.doSomething(event.type), false);
            },

            doSomething: function (type) {
                console.log('Handling' + 'type' + 'for' + this.id)
            }
        }


    }




    getStringFunc(){
        return 'hello world'
    }

    // javascript 中两个数之间误差函数
    withInErrorMargin(left, right) {
        return Math.abs(left - right) < Number.EPSILON
    }

    stringOperation() {

        // 字符串遍历
        for (let s of 'string'){
            console.log(s)
        }

        let str = '123'
        let str2 = '456${str}'
        let str3 = `789${str}`
        let first = 'zhang'
        let last = 'san'
        let name = `${first} ${last} ${2*3} ${this.getStringFunc()}`
        name = name.replace('hello','Hello')
        // alert(name)

        // alert`123` == alert(123)

        let iszhang = name.includes('zhang')
        let isStartZhang = name.startsWith('zhang')
        let isEndWorld = name.endsWith('world')

        // alert(`${iszhang} + ${isStartZhang} + ${isEndWorld}`)


        // alert('x'.repeat(3))


        let ss = '  abc  '
        // alert('-' + ss.trimStart() + '-')

        // alert(Number.EPSILON)

        // alert(this.withInErrorMargin(0.2 + 0.1, 0.31))

        // alert(Math.pow(2,10))

        // alert(Math.pow(2, 53) === Math.pow(2, 53) + 1)
        // alert(Number.MAX_SAFE_INTEGER)
        // alert(Number.MIN_SAFE_INTEGER)

        // alert(Math.trunc(123.45))

        alert(Math.trunc('哈'))

    }



    varJiegou(){
        // let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
        //
        // let obj = {first: 'hello', last: 'world'}
        // let {first: f, last: l} = obj


        // let obj = {
        //     p: [
        //         'Hello',
        //         'Haha',
        //         {s: 'World'}
        //     ]
        // }
        //
        // let {p: [x,h,{y='default'}]} = obj;
        // alert(x + '-' + h + '-' + y)

        const map = new Map()
        map.set('first', 'hello')
        map.set('second', 'world')

        // 解构遍历解析出 key 和 value
        for (let [key, value] of map){
            console.log(key + ' is ' + value)
        }

        // 只解析出 key
        for (let [key] of map){
            console.log('only key :' + key)
        }

        // 只解析出 value
        for (let [,value] of map){
            console.log('only value :' + value)
        }

    }



    render() {




        return (
            <View style={myStyle.viewStyle}>
                <Text style={myStyle.textStyle}>ES6</Text>
                <Text>{this.state.result}</Text>
                <Image>{this.state.imag}</Image>
            </View>
        )
    }
}


const myStyle = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#4143ff',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default ES6
