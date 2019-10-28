function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person('王多多', 18);
console.log(p1);


// -------------------------华丽丽的分割线-----------------------
console.log('-----------------------华丽丽的分割线-----------------------');

// 创建了一个动物类
class Animal {
  // 如果没有定义构造器,每个类会有个默认的构造器
  // constructor(){   }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const a1 = new Animal('大黄', 3);
console.log(a1);