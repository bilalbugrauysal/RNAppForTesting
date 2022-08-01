import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container} testID='AppContainer'>
			<Text testID='Introduction'>Open up App.js to start working on your app!</Text>
			<View style={styles.priceContainer}>
				<Text testID='MyPrice' style={styles.fontStyle}>
					5,80 €
				</Text>
			</View>
			<Text testID='MyPercentage' style={styles.fontStyle}>
				-30%
			</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fontStyle: {
		fontFamily: 'EuclidCircularB-SemiBold',
		fontSize: 16,
		lineHeight: 24,
		color: '#2F313F',
	},
	priceContainer: {
		flexDirection: 'column',
		paddingLeft: 8,
	},
});
