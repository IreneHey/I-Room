import { Request, Response } from 'express';
import  getAllUsers  from './getAllUsers';


describe('Get all users request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    beforeEach(() =>{
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        }
    });
    test(' test 200 - users ', () => {
        const expectedStatusCode = 200;
        const expectedResponse = {
            users : [
                {
                    name: 'John',
                    age: 26
                },
                {
                    name: 'Ted',
                    age: 30
                }
            ]
        };
        getAllUsers( mockRequest as Request, mockResponse as Response );

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedResponse);
    });
});