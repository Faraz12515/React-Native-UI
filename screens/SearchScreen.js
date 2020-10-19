import React, { useState, useEffect } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';

// import yelp from '../api/yelp';

export default function SearchScreen() {
	const [isLoading, setLoading] = useState(true);
	const [term, setTerm] = useState('');
	const [data, setData] = useState([]);

	// const filterResultsByTitle=(title) =>{
	//     return data.filter(item=>{
	//         return item.title === title
	//     })
	// }
	//acha talha json file kese bana un??? kiun bnanyar ye data fetch kerte hain to images nhi hoti mein images dal du ga, images bhi fetch hojaayngi
	// krwani hain? han yar is link per nhi thi images
	//akoi achi website data fetch kerwane ki????
	useEffect(() => {
		fetch('https://reactnative.dev/movies.json')
			.then((response) => response.json())
			.then((json) => setData(json.movies))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={styles.background}>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi()}
			/>
			<Text>Search Screen</Text>

			<View style={{ flex: 1, padding: 24 }}>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={data}
						keyExtractor={({ id }, index) => id}
						renderItem={({ item }) => (
							<View>
								<Text style={{ color: '#222', fontSize: 20 }}>
									{item.title}
								</Text>
								<Text style={{ color: '#f60085', fontSize: 20 }}>
									{item.releaseYear}
								</Text>
							</View>
						)}
					/>
				)}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});
