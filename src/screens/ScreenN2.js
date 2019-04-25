import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class ScreenN2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate('ScreenN1')}
                        title="Screen N2"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});