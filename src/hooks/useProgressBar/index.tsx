import { CSSProperties } from "react";

const defaultStyles = {
  height: "4px",
  backgroundColor: "#29d",
  position: "fixed",
  top: "0",
  left: "0",
  width: "0%",
  transition: "width 0.2s ease-out",
  zIndex: "9999",
};

class ProgressBar {
  private progressDom: HTMLDivElement | null = null;
  private progress: number = 0;
  private isStart: boolean = false;
  private animationFrameRef: number | null = null;
  private options: {
    styles?: CSSProperties;
  } = {};

  constructor(options: any) {
    this.options = options;
  }

  private initDom(customStyles: CSSProperties = {}) {
    const progressBar = document.createElement("div");
    progressBar.id = "progress-bar";
    Object.assign(progressBar.style, { ...defaultStyles, ...customStyles });
    document.body.appendChild(progressBar);
    this.progressDom = progressBar;
  }

  private uninitDom() {
    this.progressDom && document.body.removeChild(this.progressDom);
  }

  private animateProgress = () => {
    if (this.progress < 90 && this.progressDom) {
      this.progress += (100 - this.progress) * 0.02; // 每帧递增
      this.progressDom.style.width = `${this.progress}%`; // 当 progress 更新时，修改进度条宽度
      this.animationFrameRef = requestAnimationFrame(this.animateProgress);
    } else {
      if (this.animationFrameRef) {
        cancelAnimationFrame(this.animationFrameRef);
      }
    }
  };

  public start() {
    this.initDom(this.options.styles);
    if (this.isStart || !this.progressDom) {
      return;
    }
    this.isStart = true;
    this.progress = 0;
    this.progressDom.style.display = "block";
    this.progressDom.style.width = `${this.progress}%`; // 当 progress 更新时，修改进度条宽度
    this.animationFrameRef = requestAnimationFrame(this.animateProgress);
  }

  public end() {
    if (!this.isStart || !this.progressDom) {
      return;
    }
    this.isStart = false;
    this.progress = 100;
    this.progressDom.style.width = `${this.progress}%`; // 当 progress 更新时，修改进度条宽度
    setTimeout(() => {
      this.progressDom!.style.display = "none";
      this.uninitDom();
    }, 500);
  }
}

export const useProgressBar = (options: { styles?: CSSProperties }) =>
  new ProgressBar({
    ...options,
  });
