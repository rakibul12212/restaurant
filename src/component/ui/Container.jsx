// eslint-disable-next-line react/prop-types
const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1490px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
