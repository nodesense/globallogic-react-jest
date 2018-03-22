import React, {PureComponent} from "react";

import {View, Text, FlatList, ScrollView} from "react-native";

import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
        
    }

    componentWillReceiveProps(nextProps) {
        console.log("cart list receive next ", nextProps.items.length);
        console.log("cart list receive current ", this.props.items.length);
     }

    //called when
    //when parent render called 
    //when this.setState called
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("cart list should update");
       
    //     //shalow compare
    //     if (nextProps.items !== this.props.items) {
    //         return true; //calls render
    //     }

    //     return false; //do not call render
    // }

    _renderItem({item}) {
        console.log("render item");
        return (
            <CartItem item={item} 
               onRemove={this.props.onRemove}
               onUpdate={this.props.onUpdate}
            >
            </CartItem>
        )
    }

    _keyExtractor (item, index) {
        console.log("key extract")
        return item.id;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.items != this.props.items)
    //         return true;

    //     return false;
    // }

    render() {
        let {items} = this.props;
        console.log("cartlist render", items.length);
        
        return (
            <View>
                <Text>Cart List - {items.length}</Text>
 
            <FlatList 
                data={items}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                
                >

                </FlatList> 

                {/* <ScrollView>

                    {
                        items.map ( item => (
                            <CartItem item={item} key={item.id} >
                            </CartItem>
                        ))
                    }

                </ScrollView> */}


            </View>
        )
    }
}