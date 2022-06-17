import { debugFunctionHandled } from "../helpers/logger";
import {
  EVENT_ON_GAME_PAUSE,
  EVENT_ON_GAME_START,
  EVENT_ON_GAME_STOP,
  EVENT_ON_GAME_TICK,
  EVENT_ON_GAME_UNPAUSE,
  EVENT_ON_KICK_RATE_LIMIT_SET,
  EVENT_ON_PLAYER_ACTIVITY,
  EVENT_ON_PLAYER_ADMIN_CHANGE,
  EVENT_ON_PLAYER_BALL_KICK,
  EVENT_ON_PLAYER_CHAT,
  EVENT_ON_PLAYER_JOIN,
  EVENT_ON_PLAYER_KICKED,
  EVENT_ON_PLAYER_LEAVE,
  EVENT_ON_PLAYER_TEAM_CHANGE,
  EVENT_ON_POSITIONS_RESET,
  EVENT_ON_ROOM_LINK,
  EVENT_ON_STADIUM_CHANGE,
  EVENT_ON_TEAM_GOAL,
  EVENT_ON_TEAM_VICTORY,
} from "../types/events";
import { HaxirOptions } from "../types/haxir";
import { WebSocketConnection } from "../websocket";

export const onPlayerJoin = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_JOIN, data);

  if (opts?.debug) debugFunctionHandled(onPlayerJoin);
};

export const onPlayerLeave = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_LEAVE, data);

  if (opts?.debug) debugFunctionHandled(onPlayerLeave);
};

export const onTeamVictory = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_TEAM_VICTORY, data);

  if (opts?.debug) debugFunctionHandled(onTeamVictory);
};

export const onPlayerChat = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_CHAT, data);

  if (opts?.debug) debugFunctionHandled(onPlayerChat);
};

export const onPlayerBallKick = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_BALL_KICK, data);

  if (opts?.debug) debugFunctionHandled(onPlayerBallKick);
};

export const onTeamGoal = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_TEAM_GOAL, data);

  if (opts?.debug) debugFunctionHandled(onTeamGoal);
};

export const onGameStart = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_GAME_START, data);

  if (opts?.debug) debugFunctionHandled(onGameStart);
};

export const onGameStop = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_GAME_STOP, data);

  if (opts?.debug) debugFunctionHandled(onGameStop);
};

export const onPlayerAdminChange = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_ADMIN_CHANGE, data);

  if (opts?.debug) debugFunctionHandled(onPlayerAdminChange);
};

export const onPlayerTeamChange = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_TEAM_CHANGE, data);

  if (opts?.debug) debugFunctionHandled(onPlayerTeamChange);
};

export const onPlayerKicked = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_KICKED, data);

  if (opts?.debug) debugFunctionHandled(onPlayerKicked);
};

export const onGameTick = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_GAME_TICK, data);

  if (opts?.debug) debugFunctionHandled(onGameTick);
};

export const onGamePause = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_GAME_PAUSE, data);

  if (opts?.debug) debugFunctionHandled(onGamePause);
};

export const onGameUnpause = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_GAME_UNPAUSE, data);

  if (opts?.debug) debugFunctionHandled(onGameUnpause);
};

export const onPositionsReset = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_POSITIONS_RESET, data);

  if (opts?.debug) debugFunctionHandled(onPositionsReset);
};

export const onPlayerActivity = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_PLAYER_ACTIVITY, data);

  if (opts?.debug) debugFunctionHandled(onPlayerActivity);
};

export const onStadiumChange = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_STADIUM_CHANGE, data);

  if (opts?.debug) debugFunctionHandled(onStadiumChange);
};

export const onRoomLink = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_ROOM_LINK, data);

  if (opts?.debug) debugFunctionHandled(onRoomLink);
};

export const onKickRateLimitSet = (
  websocket: WebSocketConnection,
  opts?: HaxirOptions,
  data?: any
) => {
  websocket.push(EVENT_ON_KICK_RATE_LIMIT_SET, data);

  if (opts?.debug) debugFunctionHandled(onKickRateLimitSet);
};
