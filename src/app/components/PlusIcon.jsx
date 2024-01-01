const PlusIcon = (props) => {
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      width={24}
      height={24}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      {...props}
    >
      <path d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z" />
    </svg>
  );
};

export default PlusIcon;
