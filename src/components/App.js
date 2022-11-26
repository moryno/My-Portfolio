import Home from "../pages/Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="flex w-full lg:w-full">
        <Sidebar />
        <Home />
      </section>
    </main>
  );
}

export default App;
