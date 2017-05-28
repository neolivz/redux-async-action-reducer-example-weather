import { Temperature } from '../'
import * as style from '../style';
// import * as React from 'react';

// See README for discussion of chai, enzyme, and sinon
import * as chai from 'chai';
import { shallow } from 'enzyme';
import * as chaiEnzyme from 'chai-enzyme';
// import * as sinon from 'sinon';
const { expect } = chai;

chai.use(chaiEnzyme());

describe('renderField', () => {
    let subject;
    context("when in an error state", () => {
        it("renders an error message for the input", () => {
            const temp = 12 + 273;
            const temp_max = 16 + 273;
            const temp_min = 9 + 273;
            const unit = 'C'
            const element = Temperature({ temp, temp_max, temp_min, unit })
            subject = shallow(element)
            const tempDiv = subject.find(`.${style.currentTemperature}`).first()
            expect(tempDiv).to.exist
        })
    })


})

