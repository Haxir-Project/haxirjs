import { parseJson } from "../helpers/json";
import { info, warn } from "../helpers/logger";

export type Options = string | string[] | undefined;

export interface WebSocketConnection {
  push(eventName: string, content: any): void;
  on(eventName: string, content: any): void;
  websocket: WebSocket;
}

function createConnection(
  ws: string = defaultWebsocketUrl,
  opts?: Options
): WebSocket {
  const connection = new WebSocket(ws, opts);

  connection.onopen = () => info("Succesfully connected.");

  return connection;
}

function retryConnection(
  ws: string = defaultWebsocketUrl,
  opts?: Options
): WebSocket {
  warn("Trying to reconnect...");

  const connection = new WebSocket(ws, opts);

  return connection;
}

export const defaultWebsocketUrl = "ws://localhost:4000/ws";
export function createWebsocketConnection(
  ws: string = defaultWebsocketUrl,
  opts?: Options
): WebSocketConnection {
  let websocket = createConnection(ws, opts);

  function push(eventName: string, content: any) {
    websocket.send(JSON.stringify({ event: eventName, ...content }));
  }

  function on(eventName: string, callback: (content: MessageEvent) => void) {
    return websocket.addEventListener("message", (event) => {
      const data = parseJson(event.data);
      if (!data.hasOwnProperty("event") && data.event !== eventName) return;

      callback(data);
    });
  }

  websocket.onclose = () => {
    const tryReconnect = setInterval(() => {
      websocket = retryConnection(ws, opts);

      websocket.onopen = () => {
        info("Successfully reconnected.");

        clearInterval(tryReconnect);
      };
    }, 3000);
  };

  return {
    push,
    on,
    websocket,
  };
}
