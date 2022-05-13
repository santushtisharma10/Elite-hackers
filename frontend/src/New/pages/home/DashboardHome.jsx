import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./DashboardHome.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../../New/components/sidebar/Sidebar";
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
        {/* <WidgetLg/> */}
          <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidgets">
            <WidgetSm/>
            {/* <WidgetLg/> */}
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}
