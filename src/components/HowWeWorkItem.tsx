import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  index: number;
  title: string;
  content: string;
  subContent: string;
  image: string;
  video?: string;
  video2?: string;
  videoAutoplay?: boolean;
  video2Autoplay?: boolean;
}

const isMp4 = (url: string) => url.endsWith(".mp4");

const HowWeWorkItem: React.FC<Props> = (item) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
  });

  const isVisible =
    (entry?.boundingClientRect.top || 0) < 0 ||
    (inView && (entry?.intersectionRatio || 0) > 0.15);

  return (
    <div className="grid md:grid-cols-2 md:py-32 py-12" ref={ref}>
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
        {item.video ? (
          <div className="relative w-full">
            <div className="relative w-full lg:rounded-xl md:rounded-[10px] rounded-[10px] overflow-hidden videoBoxShadow">
              <video
                src={item.video}
                autoPlay={item.videoAutoplay}
                playsInline={item.videoAutoplay}
                loop
                muted
                className="scale-[1.009]"
              />
            </div>
            {item.video2 && (
              <div className="absolute w-[34%] md:-bottom-6 md:-right-6 bottom-1 right-1 lg:rounded-xl md:rounded-[10px] rounded-[10px] overflow-hidden videoBoxShadow">
                {isMp4(item.video2) ? (
                  <video
                    src={item.video2}
                    autoPlay={item.video2Autoplay}
                    playsInline={item.video2Autoplay}
                    loop
                    muted
                    className=" scale-[1.01]"
                  />
                ) : (
                  <img src={item.video2} className=" scale-[1.01]" />
                )}
              </div>
            )}
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="lg:w-full md:w-3/4"
          />
        )}
      </div>
    </div>
  );
};

export default HowWeWorkItem;
