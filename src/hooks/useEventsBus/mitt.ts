interface EventEmitter {
  on(type: string, handler: (...args: any[]) => void): void;
  off(type: string, handler: (...args: any[]) => void): void;
  emit(type: string, ...args: any[]): void;
}

class mitt implements EventEmitter {
  private all: { [key: string]: Array<(...args: any[]) => void> } = {};

  constructor () {
    this.all = {};
  }

  public on (type: string, handler: (...args: any[]) => void): void {
    const handlers = this.all[type] || [];
    handlers.push(handler);
    this.all[type] = handlers;
  }

  public off (type: string, handler: (...args: any[]) => void): void {
    const handlers = this.all[type];
    if (handlers) {
      this.all[type] = handlers.filter(h => h !== handler);
    }
  }
  public emit (type: string, ...args: any[]): void {
    const handlers = this.all[type];
    if (handlers) {
      handlers.forEach(handler => {
        handler(...args);
      });
    }
  } 
}

export const mittInstance = new mitt();