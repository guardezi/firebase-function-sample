import { messaging } from "firebase-admin";
import { logInfo } from "../log";



export const sendMessages = async (data: any) => {
    try {
        const response = await messaging().sendAll(data);
        logInfo('sendMessage', `Mensagem enviada com sucesso. Response: ${response}`);
        return;
    } catch (error) {
        throw error;
    }
}

export const buildMessage = async (data: any) => {
    try {
        logInfo('buildMessage', `data: ${JSON.stringify(data)}`);
        const messages: any[] = [];
        return messages;
    } catch (error) {
        throw error;
    }
}