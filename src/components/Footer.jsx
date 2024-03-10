import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-center border-t-4 border-gray-700">
        <div className="flex justify-end gap-10 my-28">
          <Link href="">Feedback</Link>
          <span className="border-r-2 border-gray-700" />
          <Link href="">Help</Link>
          <span className="border-r-2 border-gray-700" />
          <Link href="">FAQ</Link>
        </div>
        <div className="flex justify-center my-28">Logo</div>
        <div className="ms-10 my-28">
          <div>FOLLOW ON</div>
        </div>
      </div>
    </>
  );
};
