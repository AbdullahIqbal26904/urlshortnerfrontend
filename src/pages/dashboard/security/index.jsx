import Navbar from "@/components/Navbarcomponent/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";
import Footer from "@/components/footer/Footer";
import SecurityDashboard from "@/components/dashboard/Securitydashboard";
function Security() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <SecurityDashboard/>
        <Footer/>
    </div>
  )
}

export default Security;