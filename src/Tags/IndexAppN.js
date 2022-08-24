import Tag from "./Tag/Tag"
const tags = [
    { tag: 'Apps', count: 820 },
    { tag: 'Typescript', count: 483 },
    { tag: 'Hooks', count: 297 },
    { tag: 'UI', count: 297 },
    { tag: 'Next.js', count: 1297 },
    { tag: 'Vue.js', count: 2977 },
    { tag: 'Angular.js', count: 1297 },
]
function IndexAppN() {
    return (
        <div className="container">
            <div className="taglist">
                <h3>Tags</h3>
                <ul>
                    {tags.map((item, i) => <Tag data={item} key={i} />)}
                </ul>
            </div>
        </div>
    )

}
export default IndexAppN