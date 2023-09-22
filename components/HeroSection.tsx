import Image from "next/image";
import hero from "../public/images/undraw_doctor_kw5l.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-16 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-indigo-700 font-bold text-4xl xl:text-5xl">
          Connecting with Doctors made easier through AI
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          By leveraging AI technology, we are transforming the way patients gets
          medical attention by connecting patients to doctors without needing to
          visit a hospital.
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <Link
            href="/signup"
            className="px-7 py-3 w-full bg-indigo-700 text-white text-center rounded-md shadow-md block sm:w-auto hover:bg-indigo-800"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto hover:bg-gray-800"
          >
            Try it out
          </Link>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image src={hero} alt="Doctor" priority={true} />
      </div>
    </section>
  );
};

export default HeroSection;
