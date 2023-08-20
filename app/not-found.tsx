"use client";

const ErrorPage = () => {
  return (
    <div className="max-w-screen mx-auto items-center flex px-4 justify-start h-screen md:px-6">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="pb-5 text-indigo-700 font-bold text-9xl">404</h2>
        <h3 className="text-gray-700 text-4xl font-semibold sm:text-5xl">
          Page not found
        </h3>
        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for could not be found or have been
          removed
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
