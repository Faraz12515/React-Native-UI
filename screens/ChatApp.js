import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default class ChatApp extends Component {
  state = {
    convo: [
      {
        id: 0,
        message: 'Hey',
        time: 12,
        user: 'Customer',
      },
      {
        id: 1,
        message: [],
        time: '12:03',
        user: 'You',
        custom: [
          'kia haal hain?',
          'Theek',
          'Alhamdulillah',
          'Acha',
          'Okay',
          'Set',
        ],
      },
    ],
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handlePress = () => {
    if (this.state.message !== '') {
      console.log('working');
      this.state.convo[1].message.push(this.state.message);
    } else {
      console.log('message ->', this.state.message);
    }

    const convo = this.state.convo;
    this.setState({
      convo,
    });
  };

  chatBot = (id) => {
    console.log(id);
    this.state.convo[1].message.push(id);
    const convo = this.state.convo;
    this.setState({
      convo,
    });
  };

  render() {
    return (
      <View style={styles.app}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            width: '90%',
            borderRadius: 10,
            alignSelf: 'center',
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20 }}>Chat</Text>
        </View>
        <ScrollView>
          <View>
            {this.state.convo.map((id, index) => {
              return this.state.convo[index].id < 1 ? (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '60%',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>
                      {this.state.convo[index].user}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                      {this.state.convo[index].time} min ago
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#fff',

                      width: '60%',
                      borderRadius: 10,
                      marginHorizontal: 5,
                      marginVertical: 5,

                      // alignSelf: "flex-end"
                    }}
                  >
                    <Text
                      style={{
                        color: '#191919',
                        opacity: 0.8,
                        fontSize: 15,
                        padding: 10,
                        marginHorizontal: 10,
                      }}
                    >
                      {this.state.convo[index].message}
                    </Text>
                  </View>
                </View>
              ) : (
                this.state.convo[index].message.map((reply, i) => {
                  return (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '60%',
                          alignSelf: 'flex-end',
                          justifyContent: 'space-around',
                        }}
                      >
                        <Text style={{ fontWeight: 'bold' }}>
                          {this.state.convo[index].user}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                          {this.state.convo[index].time} min ago
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#ED671E',

                          width: '60%',
                          borderRadius: 10,
                          marginHorizontal: 5,
                          alignSelf: 'flex-end',
                        }}
                      >
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            padding: 10,
                            marginHorizontal: 10,
                          }}
                        >
                          {this.state.convo[index].message[i]}
                        </Text>
                      </View>
                    </View>
                  );
                })
              );
            })}
          </View>
        </ScrollView>
        <View
          style={{
            height: 60,
          }}
        >
          <ScrollView horizontal={true}>
            <View
              style={{
                height: 50,
                backgroundColor: '#fff',
                flexDirection: 'row',
                marginHorizontal: 5,
                // alignSelf: "flex-end"
              }}
            >
              {this.state.convo[1].custom.map((reply, i) => {
                return (
                  <TouchableOpacity>
                    <Text
                      onPress={() => this.chatBot(reply)}
                      style={{
                        borderRadius: 10,

                        backgroundColor: '#ED671E',
                        color: '#fff',
                        fontSize: 15,
                        padding: 10,
                        width: '90%',
                        marginHorizontal: 10,
                        // marginVertical: 10
                      }}
                    >
                      {this.state.convo[1].custom[i]}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 15,
              flex: 3,
              borderRadius: 10,
              marginHorizontal: 5,
            }}
          >
            <TextInput
              multiline
              onChange={this.handleChange}
              value={this.state.message}
              placeholder='type a message'
            />
          </View>
          <TouchableOpacity
            onPress={this.handlePress}
            style={{
              backgroundColor: '#fff',
              padding: 15,
              marginHorizontal: 5,
              borderRadius: 10,
              // marginVertical: 10
            }}
          >
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
});

