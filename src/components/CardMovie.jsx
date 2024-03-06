export const CardMovie = ({ src, alt, title, vertical }) => {
  return (
    <>
      {vertical ? (
        <>
          <div class="flex w-[160px] relative h-34">
            <img className="rounded opacity-90" src={src} alt={alt} />
            <div className="w-full text-base py-1 absolute text-center bottom-0">
              {title}
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="flex w-[160px] relative h-34">
            <img className="rounded opacity-90" src={src} alt={alt} />
            <div className="w-full text-base py-1 absolute text-center bottom-0">
              {title}
            </div>
          </div>
        </>
      )}
    </>
  );
};
