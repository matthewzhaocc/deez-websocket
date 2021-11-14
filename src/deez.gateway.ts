import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class DeezGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    try {
      if (payload?.deez === 'nuts') {
        return 'gottem';
      } else {
        return payload;
      }
    } catch (e) {
      return payload;
    }
  }
}
