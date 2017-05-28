import { saveSettings } from '../';
import { SETTINGS } from '../../constants/api'


import * as chai from 'chai';
const { expect } = chai;

import * as localforage from 'localforage';


describe('API Test', function () {
	const mySettings: Settings = {
		pressureEnabled: true,
		pressureUnit: 'Pa',
		temperatureEnabled: true,
		temperatureUnit: 'C',
		windSpeedEnabled: false,
		windSpeedUnit: 'm/s'
	}
	beforeEach(() => {

	});

	it('When save is successful', function (done) {
		saveSettings(mySettings).then(async () => {
			const settings = await localforage.getItem(SETTINGS) as Settings;
			expect(settings).to.deep.equal(mySettings);//We are not clearing the local storage
			done();
		});
	});


});