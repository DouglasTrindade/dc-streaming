export const LiveShowCard = ({ src, alt, title, view }) => {
  return (
    <>
      <div class="flex w-[250px] h-24 gap-4">
        <img className="w-24 aspect-[4/3] rounded" src={src} alt={alt} />
        <div className="flex flex-col">
          <div className="w-full text-xs py-1">{title}</div>
          <span className="text-gray-500 text-xs mt-1">
            {Number.parseFloat(view).toFixed(2)} watching now
          </span>
          <img
            src="/live-now.png"
            className="w-[55px] object-cover mt-auto"
            alt="live now"
          />
        </div>
      </div>
    </>
  );
};
