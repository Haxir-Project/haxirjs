import { WebSocketConnection } from "../websocket";
import {
  clearBan,
  clearBans,
  getBallPosition,
  getDiscCount,
  getDiscProperties,
  getPlayer,
  getPlayerDiscProperties,
  getPlayerList,
  getScores,
  kickPlayer,
  reorderPlayers,
  sendAnnouncement,
  setCustomStadium,
  setDefaultStadium,
  setDiscProperties,
  setKickRateLimit,
  setPassword,
  setPlayerAdmin,
  setPlayerAvatar,
  setPlayerTeam,
  setRequireRecaptcha,
  setScoreLimit,
  setTeamColors,
  setTeamsLock,
  setTimeLimit,
  startGame,
  startRecording,
  stopGame,
  stopRecording,
} from "../actions/roomObject";
import {
  API_CLEAR_BAN,
  API_CLEAR_BANS,
  API_GET_BALL_POSITION,
  API_GET_DISC_COUNT,
  API_GET_DISC_PROPERTIES,
  API_GET_PLAYER,
  API_GET_PLAYER_DISC_PROPERTIES,
  API_GET_PLAYER_LIST,
  API_GET_SCORES,
  API_KICK_PLAYER,
  API_REORDER_PLAYERS,
  API_SEND_ANNOUNCEMENT,
  API_SEND_CHAT,
  API_SET_CUSTOM_STADIUM,
  API_SET_DEFAULT_STADIUM,
  API_SET_DISC_PROPERTIES,
  API_SET_KICK_RATE_LIMIT,
  API_SET_PASSWORD,
  API_SET_PLAYER_ADMIN,
  API_SET_PLAYER_AVATAR,
  API_SET_PLAYER_DISC_PROPERTIES,
  API_SET_PLAYER_TEAM,
  API_SET_REQUIRE_RECAPTCHA,
  API_SET_SCORE_LIMIT,
  API_SET_TEAMS_LOCK,
  API_SET_TEAM_COLORS,
  API_SET_TIME_LIMIT,
  API_START_GAME,
  API_START_RECORDING,
  API_STOP_GAME,
  API_STOP_RECORDING,
  EventResponseData,
} from "../types/events";
import { HaxirOptions } from "../types/haxir";

export function registerHandlers(
  websocket: WebSocketConnection,
  room: any,
  opts?: HaxirOptions
) {
  websocket.on(API_SEND_CHAT, (data: EventResponseData) =>
    sendAnnouncement(room, data, opts)
  );

  websocket.on(API_SET_PLAYER_ADMIN, (data: EventResponseData) =>
    setPlayerAdmin(room, data, opts)
  );

  websocket.on(API_SET_PLAYER_TEAM, (data: EventResponseData) =>
    setPlayerTeam(room, data, opts)
  );

  websocket.on(API_KICK_PLAYER, (data: EventResponseData) =>
    kickPlayer(room, data, opts)
  );

  websocket.on(API_CLEAR_BAN, (data: EventResponseData) =>
    clearBan(room, data, opts)
  );

  websocket.on(API_CLEAR_BANS, (data: EventResponseData) =>
    clearBans(room, data, opts)
  );

  websocket.on(API_SET_SCORE_LIMIT, (data: EventResponseData) =>
    setScoreLimit(room, data, opts)
  );

  websocket.on(API_SET_TIME_LIMIT, (data: EventResponseData) =>
    setTimeLimit(room, data, opts)
  );

  websocket.on(API_SET_CUSTOM_STADIUM, (data: EventResponseData) =>
    setCustomStadium(room, data, opts)
  );

  websocket.on(API_SET_DEFAULT_STADIUM, (data: EventResponseData) =>
    setDefaultStadium(room, data, opts)
  );

  websocket.on(API_SET_TEAMS_LOCK, (data: EventResponseData) =>
    setTeamsLock(room, data, opts)
  );

  websocket.on(API_SET_TEAM_COLORS, (data: EventResponseData) =>
    setTeamColors(room, data, opts)
  );

  websocket.on(API_START_GAME, (data: EventResponseData) =>
    startGame(room, data, opts)
  );

  websocket.on(API_STOP_GAME, (data: EventResponseData) =>
    stopGame(room, data, opts)
  );

  websocket.on(API_GET_PLAYER, (data: EventResponseData) =>
    getPlayer(room, data, opts)
  );

  websocket.on(API_GET_PLAYER_LIST, (data: EventResponseData) =>
    getPlayerList(room, data, opts)
  );

  websocket.on(API_GET_SCORES, (data: EventResponseData) =>
    getScores(room, data, opts)
  );

  websocket.on(API_GET_BALL_POSITION, (data: EventResponseData) =>
    getBallPosition(room, data, opts)
  );

  websocket.on(API_START_RECORDING, (data: EventResponseData) =>
    startRecording(room, data, opts)
  );

  websocket.on(API_STOP_RECORDING, (data: EventResponseData) =>
    stopRecording(room, data, opts)
  );

  websocket.on(API_SET_PASSWORD, (data: EventResponseData) =>
    setPassword(room, data, opts)
  );

  websocket.on(API_SET_REQUIRE_RECAPTCHA, (data: EventResponseData) =>
    setRequireRecaptcha(room, data, opts)
  );

  websocket.on(API_REORDER_PLAYERS, (data: EventResponseData) =>
    reorderPlayers(room, data, opts)
  );

  websocket.on(API_SEND_ANNOUNCEMENT, (data: EventResponseData) =>
    sendAnnouncement(room, data, opts)
  );

  websocket.on(API_SET_KICK_RATE_LIMIT, (data: EventResponseData) =>
    setKickRateLimit(room, data, opts)
  );

  websocket.on(API_SET_PLAYER_AVATAR, (data: EventResponseData) =>
    setPlayerAvatar(room, data, opts)
  );

  websocket.on(API_SET_DISC_PROPERTIES, (data: EventResponseData) =>
    setDiscProperties(room, data, opts)
  );

  websocket.on(API_GET_DISC_PROPERTIES, (data: EventResponseData) =>
    getDiscProperties(room, data, opts)
  );

  websocket.on(API_SET_PLAYER_DISC_PROPERTIES, (data: EventResponseData) =>
    setDiscProperties(room, data, opts)
  );

  websocket.on(API_GET_PLAYER_DISC_PROPERTIES, (data: EventResponseData) =>
    getPlayerDiscProperties(room, data, opts)
  );

  websocket.on(API_GET_DISC_COUNT, (data: EventResponseData) =>
    getDiscCount(room, data, opts)
  );
}
