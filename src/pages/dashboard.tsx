import Header from "../components/header";
import JobTabs from "../components/tab";
import { DarkModeProvider, useDarkMode } from "../components/darkmode/darkmode";

const Dashboard: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <DarkModeProvider>
        <div
          className={`${
            isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          } min-h-screen`}
        >
          <Header />
          <JobTabs />
        </div>
      </DarkModeProvider>
    </>
  );
};

export default Dashboard;
