/**
 
 * @jest-environment node

 */

 import loginValidator from '@validators/login'

 class Response {
   status(status) {
     this.status = status

     return this
   }

   json(data) {
     return data
   }
 }

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

   it('should return a 422 if validation fails', async() => {
      const req = {
        body: {
          password: 'password'
        }
      }
      const next = jest.fn()
      const res = new Response()

      const statusSpy = jest.spyOn(res, 'status')
      const jsonSpy = jest.spyOn(res, 'json')

      await loginValidator(req, res, next)

      expect(statusSpy).toHaveBeenCalledWith(422)

      expect(jsonSpy).toHaveBeenCalled()

   })
 })