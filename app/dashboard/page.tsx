import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="h-screen bg-slate-200">
        <Sidebar />
      </div>
    </>
  );
};

export default DashBoard;
