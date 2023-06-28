import clsx from "clsx";
import JoinWaitList from "../JoinWaitList";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  text: string;
}

const getThresholds = () => {
  const thresholds = [];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i);
  }

  return thresholds;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  const [visiblePct, setVisiblePct] = useState("0%");
  const containerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;
          setVisiblePct(visiblePct)
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
    <div className={clsx(className, "h-[200vh] relative")}>
      <div className="sticky top-0 right-0">{visiblePct}</div>
      <div className="sticky top-4 h-[100vh] flex items-center">
        <p
          className="md:text-7xl text-3xl font-poppins font-semibold md:leading-[1.375] leading-[1.375] text-justify"
          style={{ color: "#D9D9D9" }}
        >
          {text.split(" ").map((word, index) => (
            <span key={index}>
              {word + " "}
            </span>
          ))}
        </p>
      </div>

      <div className="h-[80vh] w-full absolute bottom-0 left-0" ref={containerRef}>
      </div>

      <div className="text-center md:mt-40 mt-20 absolute bottom-0 w-full pb-4">
        <JoinWaitList className="mb-5" />

        <p>Don't worry, we will not share anything with your network</p>
      </div>
    </div>
  );
};

export default ScrollText;
