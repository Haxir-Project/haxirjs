import { createWebsocketConnection } from "./src/websocket";
import { API_OPEN_ROOM } from "./src/types/events";
import { HaxirOptions } from "./src/types/haxir";
import { registerHandlers } from "./src/helpers/ws";
import { parseJson } from "./src/helpers/json";

function haxir(uri?: string, opts?: HaxirOptions) {
  const websocket = createWebsocketConnection(
    uri,
    opts?.hasOwnProperty("websocket") ? opts?.websocket : undefined
  );

  websocket.on(API_OPEN_ROOM, (data: any) => {
    const config = parseJson(data.config);
    const room = (window as any).HBInit(config);

    registerHandlers(websocket, room, opts);
  });
}

export default haxir;
