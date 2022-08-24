import { Route, Link, Routes, NavLink } from 'react-router-dom';
import './global.css'
import Nav from './navigation/Nav';
import OurReviews from './page-details/our-reviews/OurReviews';
import OurTours from './page-details/our-tours/OurTours';
import OurBirthdays from './page-details/our-birthdays/OurBirthdays';
import Details from './Details';
function NetlifyApp() {
    return (
        <div>
            <div className='main-wrapper'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <NavLink to="/" className={({isActive}) =>isActive? 'active' : ''}>Birthdays Today</NavLink>
                    <NavLink to="our-tours" className={({isActive}) => isActive? 'active' : ''}>Our Tours</NavLink>
                    <NavLink to="our-reviews" className={({isActive}) => isActive? 'active' : ''} >Our Reviews</NavLink>
                </nav>
                <div className='page-dtls'>
                    <Routes>
                        <Route path='/' element={<OurBirthdays />} />
                        <Route path='/our-tours' element={<OurTours />} />
                        <Route path='our-reviews' element={<OurReviews />}/>
                        <Route path='details' element={<Details />}/>
                    </Routes>
                </div>

            </div>

        </div>
    )
}
export default NetlifyApp;
