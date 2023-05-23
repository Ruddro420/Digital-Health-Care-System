import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const homeValue = [
        { id: 1, value: 'Blood', src: '/blood', icon: '../../../public/img/homeIcon/blood.png', bgColor: '#dc765f' },
        { id: 2, value: 'Hospital', src: '/hospital', icon: '../../../public/img/homeIcon/hospital.png', bgColor: '#a3bfbe' },
        { id: 3, value: 'Doctors', src: '/dosctors', icon: '../../../public/img/homeIcon/doctor.png', bgColor: '#ffbd59' },
        { id: 4, value: 'Ambulance', src: '/ambulance', icon: '../../../public/img/homeIcon/ambulance.png', bgColor: '#5ce1e6' },
        { id: 5, value: 'Medicine', src: '/medicine', icon: '../../../public/img/homeIcon/medicine.png', bgColor: '#38b6ff' },
        { id: 6, value: 'Emergency', src: '/emergency', icon: '../../../public/img/homeIcon/emergency.png', bgColor: '#ff66c4' },
    ]


    return (
        <div className='home-container'>
            <div className="main-heading">
                <Link to='/' >
                    <h3>DIGITAL HEALTH CARE</h3>
                </Link>
                <h1>OPTION LIST</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        homeValue.map(item =>
                            <div key={item.id} className="col-4 mt-5">
                                <Link to={item.src}>
                                    <div style={{ boxShadow: `12px 12px 2px 1px ${item.bgColor}` }} href={item.src} className="card">
                                        <div className="card-body">
                                            <div className='home-container-img'>
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <div style={{ backgroundColor: `${item.bgColor}` }} className='home-container-value'>
                                                <h2>{item.value}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;