## miziha_hooks

### 1. 安装
```shell
npm i miziha_hooks
```

### 2. 使用
这里拿 useEventsBus 举例
```ts
import { useEventsBus } from "miziha_hooks";
const { on, off, emit } = useEventsBus();
on("test", (data) => {
  console.log(data);
});
emit("test", "hello");
off("test");
```

### hooks
[createModel]() 创建一个状态管理器 基于react 原生 createContext / useContext 实现  \n
[useEentsBus]() 创建一个事件总线  \n
[useAnimationFrame]() 动画帧 基于react 原生 useEffect / requestAnimationFrame 实现  \n
[useDrag]() 拖拽 基于react-dnd 实现  \n
[useDrap]() 拖拽callback 基于react-dnd 实现  \n
[useIsView]() 元素是否在视口内 基于react 原生 IntersectionObserver 实现  \n
[useMedia]() 媒体查询 基于react 原生 useMedia 实现  \n
[useProgress]() 进度条 基于原生class 实现  \n
