import { useDrag as useReactDnDDrag, DragSourceMonitor } from 'react-dnd';

interface UseDragOptions {
  collect?: (monitor: DragSourceMonitor) => any;
}

const useDrag = (type: string, item: any, options?: UseDragOptions) => {
  const [{ isDragging }, drag] = useReactDnDDrag({
    type,
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      ...options?.collect?.(monitor),
    }),
    ...options,
  });

  return { drag, isDragging };
};

export default useDrag;
