import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    state = {
        name: '',
    };
    render () {
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name: 
                </Text>
                <TextInput 
                style={styles.nameInput} 
                placeholder = "Gipsz Jakab"
                onChangeText={(text) => {
                    this.setState({
                        name: text,
                    });
                }}
                value={this.state.name}
                />
                <TouchableOpacity 
                    onPress={() => { 
                        alert(this.state.name)
                    // navigate to chat screen and pass it the name
                    }}
                > 
                
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        padding: 10,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
    }
})

export default Home;