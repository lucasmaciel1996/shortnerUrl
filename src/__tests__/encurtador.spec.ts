import request from 'supertest';
import app from '../app';

describe('POST /encurtador ', () => {
  it('Create new URL Shortener', () => {
    // TODO criar nova url encurtada
    expect(200).toBe(200);
  });

  it('Get URL', () => {
    // TODO validar se url é invalida
    expect(404).toBe(404);
  });
});
