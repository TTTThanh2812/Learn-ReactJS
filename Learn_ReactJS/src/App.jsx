import NarBar from "./compoments/NarBar";
import Hero from "./compoments/Hero";
import HomeCards from "./compoments/HomeCards";
import JobListings from "./compoments/JobListings";
import ViewAllJobs from "./compoments/ViewAllJobs";

const App = () => {
  return (
    <>
      <NarBar />
      {/* Hero */}
      <Hero />
      {/* Developers and Employers */}
      <HomeCards />
      {/* Browse Jobs */}
      <JobListings />
      <ViewAllJobs />
    </>
  );
};
export default App;
