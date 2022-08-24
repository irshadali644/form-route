import NewsItem from "./NewsItem"

function MainNews({data ,loader}) {
    // console.log(data);
    if(loader){
        return <h1>loading News...</h1>
    }
   
    return (
        <div className="News-set">
            {/* <NewsItem/> */}
            {data && data.hits.map((item, i) => {
                return <NewsItem key={i} data={item} />
            })}
        </div>
    )
}
export default MainNews