import { createWebsocketConnection } from "./src/websocket";
import { API_OPEN_ROOM } from "./src/types/api";
import { HaxirOptions } from "./src/types/haxir";
import { registerEventsActions } from "./src/helpers/ws";
import { openRoom } from "./src/actions/api";

function haxir(uri?: string, opts?: HaxirOptions) {
  const websocket = createWebsocketConnection(
    uri,
    opts?.hasOwnProperty("websocket") ? opts?.websocket : undefined
  );

  websocket.on(API_OPEN_ROOM, (data: any) => {
    (window as any).room = openRoom(data, opts);

    registerEventsActions(websocket, (window as any).room, opts);
  });
}

export default haxir;
