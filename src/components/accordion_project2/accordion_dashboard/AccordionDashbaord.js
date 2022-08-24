import { Link, Outlet } from 'react-router-dom';
import AccordionDetails from '../AccordionDetails';
import '../main_style.css'
import Accordion from './accordion_dtls/Accordion';
const questions = [
    { title: 'Do I have to allow the use of cookes?', content: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.' },
    { title: 'How do I change my My Page password?', content: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse. ' },
    { title: 'What is BankID?', content: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.' },
]
function AccordionDashboard() {
    return (
        <div className="card mt-3">
            <div className='accordion_wrapper d-flex  justify-content-between'>
                <div className="left">
                    <h2>
                        Questions And Answers About Login
                    </h2>
                </div>
                <div className="right">
                    {questions.map((item, i) => {
                        return <Accordion data={item} key={i} />
                    })}
                    <Link to="/view-details">
                        <button className='btn btn-dark'>View Details</button>
                    </Link>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}

export default AccordionDashboard;