const AccountType = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <>
      <div className="px-4 py-10 w-full">
        <button
          className="py-2 px-5 bg-indigo-600 text-white font-medium rounded-lg duration-150 active:bg-indigo-600 hover:bg-indigo-500 items-center inline-flex gap-x-2"
          onClick={handleBack}
        >
          {/* <span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
              clipRule="evenodd"
            />
          </svg>
          {/* </span> */}
          Go back
        </button>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="font-semibold text-4xl text-gray-700">
          How do you want to use Healthcare?
        </h1>
      </div>
      <div className="mx-auto relative max-w-xs mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-700">
          <option>As a Patient</option>
          <option>As a Doctor</option>
        </select>
      </div>
    </>
  );
};

export default AccountType;
