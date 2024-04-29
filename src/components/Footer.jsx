import Link from "next/link";

export const Footer = () => {
  return (
    <div className="container border-t-4 border-gray-700">
      <div className="flex justify-between flex-wrap items-center  my-20">
        <div className="flex justify-end gap-10">
          <Link href="">Feedback</Link>
          <span className="border-r-2 border-gray-700" />
          <Link href="">Help</Link>
          <span className="border-r-2 border-gray-700" />
          <Link href="">FAQ</Link>
        </div>
        <div className="flex justify-center mt-4 sm:mt-0">
          <div className="md:me-8 font-mono text-2xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-transparent bg-clip-text">
            DC STRAMING
          </div>
        </div>
        <div className="ms-10 mt-4 sm:mt-0">
          <div>FOLLOW ON</div>
        </div>
      </div>
    </div>
  );
};
