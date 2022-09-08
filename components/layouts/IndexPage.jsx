import IndexNavbar from "components/Navbars/IndexNavbar";

export default function Layout({ children }) {
  return (
    <>
      <IndexNavbar />
      <div className="bg-layout">
        {children}
      </div>
    </>
  );
}
