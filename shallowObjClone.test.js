const shallowObjClone = require('./shallowObjClone');

test('Create a clone of the object parameter', () => {
    const myObj = { person:"Hitchhiker", age:42 };
    expect(shallowObjClone(myObj)).toStrictEqual(myObj);
})