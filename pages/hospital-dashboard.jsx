import HelpButton from "../components/atoms/HelpButton";
import DashboardAdmin from "../components/pages/HospitalDashboard.tsx";

const HospitalDashboard = () => {
  return (
    <>
      <DashboardAdmin />
      <HelpButton>Hospital Dashboard</HelpButton>
    </>
  );
};

export default HospitalDashboard;
