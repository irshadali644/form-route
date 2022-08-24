function DummyApp(props) {
   console.log(props.data)
    return (
        <div>
           DummyCount:{data.count}
           <button onClick={() => {
                props.onclickbtn(props.data + 1)
           }}>Count</button>
        </div>
    )
}
export default DummyApp
