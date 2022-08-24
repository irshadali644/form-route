function Tab(props) {
  const { data, onChangeTab } = props// {data: ÁBC', onChangeTab: fn}
  console.log(onChangeTab)
  return (
    <>
      <li onClick={() => {
        onChangeTab(data)
      }}>{data}</li>
    </>
  )
}
export default Tab;