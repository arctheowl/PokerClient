import Image from "next/image";

export const MyImage = () => {
  return (
    <Image
      src="https://source.unsplash.com/random"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
