import IndexNavbar from "components/Navbars/IndexNavbar";

export default function Layout({ children }) {
  return (
    <>
      <IndexNavbar />
        {children}
    </>
  );
}
