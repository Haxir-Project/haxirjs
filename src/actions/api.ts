import { parseJson } from "../helpers/json";
import { debugFunctionHandled } from "../helpers/logger";
import { EventResponseData } from "../types/haxir";
import { HaxirOptions } from "../types/haxir";

export const openRoom = (data: EventResponseData, opts?: HaxirOptions) => {
  const room = (window as any).HBInit(data.opts.config);

  if (opts?.debug) debugFunctionHandled(sendChat);

  return room;
};

export const sendChat = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { message, targetId } = data.opts;

  room.sendChat(message, targetId);

  if (opts?.debug) debugFunctionHandled(sendChat);
};

export const setPlayerAdmin = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId, admin } = data.opts;

  room.setPlayerAdmin(playerId, admin);

  if (opts?.debug) debugFunctionHandled(setPlayerAdmin);
};

export const setPlayerTeam = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { message, team } = data.opts;

  room.setPlayerTeam(message, team);

  if (opts?.debug) debugFunctionHandled(setPlayerTeam);
};

export const kickPlayer = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { message, targetId, ban } = data.opts;

  room.kickPlayer(message, targetId, ban);

  if (opts?.debug) debugFunctionHandled(kickPlayer);
};

export const clearBan = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId } = data.opts;

  room.playerId(playerId);

  if (opts?.debug) debugFunctionHandled(clearBan);
};

export const clearBans = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  room.clearBans();

  if (opts?.debug) debugFunctionHandled(clearBans);
};

export const setScoreLimit = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { limit } = data.opts;

  room.setScoreLimit(limit);

  if (opts?.debug) debugFunctionHandled(setScoreLimit);
};

export const setTimeLimit = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { limitInMinutes } = data.opts;

  room.setTimeLimit(limitInMinutes);

  if (opts?.debug) debugFunctionHandled(setTimeLimit);
};

export const setCustomStadium = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { stadiumFileContents } = data.opts;

  room.setCustomStadium(stadiumFileContents);

  if (opts?.debug) debugFunctionHandled(setCustomStadium);
};

export const setDefaultStadium = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { stadiumName } = data.opts;

  room.setDefaultStadium(stadiumName);

  if (opts?.debug) debugFunctionHandled(setDefaultStadium);
};

export const setTeamsLock = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { locked } = data.opts;

  room.setTeamsLock(locked);

  if (opts?.debug) debugFunctionHandled(setTeamsLock);
};

export const setTeamColors = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { team, angle, textColor, colors } = data.opts;

  room.setTeamColors(team, angle, textColor, colors);

  if (opts?.debug) debugFunctionHandled(pauseGame);
};

export const startGame = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  room.startGame();

  if (opts?.debug) debugFunctionHandled(startGame);
};

export const stopGame = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  room.stopGame();

  if (opts?.debug) debugFunctionHandled(stopGame);
};

export const pauseGame = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { pauseState } = data.opts;

  room.pauseGame(pauseState);

  if (opts?.debug) debugFunctionHandled(pauseGame);
};

export const getPlayer = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId } = data.opts;

  if (opts?.debug) debugFunctionHandled(getPlayer);

  return room.getPlayer(playerId);
};

export const getPlayerList = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  if (opts?.debug) debugFunctionHandled(getPlayerList);

  return room.getPlayerList();
};

export const getScores = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  if (opts?.debug) debugFunctionHandled(getScores);

  return room.getScores();
};

export const getBallPosition = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  if (opts?.debug) debugFunctionHandled(getBallPosition);

  return room.getBallPosition();
};

export const startRecording = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  room.startRecording();

  if (opts?.debug) debugFunctionHandled(startRecording);
};

export const stopRecording = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  room.stopRecording();

  if (opts?.debug) debugFunctionHandled(stopRecording);
};

export const setPassword = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { pass } = data.opts;

  room.setPassword(pass);

  if (opts?.debug) debugFunctionHandled(setPassword);
};

export const setRequireRecaptcha = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { required } = data.opts;

  room.setRequireRecaptcha(required);

  if (opts?.debug) debugFunctionHandled(setRequireRecaptcha);
};

export const reorderPlayers = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerIdList, moveToTop } = data.opts;

  room.reorderPlayers(playerIdList, moveToTop);

  if (opts?.debug) debugFunctionHandled(reorderPlayers);
};

export const sendAnnouncement = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { message, targetId, color, style, sound } = data.opts;

  room.sendAnnouncement(message, targetId, color, style, sound);

  if (opts?.debug) debugFunctionHandled(sendAnnouncement);
};

export const setKickRateLimit = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { min, rate, burst } = data.opts;

  room.setKickRateLimit(min, rate, burst);

  if (opts?.debug) debugFunctionHandled(setKickRateLimit);
};

export const setPlayerAvatar = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId, avatar } = data.opts;

  room.setPlayerAvatar(playerId, avatar);

  if (opts?.debug) debugFunctionHandled(setPlayerAvatar);
};

export const setDiscProperties = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { discIndex, properties } = data.opts;

  room.setDiscProperties(discIndex, properties);

  if (opts?.debug) debugFunctionHandled(setDiscProperties);
};

export const getDiscProperties = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { discIndex } = data.opts;

  if (opts?.debug) debugFunctionHandled(getDiscProperties);

  return room.getPlayerDiscProperties(getDiscProperties);
};

export const setPlayerDiscProperties = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId, properties } = data.opts;

  room.setPlayerDiscProperties(playerId, properties);

  if (opts?.debug) debugFunctionHandled(setPlayerDiscProperties);
};

export const getPlayerDiscProperties = (
  room: any,
  data: EventResponseData,
  opts?: HaxirOptions
) => {
  const { playerId } = data.opts;

  if (opts?.debug) debugFunctionHandled(getPlayerDiscProperties);

  return room.getPlayerDiscProperties(playerId);
};

export const getDiscCount = (
  room: any,
  _data: EventResponseData,
  opts?: HaxirOptions
) => {
  if (opts?.debug) debugFunctionHandled(getDiscCount);

  return room.getDiscCount();
};
