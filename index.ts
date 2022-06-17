import { createWebsocketConnection } from "./src/websocket";
import { API_OPEN_ROOM } from "./src/types/api";
import { HaxirOptions } from "./src/types/haxir";
import { registerApiActions, registerEventsActions } from "./src/helpers/ws";
import { openRoom } from "./src/actions/api";

function haxir(uri?: string, opts?: HaxirOptions) {
  const websocket = createWebsocketConnection(
    uri,
    opts?.hasOwnProperty("websocket") ? opts?.websocket : undefined
  );

  websocket.on(API_OPEN_ROOM, (data: any) => {
    const room = openRoom(data, opts);

    registerApiActions(websocket, room, opts);
    registerEventsActions(websocket, room, opts);
  });
}

export default haxir;
