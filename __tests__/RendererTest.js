
import 'react-native';
import React from 'react';
import Home from '../app/components/Home';

import {shallow, mount} from "enzyme";
import { shallowToJson } from 'enzyme-to-json';


import {Text, View, Button} from 'react-native';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

fdescribe("Home test ", () => {
    
  xit('renders correctly', () => {
    const tree = renderer.create(
      <Home />
    );

    const treeJson = renderer.create(
      <Home />
    ).toJSON();


    console.log("JSON ", treeJson);
    expect(treeJson).toMatchSnapshot();

  });


  it('Home with increment', () => {
    const tree = renderer.create(
      <Home />
    );

    const treeJson = renderer.create(
      <Home />
    ).toJSON();

    let root = tree.root;

    //let instance = tree.getInstance()
    let instance = root.instance;

    instance.increment();
    instance.increment();
    instance.increment();
    // tree.update();

    //expect(treeJson).toMatchSnapshot();
    expect(instance.state.counter).toBe(1003);

    root.findByType(Button).props.onPress();

    expect(instance.state.counter).toBe(1004);

    let dump = tree.toJSON();
    expect(dump).toMatchSnapshot();
    root.findByType(Button).props.onPress();

    dump = tree.toJSON();
    expect(dump).toMatchSnapshot();

  });

});