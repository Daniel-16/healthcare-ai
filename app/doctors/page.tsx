import Image from "next/image";
import doctor from "../../public/images/doctor.jpg";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Link from "next/link";

const Doctors = () => {
  const doctors = [
    {
      imageUrl: doctor,
      fullName: "John Doe",
      title: "Neurologists",
    },
    {
      imageUrl: doctor,
      fullName: "Mary Jane",
      title: "Psychologists",
    },
    {
      imageUrl: doctor,
      fullName: "Peter Parker",
      title: "Physiologists",
    },
    {
      imageUrl: doctor,
      fullName: "May Parker",
      title: "Dentists",
    },
    {
      imageUrl: doctor,
      fullName: "Harry Potter",
      title: "Therapists",
    },
    {
      imageUrl: doctor,
      fullName: "Hermione Snape",
      title: "Cardiologists",
    },
    {
      imageUrl: doctor,
      fullName: "James Clair",
      title: "Radiologists",
    },
  ];
  return (
    <>
      <Header />
      <SearchInput />
      <div className="py-14 max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            All Doctors
          </h3>
        </div>
        <div className="mt-10">
          <ul className="grid gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {doctors.map((item, id) => (
              <li
                key={id}
                className="shadow-sm border rounded-lg py-7 hover:cursor-pointer hover:shadow-lg duration-300"
              >
                <div className="w-20 h-20 mx-auto">
                  <Image
                    src={item.imageUrl}
                    alt="Doctors"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.fullName}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
