import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen Components//
import HomeScreen from './routes/HomeScreen';
// import CounterScreen from "./screens/CounterScreen";
import ColorScreen from './screens/ColorScreen';
// import TextInputScreen from "./screens/TextInputScreen";
// import Layout from "./screens/Layout";
// import SquareScreen from "./screens/SquareScreen";
// import AdditionScreen from "./screens/AdditionScreen";
// import MultiplicationCounter from "./screens/MultiplicationCounter";
// import TextScreen from "./screens/TextScreen";
// import FlatListScreen from "./screens/FlatListScreen";
// import Icons from "./screens/Icons";
// import FlatListIcons from "./screens/FlatListIcons";
import FlatListPractice from './screens/FlatListPractice';
import Header from './routes/Header';
import WhatsAppList from './screens/WhatsAppList';
import YoutubeMenu from './screens/YoutubeMenu';
import Ubuntu from './screens/Ubuntu';
import ModalScreen from './screens/ModalScreen';
import ColorChange from './screens/ColorChange';
import ONandOFF from './screens/ONandOFF';
import Info from './screens/Info';
import TextInputPractice from './screens/TextInputPractice';
import LoaderScreen from './screens/LoaderScreen';
import Loader from './routes/Loader';
import TextInputMap from './screens/TextInputMap';
import Skype from './screens/Skype';
import WhatsAppChat from './screens/WhatsAppChat';
import ChatApp from './screens/ChatApp';
import Messenger from './screens/Messenger';
import MessengerChat from './screens/MessengerChat';
import People from './screens/People';
import Shopping from './Todo App/Shopping';

import SearchBar from './components/SearchBar';
import SearchScreen from './screens/SearchScreen';

import {
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	Ionicons,
	MaterialCommunityIcons,
	Entypo,
} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName='Shopping'>
			<Drawer.Screen name='loader' component={Loader} />
			<Drawer.Screen name='Home' component={HomeScreen} />
			{/*
			<Drawer.Screen name='Counter' component={CounterScreen} />
			<Drawer.Screen name='Color' component={ColorScreen} />
			<Drawer.Screen name='TextInput' component={TextInputScreen} />
			<Drawer.Screen name='Layout' component={Layout} /> */}
			{/*<Drawer.Screen name='Square' component={SquareScreen} />
			<Drawer.Screen name='Addition' component={AdditionScreen} />
			<Drawer.Screen name='Multiplication' component={MultiplicationCounter} />
			<Drawer.Screen name='Text' component={TextScreen} /> }
			<Drawer.Screen name="Icons" component={Icons} />
			<Drawer.Screen name="FlatList" component={FlatListIcons} />*/}

			<Drawer.Screen name='FlatPractice' component={FlatListPractice} />
			<Drawer.Screen name='WhatsApp' component={WhatsAppList} />
			<Drawer.Screen name='Youtube' component={YoutubeMenu} />
			<Drawer.Screen name='Ubuntu' component={Ubuntu} />
			<Drawer.Screen name='Modal' component={ModalScreen} />
			<Drawer.Screen name='Loader' component={LoaderScreen} />
			<Drawer.Screen name='Shopping' component={Shopping} />
		</Drawer.Navigator>
	);
}

// function BottomTabRoutes() {
//   return (
//     <Tab.Navigator
//       initialRouteName='Messenger'
//       tabBarOptions={{
//         activeTintColor: '#fff',
//         inactiveTintColor: '#222',
//         activeBackgroundColor: '#2a2a2a',
//       }}
//     >

//         <Tab.Screen
//         name='MessengerChat'
//         component={MessengerChat}
//         options={{
//           tabBarLabel: 'Chats',

//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons
//               name='chat'
//               size={26}
//               color={color}
//             />
//           ),

//         }}
//       />

//         <Tab.Screen
//         name='People'
//         component={People}
//         options={{
//           tabBarLabel: 'People',

//           tabBarIcon: ({ color }) => (
//             <MaterialIcons
//               name='people'
//               size={26}
//               color={color}
//             />
//           ),

//         }}
//       />
//           </Tab.Navigator>
//   );
// }
// <Tab.Screen
//   name='Skype'
//   component={Skype}
//   options={{
//     tabBarLabel: 'Skype',
//     tabBarIcon: ({ color }) => (
//       <Entypo
//         name='skype'
//         size={24}
//         style={{ color: 'dodgerblue' }}
//         color={color}
//       />
//     ),
//   }}
// />
//   <Tab.Screen
//   name='WhatsAppList'
//   component={WhatsAppList}
//   options={{
//     tabBarLabel: 'WhatsApp',
//     tabBarIcon: ({ color }) => (
//     <Ionicons name="logo-whatsapp" size={25}  style={{ color: '#43c153' }}
//         color={color} />

//     ),
//   }}
// />
// <Tab.Screen
//   name='Messenger'
//   component={Messenger}
//   options={{
//     tabBarLabel: 'Messenger',
//     tabBarIcon: ({ color }) => (
//     <FontAwesome5 name="facebook-messenger" size={25}  style={{ color: 'dodgerblue' }}
//         color={color} />

//     ),
//   }}
// />

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none' initialRouteName={'Home'}>
				<Stack.Screen name='Home' component={SearchScreen} />
				<Stack.Screen name='Color' component={ColorChange} />
				<Stack.Screen name='ON' component={ONandOFF} />
				<Stack.Screen name='Info' component={Info} />
				<Stack.Screen name='TextInput' component={TextInputPractice} />
				<Stack.Screen name='TextInputMap' component={TextInputMap} />
				<Stack.Screen name='Skype' component={Skype} />
				<Stack.Screen name='WhatsAppChat' component={WhatsAppChat} />
				<Stack.Screen name='ColorScreen' component={ColorScreen} />
				<Stack.Screen name='ChatApp' component={ChatApp} />
				<Stack.Screen name='Messenger' component={Messenger} />
				<Stack.Screen name='MessengerChat' component={MessengerChat} />
				<Stack.Screen name='People' component={People} />
				<Stack.Screen name='SearchBar' component={SearchBar} />
				<Stack.Screen name='SearchScreen' component={SearchScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
