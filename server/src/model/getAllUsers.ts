import { Request, Response } from 'express';

export default function getAllUsers(request: Request,response: Response){
    const users = [
        {
            name: 'John',
            age: 26
        },
        {
            name: 'Ted',
            age: 30
        }
    ];
    response.statusCode = 200;
    response.send({ users });
}