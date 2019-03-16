import React from 'react';
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {

    const {buttonStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={buttonStyle}>
                {props.children}

            </Text>
        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        textAlign: 'center',
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        minWidth: '100%',





    }
};


export {Button};

