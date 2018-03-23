import 'react-native';
import React from 'react';
 
import {shallow, mount} from "enzyme";

import {View, Text, Button} from "react-native";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import ShallowRenderer from 'react-test-renderer/shallow';

function Subcomponent() {
    return <View></View>
}

function MyComponent() {
    let t = "bar";
    let title = "Title"
    return (
      <View>
        <Text className="heading" >{title}</Text>
        <Subcomponent foo={t} />
      </View>
    );
  }

  fit("shallow renderer", () => {

        // in your test:
        const renderer = new ShallowRenderer();
        renderer.render(<MyComponent />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe(View);
        expect(result.props.children).toEqual([
        <Text className="heading">Title</Text>,
        <Subcomponent foo="bar" />
        ]);
 

  })

  xit("renderer ", () => {

        const tree = renderer.create(
            <MyComponent />
          );
 
        expect(tree.root).toEqual([
          <Text className="heading">Title</Text>,
          <Subcomponent foo="bar" />
          ]);
  });