import { FC, useEffect, useRef } from "react";

interface ClickAwayHandlerProps {
  children: React.ReactNode;
  onClickAway: () => void;
}

const ClickAwayHandler: FC<ClickAwayHandlerProps> = ({
  children,
  onClickAway,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickAway]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayHandler;
