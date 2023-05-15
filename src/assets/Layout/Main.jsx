
import { Outlet } from 'react-router-dom';
import Navigation from '../Share/Navigation/Navigation';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;