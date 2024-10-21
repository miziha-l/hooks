import { useDrop as useReactDnDDrop, DropTargetMonitor } from 'react-dnd';

interface UseDropOptions {
  collect?: (monitor: DropTargetMonitor) => any;
}

const useDrop = (accept: string | string[], onDrop: (item: any, monitor: DropTargetMonitor) => void, options?: UseDropOptions) => {
  const [{ isOver, canDrop }, drop] = useReactDnDDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      ...options?.collect?.(monitor),
    }),
  });

  return { drop, isOver, canDrop };
};

export default useDrop;
