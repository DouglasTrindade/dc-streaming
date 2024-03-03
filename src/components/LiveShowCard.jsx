export const LiveShowCard = ({ src, alt, title }) => {
  return (
    <>
      <div class="flex w-[250px] h-24 gap-4">
        <img className="w-24 aspect-[4/3] rounded" src={src} alt={alt} />
        <div className="w-full text-xs py-1">{title}</div>
      </div>
    </>
  );
};
