import Home from "../pages/Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Portal from "./Portal";

function App() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="flex w-full lg:w-full">
        <Sidebar />
        <Home />
      </section>
      {/* <Portal /> */}
    </main>
  );
}

export default App;
