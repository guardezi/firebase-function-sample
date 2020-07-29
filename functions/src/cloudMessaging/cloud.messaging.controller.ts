import { logInfo } from "../log"
import { parseJson } from "../firebase.service";
// import { sendMessages, buildMessage } from "./cloud.messaging.service";


export const NotificationController = async (message: any, context: any) => {
    logInfo('NotificationController', 'start');
    const data = await parseJson(message.data);
    // o data esta em base64 fazer o decode antes de usar o json..
    logInfo('NotificationController', `Mensagem recebida: ${JSON.stringify(data)}`);
    // const messages = await buildMessage(data);
    // await sendMessages(messages);
    return;
}