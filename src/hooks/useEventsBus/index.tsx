import { mittInstance } from "./mitt";

export const useEventsBus = () => {
  return {
    on: (eventName: string, callback: (...args: any[]) => void) => {
      mittInstance.on(eventName, callback);
    },
    off: (eventName: string, callback: (...args: any[]) => void) => {
      mittInstance.off(eventName, callback);
    },
    emit: (eventName: string, ...args: any[]) => {
      mittInstance.emit(eventName, ...args);
    }
  };
};