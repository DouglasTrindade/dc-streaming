export const CardMovie = ({ src, alt, title }) => {
  return (
    <>
      <div class="flex w-[160px] h-34">
        <img className="rounded relative opacity-90" src={src} alt={alt} />
        <div className="w-full text-base py-1 absolute text-center bottom-0">
          {title}
        </div>
      </div>
    </>
  );
};
