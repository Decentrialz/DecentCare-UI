interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => (
  <div
    className={`container mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 ${className}`}
  >
    {children}
  </div>
);

export default Container;
