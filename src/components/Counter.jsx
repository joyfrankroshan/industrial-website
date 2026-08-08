import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

// easeOutCubic: starts fast, slows near the end
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  start = false,
  sx = {},
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!start || hasRunRef.current) return;
    hasRunRef.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(end * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end); // snap exactly to target, no float drift
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration]);

  return (
    <Typography component="span" sx={sx}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </Typography>
  );
}
