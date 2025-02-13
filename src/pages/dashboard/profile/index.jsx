import Navbar from "@/components/Navbarcomponent/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";
import Footer from "@/components/footer/Footer";
import Profiledashboard from "@/components/dashboard/Profiledashboard";
function Settings() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <Profiledashboard/>
        <Footer/>
    </div>
  )
}

export default Settings;