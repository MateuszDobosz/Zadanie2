import { Request, Response } from 'express';
import fs from 'fs';
import readline from 'readline-promise';
import { splitLine } from '../utils/readLogs';

const getLogById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const logs = [];

    const rl = readline.createInterface({
        input: fs.createReadStream('./src/logs/events.log'),
        terminal: false
    });

    await rl.forEach((line) => {
        logs.push(splitLine(line));
    });
    const log = logs.filter((log) => log.uuid === id);
    log.length !== 0 ? res.status(200).json(log) : res.status(500).json({ message: `Can't find log with uuid: ${id}` });
};

const getLogs = async (req: Request, res: Response) => {
    try {
        let { from, to } = req.query;

        const logs = [];

        const rl = readline.createInterface({
            input: fs.createReadStream('./src/logs/events.log'),
            terminal: false
        });

        await rl.forEach((line) => {
            logs.push(splitLine(line));
        });

        from ? null : (from = logs[0].timestamp);
        to ? null : (to = logs[logs.length - 1].timestamp);

        const filteredLogs = logs.filter((log) => log.timestamp >= new Date(parseInt(from.toString())) && log.timestamp <= new Date(parseInt(to.toString())));
        filteredLogs.length !== 0 ? res.status(200).send(filteredLogs) : res.status(500).send({ message: 'Cant find logs with this date' });
    } catch (e) {
        res.status(500).send(e);
    }
};

export { getLogById, getLogs };
