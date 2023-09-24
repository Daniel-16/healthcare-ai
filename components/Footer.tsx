import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gray-100">
      <aside>
        <p className="text-gray-700">
          Copyright &copy; 2023 - All right reserved by{" "}
          <Link href={"/"} className="hover:underline">
            HealthCareAI
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
