import { debugFunctionHandled } from "../helpers/logger";
import { EventResponseData } from "../types/haxir";
import { HaxirOptions } from "../types/haxir";

export const openRoom = (data: EventResponseData, opts?: HaxirOptions) => {
  const room = (window as any).HBInit(data.opts.config);

  if (opts?.debug) debugFunctionHandled(openRoom);

  return room;
};