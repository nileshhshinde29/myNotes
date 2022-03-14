const [ currentPage ,setCurrentPage]=useState(0)
  const [priviousPage, setPriviousPage]= useState(-1)
  const [nextPage, setNextPage] =useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const[ start , setStart]= useState(0)
  const [end ,setEnd]=useState(5)
 
  const [lastPageIndex,setLastPageIndex]= useState() // setLastPageIndex( Math.ceil(response.data.products.length/itemsPerPage))}



// logic
// in fecth use slice(start, end)

  const  fetch2 = useEffect(() => {
    fetch()
    
}, [start,end]);

function fetch(){
  axios.get('http://interviewapi.ngminds.com/api/getAllProducts')
        .then(response => {setDataFromApi(response.data.products.slice(start,end)); setLastPageIndex( Math.ceil(response.data.products.length/itemsPerPage))} )

}

function setItemsPerPagefun(e)
{
  setItemsPerPage(e.target.value)
  console.log(start)
}

useEffect(()=>{
setStart(itemsPerPage*currentPage)
},[itemsPerPage,currentPage])

useEffect(()=>{

const add =parseInt(start)+parseInt(itemsPerPage)
// console.log("add"+add);
  setEnd((add))

},[start,itemsPerPage])

function setCurrentPageFun(e)
{ console.log(e)
 setCurrentPage(e)
 setPriviousPage(e-1)
 setNextPage(e+1)
}



//css
<div class="row">
            <div class="col-sm-8">
                <ul class="pagination">
                    <li class="page-item"><a onClick={()=>setCurrentPageFun(priviousPage)} style={priviousPage < 0 ?{color:'GrayText', pointerEvents:"none"}:{} }   class="page-link">Previous</a></li>
                    <li class="page-item active"><a value={priviousPage} onClick={()=>setCurrentPageFun(priviousPage)} style={priviousPage<0 ? {display:"none"}:{}} class="page-link">{priviousPage+1}</a></li>
                    <li class="page-item"><a value={currentPage} onClick={()=>setCurrentPageFun(currentPage)} class="page-link">{currentPage+1}</a></li>
                    <li class="page-item"><a value={nextPage} onClick={()=>setCurrentPageFun(nextPage)}  style={lastPageIndex==nextPage ?{display:"none"}:{} } class="page-link">{nextPage+1}</a></li>
                    <li class="page-item"><a  onClick={()=>setCurrentPageFun(nextPage)} style={lastPageIndex==nextPage ? {color:"GrayText",pointerEvents:"none"}:{color:"blue"}} class="page-link">Next</a></li>
                </ul>
            </div>
            <div class="col-sm-4 text-right">
                <div style={{margin:"margin: 25px 0"}}>
                    <label for="" class="control-label">Items Per Page:</label>
                    <select onChange={(e)=>setItemsPerPagefun(e)}name="" id="">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>