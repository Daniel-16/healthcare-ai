import Header from "@/components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="py-8">
        <h1 className="text-gray-700 text-center text-4xl font-semibold mb-8">
          About Us
        </h1>
        <div className="container mx-auto px-4 grid lg:grid-cols-3 lg:space-x-5">
          <div className="border p-5 rounded-lg shadow-md hover:shadow-lg duration-300 mb-5 md:mb-5 lg:mb-0">
            <h2 className="text-gray-700 text-xl font-semibold mb-4">Vision</h2>
            <p className="text-gray-600">
              Our vision is to revolutionize healthcare by leveraging
              cutting-edge technology. We aspire to create a healthcare app that
              empowers patients to take control of their well-being. Through the
              power of AI, we aim to connect individuals with the right doctors
              and healthcare professionals swiftly and accurately, providing
              them with personalized care and guidance. Our mission is to make
              healthcare accessible, efficient, and patient-centric, ultimately
              improving the quality of life for people around the world.
            </p>
          </div>
          <div className="border p-5 rounded-lg shadow-md hover:shadow-lg duration-300 mb-5 md:mb-5 lg:mb-0">
            <h2 className="text-gray-700 text-xl font-semibold mb-4">
              Privacy and Security
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="pb-2">
                Data Protection Your personal information is collected and used
                with your explicit consent solely for healthcare purposes. We
                employ strong encryption and security measures to protect your
                data from unauthorized access.
              </li>
              <li className="pb-2">
                Data Sharing We share your health data only with your explicit
                consent and healthcare providers involved in your care.
              </li>
              <li className="pb-2">
                Transparency and Consent We maintain clear privacy policies and
                seek your informed consent for data use.
              </li>
              <li className="pb-2">
                Continuous Improvement We regularly update security measures to
                protect your data.
              </li>
              <li className="pb-2">
                Legal Compliance We comply with all applicable data privacy laws
                and regulations.
              </li>
            </ul>
          </div>
          <div className="border p-5 rounded-lg shadow-md hover:shadow-lg duration-300">
            <h2 className="text-gray-700 text-xl font-semibold mb-4">
              Areas we target
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Our app connects patients with doctors instantly, anytime, and
                anywhere, ensuring healthcare is just a click away.
              </li>
              <li>
                We use AI to match patients with doctors based on symptoms,
                ensuring tailored and relevant care.
              </li>
              <li>
                Streamlined symptom input and AI analysis provide quick initial
                insights for users.
              </li>
              <li>
                We facilitate virtual consultations, making healthcare
                accessible from the comfort of home or on the go.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
