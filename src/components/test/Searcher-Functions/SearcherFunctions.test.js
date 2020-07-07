import React from 'react';
import { validate, checkUserExist } from './SearcherFunctions';

describe('Searcher functions', () => {
  it('should validate input successfully', () => {
    const isValid = validate('username');
    expect(isValid).toBe(true)
  })

  it('should reject incorrect input', () => {
    const isValid = validate('');
    expect(isValid).toBe(false)
  })
})

describe('GET Github user', () => {
  it('should return that user exist', async () => {
    const userExist = await checkUserExist('mongchanghsi');
    expect(userExist).toBe(true);
  })

  it('should return that user does not exist', async () => {
    const userExist = await checkUserExist('mong2chang2hsi2');
    expect(userExist).toBe(false);
  })
})
