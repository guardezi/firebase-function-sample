import { pubsub } from 'firebase-functions';
import { NotificationController } from './cloud.messaging.controller';

export const notificationPublished = pubsub.topic('cloudmessage') .onPublish(NotificationController);