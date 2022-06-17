import { Options } from "../websocket";

export interface HaxirOptions {
  debug: boolean;
  websocket: Options | undefined;
}

export interface EventResponseData<T = any | null> {
  event?: string;
  opts: T;
}
