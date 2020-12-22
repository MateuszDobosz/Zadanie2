export const splitLine = (line: string) => {
    const splitedLine = line.split(' ');
    // const timestamp = new Date(parseInt(splitedLine[0].slice(1, -1)));
    const timestamp = splitedLine[0].slice(1, -1);
    const uuid = splitedLine[1].slice(1, -1);
    const type = splitedLine[2].slice(1, -1);
    const message = splitedLine.slice(3).join(' ');
    const log = {
        timestamp,
        uuid,
        type,
        message
    };
    return log;
};
