import { WebSocketConnection } from "../websocket";
import { HaxirOptions } from "../types/haxir";
import {
  onGamePause,
  onGameStart,
  onGameStop,
  onGameTick,
  onGameUnpause,
  onPlayerActivity,
  onPlayerAdminChange,
  onPlayerBallKick,
  onPlayerChat,
  onPlayerJoin,
  onPlayerKicked,
  onPlayerLeave,
  onPlayerTeamChange,
  onPositionsReset,
  onRoomLink,
  onStadiumChange,
  onTeamGoal,
  onTeamVictory,
} from "../actions/events";

export function registerEventsActions(
  websocket: WebSocketConnection,
  room: any,
  opts?: HaxirOptions
) {
  room.onPlayerJoin = function (player) {
    return onPlayerJoin(websocket, opts, { player });
  };

  room.onPlayerLeave = function (player) {
    return onPlayerLeave(websocket, opts, { player });
  };

  room.onTeamVictory = function (scores) {
    return onTeamVictory(websocket, opts, { scores });
  };

  room.onPlayerChat = function (player, message) {
    return onPlayerChat(websocket, opts, { player, message });
  };

  room.onPlayerBallKick = function (player) {
    return onPlayerBallKick(websocket, opts, { player });
  };

  room.onTeamGoal = function (team) {
    return onTeamGoal(websocket, opts, { team });
  };

  room.onGameStart = function (byPlayer) {
    return onGameStart(websocket, opts, { byPlayer });
  };

  room.onGameStop = function (byPlayer) {
    return onGameStop(websocket, opts, { byPlayer });
  };

  room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    return onPlayerAdminChange(websocket, opts, { changedPlayer, byPlayer });
  };

  room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    return onPlayerTeamChange(websocket, opts, { changedPlayer, byPlayer });
  };

  room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    return onPlayerKicked(websocket, opts, {
      kickedPlayer,
      reason,
      ban,
      byPlayer,
    });
  };

  room.onGameTick = function () {
    return onGameTick(websocket, opts, {});
  };

  room.onGamePause = function (byPlayer) {
    return onGamePause(websocket, opts, { byPlayer });
  };

  room.onGameUnpause = function (byPlayer) {
    return onGameUnpause(websocket, opts, { byPlayer });
  };

  room.onPositionsReset = function () {
    return onPositionsReset(websocket, opts, {});
  };

  room.onPlayerActivity = function (player) {
    return onPlayerActivity(websocket, opts, { player });
  };

  room.onStadiumChange = function (newStadiumName, byPlayer) {
    return onStadiumChange(websocket, opts, { newStadiumName, byPlayer });
  };

  room.onRoomLink = function (url) {
    return onRoomLink(websocket, opts, { url });
  };

  room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    return onPositionsReset(websocket, opts, { min, rate, burst, byPlayer });
  };
}
