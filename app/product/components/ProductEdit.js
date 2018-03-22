import React, {Component} from "react";

import {TextInput, Text, View, Button, Alert} from "react-native";

export default class ProductEdit extends Component {
    
    static navigationOptions = {
        title: 'Product Edit'
    }
   
    constructor(props) {
        super(props);

        this.state = {
            name: 'product name',
            year: '',
            brand: {}
        }
    }

    componentDidMount() {
        const {state} = this.props.navigation;

        //id is from product list
        let id = state.params.id;
          
        //async actions/thunk
        //get product by id
        //get brand by brandid
        //this.props.actions.fetchProduct(id);

        //saga
        this.props.actions.fetchProductRequested(id);
    }

    handleChange(fieldName, value) {
        // this.setState({
        //     [fieldName]: value 
        // })

         let clone = Object.assign({}, 
                                   this.props.product,
                                   {
                                       [fieldName]: value
                                   });

         this.props.actions.editProduct(clone);

    }

    render() {
        return (
            <View> 
                <Text> Brand Name: {this.props.brand.name} </Text>
                <Text> Name </Text>
                <TextInput value={this.props.product.name}
                           onChangeText={ (text)=> this.handleChange('name', text)}
                 >

                </TextInput>

                <Text> Year </Text>
                <TextInput
                    value={this.props.product.year.toString()}
                    
                    onChangeText={ (text)=> this.handleChange('year', text)}
                 >

                </TextInput>
            </View>
        )
    }
}