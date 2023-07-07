import clsx from "clsx";
import JoinWaitList from "../JoinWaitList";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  text: string;
  highlight?: number[];
}

const getThresholds = () => {
  const thresholds = [];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i);
  }

  return thresholds;
};

const ScrollText: React.FC<Props> = ({ className, text, highlight = [] }) => {
  const [visiblePct, setVisiblePct] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const words = (text || "").split(" ");

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(!containerRef.current?.getBoundingClientRect().top) return;
          if (
            containerRef.current?.getBoundingClientRect().top > 0
          ) {
            setVisiblePct(Math.floor(entry.intersectionRatio * 100));
          }

          if(containerRef.current?.getBoundingClientRect().top < 0) {
            setVisiblePct(100);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: getThresholds(),
      }
    );

    observer.current.observe(containerRef.current!);

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className={clsx(className, "relative")} style={{ height: 'calc(190vh + 120px)' }}>
      <div className="sticky top-20 right-0 hidden">{visiblePct}</div>
      <div className="sticky top-4 md:h-[100vh] h-[80vh] flex items-center">
        <p
          className="lg:text-7xl md:text-6xl text-3xl font-poppins font-semibold lg:leading-[1.375] md:leading-[1.375] leading-[1.375]"
          style={{ color: "#D9D9D9" }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={clsx(
                "transition-colors",
                (index / words.length) * 100 < visiblePct
                  ? highlight.includes(index)
                    ? "text-primary"
                    : "text-black"
                  : ""
              )}
            >
              {word + " "}
            </span>
          ))}
        </p>
      </div>

      <div
        className="h-[80vh] w-full absolute bottom-[20%] left-0"
        ref={containerRef}
      ></div>

      <div className="text-center md:mt-40 mt-20 absolute bottom-0 w-full pb-4">
        <JoinWaitList className="mb-5" />

        <p className="w-[281px] mx-auto text-center text-[#5F6368] text-sm font-normal">
          Don't worry, we will not share anything with your network
        </p>
      </div>
    </div>
  );
};

export default ScrollText;
