import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./DashboardHome.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Chatbot from "../../../components/Content/Chatbot";


export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="dashboard_container">
        <div className="sidebaar">
        <Sidebar />
        </div>
        <div className="home">
        <FeaturedInfo />
          <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidgets">
            <WidgetSm/>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}