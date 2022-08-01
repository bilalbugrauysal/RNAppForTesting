const testIDs = {
	App: 'AppContainer',
	Introduction: 'Introduction',
	MyPrice: 'MyPrice',
	MyPercentage: 'MyPercentage',
};

const sleep = (timeout) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res();
		}, timeout);
	});
};

describe('Example', () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have welcome screen', async () => {
		const introduction = element(by.id(testIDs.Introduction));
		await expect(introduction).toBeVisible();
		await expect(introduction).toHaveText('Open up App.js to start working on your app!');

		const myPrice = element(by.id(testIDs.MyPrice).withAncestor(by.id(testIDs.App)));
		await expect(myPrice).toBeVisible();
		await expect(myPrice).toHaveText('5,80 €');

		console.log('Wait 2 sec');
		await sleep(2000);
		console.log('Wait done');

		const myPercentage = element(by.id(testIDs.MyPercentage).withAncestor(by.id(testIDs.App)));
		await expect(myPercentage).toBeVisible();
		await expect(myPercentage).toHaveText('-30%');
	});
});
