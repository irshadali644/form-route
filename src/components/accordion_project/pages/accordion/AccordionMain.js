import './accordion.css'
import AccordionInfo from './accordion_dtls/AccordionInfo';
function AccordionMain() {
    const questions = [
        {title: 'Do I have to allow the use of cookes?', content : 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'},
        {title : 'How do I change my My Page password?', content : 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'},
        {title : 'What is BankID? ', content : 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.'},
        {title:'Whose birth number can I use?' , content:'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify. '}

    ]
    
    return (
        <div className="accordionmain_wrapper">
            <div className='accordionmain_main'>
                <div className='left_content'>
                    <h2>Questions And Answers About Login</h2>
                </div>
                <div className='right_content'>
                    {questions.map ( (item ,i)=> {
                        return   <AccordionInfo key={i} data= {item}/>
                    })}
                 
                </div>
            </div>
        </div>
    )
}
export default AccordionMain;