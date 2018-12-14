const request = require('supertest')
describe('GET /user/:id', function() {  
  it('returns a user', function() {
    // newer mocha versions accepts promises as well
    return request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200, {
        id: '1',
        name: 'John Math'
      }, done)
  })
})