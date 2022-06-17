type LogType = "WARN" | "ERROR" | "LOG" | "DEBUG" | "INFO";

function create(type: LogType, args: string) {
  return `[${type}] ${args}`;
}

export const warn = (content: string) => console.warn(create("WARN", content));
export const error = (content: string) =>
  console.error(create("ERROR", content));
export const log = (content: string) => console.log(create("LOG", content));
export const debug = (content: string) => console.log(create("DEBUG", content));
export const info = (content: string) => console.info(create("INFO", content));

export const debugFunctionHandled = (fn: Function) =>
  debug(`${fn.name} handled.`);
