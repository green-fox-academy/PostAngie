import {Apple} from './apple';

// Create a test method
// Instantiate an Object from your class in the method
// Use the toEqual() matcher
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())

describe('Apple', () => {
    let testObject = new Apple();
  
    test('getApple should say apple', () => {
      expect(testObject.getApple()).toEqual('apple');
    });
});