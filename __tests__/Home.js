


import 'react-native';
import React from 'react';
import Home from '../app/components/Home';

import {shallow, mount} from "enzyme";
import { shallowToJson } from 'enzyme-to-json';


  import {Text, View} from 'react-native';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

xdescribe("Home test ", () => {
    
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home />
    );

    const treeJson = renderer.create(
      <Home />
    ).toJSON();


    console.log("JSON ", treeJson);
    expect(treeJson).toMatchSnapshot();

  });


  it('renders correctly', () => {
      expect(shallowToJson(shallow(<Home />))).toMatchSnapshot();
  });


  


  it("about default test", ()=> {
      let wrapper = shallow(<Home  />);
      wrapper.setProps({ count: 1 });

      expect(wrapper.find("View").length).toBe(1);
      expect(wrapper.find("Text").length).toBe(2);
      expect(wrapper.find("Button").length).toBe(3);
      expect(wrapper).toMatchSnapshot();

  })



  it("about default test", async ()=> {
    let wrapper = mount(<Home  />);
    wrapper.setProps({ count: 1 });

    expect(wrapper.find("View").length).toBe(1);
    expect(wrapper.find("Text").length).toBe(2);
    expect(wrapper.find("Button").length).toBe(3);
    wrapper.find('Button[title="+1"]').simulate('click');

    wrapper.update();
  // expect(wrapper.find("Text").text()).toContain("Counter: 1");

    expect(wrapper.find('Button[title="+1"]').prop('title')).toEqual("+1")


    console.log("CHECKING STATE");
    expect(wrapper.state("counter")).toBe(1000);


    expect(wrapper).toMatchSnapshot();


  })


  it("Async Test",  ()=> {
    let wrapper = mount(<Home  />);
    wrapper.setProps({ count: 1 });

    let instance = wrapper.instance();
    instance.increment();
    instance.increment();
    instance.increment();

    //wrapper.find('Button[title="+1"]').simulate('click');
    wrapper.find('Button').simulate('click');

    //await wrapper.update();


    console.log("**COUNTER ", wrapper.state("counter"));

    console.log("***TEXT", wrapper.text());
    expect(wrapper.state("counter")).toBe(1003);
    //use at, last, first
    expect(wrapper.find("Text").at(1).text()).toContain("1003");

    //console.log("FULL HTML", wrapper.html());

  });


  let MyView = function MyView(props) {
    let title = "Hello";
    return (
      <View>
        <Text>{title}</Text>
      </View>
      )
  }


  it("about default test", ()=> {
    let wrapper = mount(<MyView  />);
    wrapper.setProps({ count: 1 });

    expect(wrapper.find("View").length).toBe(1);
    expect(wrapper.find("Text").length).toBe(1);
    console.log("**",wrapper.text());
      expect(wrapper.text()).toContain("Hello");
    //expect(wrapper.find("Button").length).toBe(2);
    // expect(wrapper).toMatchSnapshot();

  })




  it("about default test", ()=> {
      let wrapper = shallow(<Home  />);
      let component = wrapper.instance();
      component.increment();
      wrapper.update();
      
      // expect(wrapper.contains(<Text>Counter: {1}</Text>))
      //         .toEqual(true);

      let text = wrapper.find("Text")[1];

      //console.log(text.text());
    // expect(text.text()).toContain("1");
  
  })


});