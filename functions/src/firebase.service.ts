export const parseJson = async (data: any) => {
    return JSON.parse(Buffer.from(data, 'base64').toString());
}

export const parseMessage = async (data: any) => {
    return Buffer.from(data, 'base64').toString();
}