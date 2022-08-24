import './style.css'
const addClassDyn = (props) => {
   //console.log(props);
   if(props.id == '1') {
       return 'bgBlack'
   }
   if(props.id == '2') {
       return 'bgRed'
   }
   if(props.id == '3') {
       return 'bgYellow'
   }
   if(props.id == '4'){
       return 'bgGreen'
   }
}


function BlackBox(props) {
    //  console.log(props)
    return (
        // <div className={"info-black-box "+ (props.id == '1' ? 'bgRed' : 'bgBlack')} >
        // <div className={"info-black-box " + addClassDyn(props)}>
        <div className={"info-black-box " + addClassDyn(props)}>
            <h2>Change the background</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <button type="button" className="btn border-btn">Example button</button>
        </div>
    )
}
export default BlackBox;