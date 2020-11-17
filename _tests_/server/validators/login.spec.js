/**
 
 * @jest-environment node

 */

 import loginValidator from '@validators/login'

 describe('The login validator', () => {
   it('should call the next function when validation succeeds', async() => {
     const req = {
         body: {
             email: 'a@b.com',
             password: 'password'
         }
     }

     const res = {}

    // mock - we will be able to tell if this functin was called, the # of times it was called, the arguments it was called w, etc.
     const next = jest.fn()

     await loginValidator(req, res, next)

     expect(next).toHaveBeenCalled()
   })
 })