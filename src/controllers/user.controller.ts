import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { v4 as uuidv4 } from 'uuid';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userRepo = getRepository(User);
        const users = await userRepo.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepo = getRepository(User);
        const user = await userRepo.findOne({ id: parseInt(id) });
        res.status(200).json(user);
    } catch (e) {
        res.status(500).send(e);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const userRepo = getRepository(User);
        const user = userRepo.create({
            username: req.body.username,
            token: uuidv4(),
            permissions: req.body.permissions
        });
        await userRepo.save(user).catch((e) => res.status(500).send(e));
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
};
