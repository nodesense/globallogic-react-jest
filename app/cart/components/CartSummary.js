import React from "react";

import {View, Text} from "react-native";

import PropTypes from "prop-types";

export default function CartSummary({amount, total}) {
    console.log("cart summary render");
    //props.amount = 100;

    //let {amount} = props;


    return (
        <View>
            <Text> Amount {amount} </Text>
            <Text> Total Items {total} </Text>
        </View>
    )
}

CartSummary.propTypes = {
    amount: PropTypes.number.isRequired
}