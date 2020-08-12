//Import React
import React, { useState } from 'react';

//Import all required component
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Keyboard,
    Label,
} from 'react-native';

const SignIn = props => {
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }

        if (userEmail == "abc@gmail.com" && userPassword == "12345") {
            console.log('Login Success');
        } else {
            setLoading(false);
            setErrortext('Please check your email id or password');
        }
    };

    return (
        <View style={styles.mainBody}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.SectionStyle}>
                    <Label text="Email" />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={UserEmail => setUserEmail(UserEmail)}
                        underlineColorAndroid="#FFFFFF"
                        placeholder="your@address.net"
                        placeholderTextColor="#F6F6F7"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        ref={ref => {
                            this._emailinput = ref;
                        }}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            this._passwordinput && this._passwordinput.focus()
                        }
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <Label text="Password" />
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={UserPassword => setUserPassword(UserPassword)}
                        underlineColorAndroid="#FFFFFF"
                        placeholder="Password"
                        placeholderTextColor="#F6F6F7"
                        keyboardType="default"
                        ref={ref => {
                            this._passwordinput = ref;
                        }}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                    />
                </View>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}> {errortext} </Text>
                ) : null}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonTextStyle}>Sign-In</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default SignIn;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'right',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});