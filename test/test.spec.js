/* eslint-disable no-undef */
import {expect} from 'chai';
import {sayHello} from '../src/test';

describe('index test', () => {
	describe('sayHello function', () => {
		it('should say, say hello', () => {
			expect(sayHello).to.equal('say hello');
		});
	});
    
});