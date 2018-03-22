
import 'react-native';
import React from 'react';
import CartItem from '../app/cart/components/CartItem';

import {shallow, mount} from "enzyme";

import {Text, Button} from "react-native";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

xit('CartItem Snapshot', () => {
  let item =  {id: 1, name: 'Product 1', price: 100, qty: 10};
  const tree = renderer.create(
    <CartItem  item={item} />
  );

  const treeJson = tree.toJSON();


  console.log("JSON ", treeJson);
  expect(treeJson).toMatchSnapshot();

  const testInstance = tree.root;

  testInstance.instance.handleChange(null);
  expect(testInstance.findAllByType(Button)[0].props.title).toBe('Update');

  
  // expect(testInstance.findByProps({id: "qty"}).children).toEqual('Qty: 10');

  expect(testInstance.findAllByType(Text)[1].children).toBe(' Qty: ');



});

xit("CartItem Test",  ()=> {
    let item =  {id: 1, name: 'Product 1', price: 100, qty: 10};

    let wrapper = shallow(<CartItem item={item} />);
    wrapper.setProps({ item: item  });
    
  
    let instance = wrapper.instance();
     
    //wrapper.find('Button[title="+1"]').simulate('click');
    //wrapper.find('Button').simulate('click');
  
    //await wrapper.update();
  
    // console.log("**COUNTER ", wrapper.state("counter"));
  
    // console.log("***TEXT", wrapper.text());
    // expect(wrapper.state("counter")).toBe(1003);
    // //use at, last, first
    // expect(wrapper.find("Text").at(1).text()).toContain("1003");
  
    //console.log("FULL HTML", wrapper.html());
    
  });
  