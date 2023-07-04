import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  index: number;
  title: string;
  content: string;
  subContent: string;
  image: string;
}

// fnc get threshold
const getThresholds = () => {
  const thresholds = [];

  for (let i = 0; i <= 1.0; i += 0.1) {
    thresholds.push(i);
  }

  return thresholds;
};

const HowWeWorkItem: React.FC<Props> = (item) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
  });

  const isVisible =
    (entry?.boundingClientRect.top || 0) < 0 ||
    (inView && (entry?.intersectionRatio || 0) > 0.15);

  return (
    <div className="grid md:grid-cols-2 md:py-40 py-12" ref={ref}>
      <div className={clsx("flex flex-col justify-center mb-[50px] md:mb-0")}>
        <p
          className={
            "text-center md:text-4xl text-2xl font-bold text-white mb-10"
          }
        >
          <span className="borderOpacity inline-flex justify-center items-center w-12 h-12 md:w-20 md:h-20 rounded-full">
            <span className="content">{item.index}</span>
          </span>
        </p>

        <div
          className={clsx(
            "max-w-md mx-auto text-center md:text-left",
            isVisible && "how-it-works-fadeInUp"
          )}
        >
          <h3
            className="md:text-4xl text-3xl font-bold mb-4"
            // set html
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <p className="text-2xl mb-2 text-navyBlue">{item.content}</p>
          <p className="text-xl opacity-50">{item.subContent}</p>
        </div>
      </div>

      <div>
        <img src={item.image} alt={item.title} className="w-full" />
      </div>
    </div>
  );
};

export default HowWeWorkItem;
