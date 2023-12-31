import './home.scss'
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Widgets from '../../components/widgets/widgets';
import FeaturedCharts from '../../components/featuredCharts/featuredCharts';
import Charts from '../../components/charts/charts';
import Table from '../../components/table/table';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type="user" />
                    <Widgets type="order" />
                    <Widgets type="earnings" />
                    <Widgets type="balance" />
                </div>
                <div className="charts">
                    <FeaturedCharts />
                    <Charts title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home