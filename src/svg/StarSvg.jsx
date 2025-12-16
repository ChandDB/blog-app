const StarSvg = ({ fill }) => {
  return (
    <>
      <svg
        fill={fill || "#F3BB2E"}
        viewBox="0 0 18 17"
        width="18"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 13.2061L14.1562 16.3115L12.7891 10.4521L17.3398 6.50684L11.3438 5.99902L9 0.47168L6.65625 5.99902L0.660156 6.50684L5.21094 10.4521L3.84375 16.3115L9 13.2061Z" />
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor={fill || "#F3BB2E"} />
            <stop offset="50%" stopColor="#5B5B5B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default StarSvg;
