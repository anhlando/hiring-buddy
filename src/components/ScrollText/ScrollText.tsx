interface Props {
  className?: string;
  text: string;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={`${className} h-screen`}>
      <p className="text-8xl font-bold leading-tight">{text}</p>
    </div>
  );
};

export default ScrollText;
