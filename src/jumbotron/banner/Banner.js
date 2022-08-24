import './style.css'
function Banner(props) {
    console.log(props.id)

    return (
        <div>
            <section className={"banner_sec " + (props.id == '1' ? 'banner_sec1' : 'banner_sec2') }>
                <div className="banner_inner">
                    <h1>Custom jumbotron</h1>
                    <p>
                        Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button type="button" className="btn">Example button</button>
                </div>

            </section>
        </div>
    )
}
export default Banner;