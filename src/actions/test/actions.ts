// import { create } from 'red';

// import * as chai from 'chai';
// import * as sinon from 'sinon';
// const { expect } = chai;

// describe('Actions Factory Test', function () {
// 	let api,
// 		dispatch,
// 		errorSpy,
// 		requestSpy,
// 		successSpy,
// 		test;
// 	beforeEach(() => {
// 		requestSpy = sinon.spy();
// 		successSpy = sinon.spy();
// 		errorSpy = sinon.spy();
// 		test = {
// 			request: requestSpy,
// 			success: successSpy,
// 			error: errorSpy,
// 		};
// 		dispatch = sinon.spy();
// 	});

// 	it('When API is successful', function (done) {
// 		api = sinon.stub().returns(Promise.resolve());
// 		apiActionGroupFactory(test, api)()(dispatch).then(() => {
// 			expect(api.callCount).to.equal(1);
// 			expect(dispatch.callCount).to.equal(2);
// 			expect(requestSpy.callCount).to.equal(1);
// 			expect(successSpy.callCount).to.equal(1);
// 			expect(errorSpy.callCount).to.equal(0);
// 			done();
// 		});
// 	});

// 	it('When API is unsuccessful', function (done) {
// 		api = sinon.stub().returns(Promise.reject(1));
// 		apiActionGroupFactory(test, api)()(dispatch).then(() => {
// 			expect(api.callCount).to.equal(1);
// 			expect(dispatch.callCount).to.equal(2);
// 			expect(requestSpy.callCount).to.equal(1);
// 			expect(successSpy.callCount).to.equal(0);
// 			expect(errorSpy.callCount).to.equal(1);
// 			done();
// 		});

// 	});
// });