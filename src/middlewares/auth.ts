import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const verifyRead = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string = req.headers['authorization-token'].toString();
        const userRepo = getRepository(User);
        const user = await userRepo.findOneOrFail({ token: token });
        user.isAdmin ? next() : user.permissions.includes('read') ? next() : res.status(401).send({ message: 'You dont have enouge perrmisions' });
    } catch (e) {
        res.status(500).send({ message: 'User doesnt exists' });
    }
};

const verifyCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string = req.headers['authorization-token'].toString();
        const userRepo = getRepository(User);
        const user = await userRepo.findOneOrFail({ token: token });
        user.isAdmin ? next() : user.permissions.includes('create') ? next() : res.status(401).send({ message: 'You dont have enouge perrmisions' });
    } catch (e) {
        res.status(500).send({ message: 'User doesnt exists' });
    }
};

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string = req.headers['authorization-token'].toString();
        const userRepo = getRepository(User);
        const user = await userRepo.findOneOrFail({ token: token });
        user.isAdmin ? next() : res.status(401).send({ message: 'Not authorized.' });
    } catch (e) {
        res.status(500).send({ message: 'User doesnt exists' });
    }
};

export { verifyRead, verifyCreate, verifyAdmin };
