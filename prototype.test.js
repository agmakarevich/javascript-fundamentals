describe('Prototype', () => {
  it('Should use Function constructor without prototype', () => {
    // TODO: implement
    function User(name) {
      this.name = name;
      this.sayHello = function () {
        return `Hello, ${this.name}`
      }
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Should use prototype', () => {
    // TODO: implement
    let hello = {
      sayHello: function () {
        return `Hello, ${this.name}`
      }
    };

    function User(name) {
      return {
        name: name,
        __proto__: hello
      };
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    // TODO: implement
    let add = {
      add: function (t) {
        this.list.push(t);
      }
    };

    function ArticleList() {
      this.list = [];

      this.add = function (t) {
        this.list.push(t);
      };

      this.__proto__ = add;
    }

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list.length).toBe(1);
  });

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement
    function Component(prop) {
      this.data = prop.data;

      this.render = function () {
        return '';
      };

      this.getData = function () {
        return this.data;
      };

      this.setData = function (obj) {
        this.data = Object.assign(this.data, obj);
      }
    }

    // TODO: implement
    function UserComponent(data) {
      Component.call(this, data);

      this.render = function () {
        return `${this.data.msg}, ${this.data.name || 'guest'}!`;
      };

      this.logout = function () {
        this.data.name = undefined;
      };

      this.login = function (name) {
        this.data.name = name;
      }
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({msg: 'Greetings'});
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test

    // TODO: implement
    function extend(Child, Parent) {
      Child.prototype = Object.create(Parent.prototype);
      Child.prototype.constructor = Child;
    }

    // TODO: implement
    function Component(prop) {
      this.data = prop.data;
    }

    Component.prototype.render = function () {
      return '';
    };
    Component.prototype.getData = function () {
      return this.data;
    };
    Component.prototype.setData = function (obj) {
      this.data = Object.assign(this.data, obj);
    };

    // TODO: implement
    // NOTE: for inheritance should be used extend method
    function UserComponent(prop) {
      this.data = prop.data;
    }

    extend(UserComponent, Component);

    UserComponent.prototype.render = function () {
      return `${this.data.msg}, ${this.data.name || 'guest'}!`;
    };
    UserComponent.prototype.logout = function () {
      this.data.name = undefined;
    };
    UserComponent.prototype.login = function (name) {
      this.data.name = name;
    };

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({msg: 'Greetings'});
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {

    class Component {
      constructor(prop) {
        this.data = prop.data;
      }

      render() {
        return '';
      };

      getData() {
        return this.data;
      };

      setData(obj) {
        this.data = Object.assign(this.data, obj);
      }
    }

    class UserComponent extends Component {

      constructor(prop) {
        super(prop);
        this.data = prop.data;
      }

      render() {
        return `${this.data.msg}, ${this.data.name || 'guest'}!`;
      };

      logout() {
        this.data.name = undefined;
      };

      login(name) {
        this.data.name = name;
      }
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({msg: 'Greetings'});
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function () {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings);
    helloTom.name = 'Tom';

    let greetingsBob = Object.create(greetings);
    greetingsBob.name = 'Bob';
    greetingsBob.msg = 'Greetings';

    expect(helloTom.greetings()).toBe('Hello, Tom!');
    expect(greetingsBob.greetings()).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});
