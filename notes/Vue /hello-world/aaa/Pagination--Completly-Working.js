import React, { useEffect, useState } from 'react'
import axios from "axios";
// in home 

 const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);  // only require this two States and length .for length we are feching data in pagination component

// save your all api data in allProduct 
// and use below filteredProducts for Showing Data (eg. filteredProducts.map)
 
 const filteredProducts = allProducts.slice(
   (currentPage - 1) * itemsPerPage,
   currentPage * itemsPerPage
 );


 //pest below line in home return

  <Pagination
    setCurrentPage={setCurrentPage}
    setItemsPerPage={setItemsPerPage}
  />;



// in pagination


function Pagination(props) {


    const [allProducts, setAllProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [displayPages, setDisplayPages] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        setPage(1);
    }, [itemsPerPage]); 

     useEffect(() => {
       props.setCurrentPage(currentPage);
       props.setItemsPerPage(itemsPerPage)
     }, [itemsPerPage ,currentPage]); 



    const getAllProducts = async () => {    // this is for length
        const res = await axios.get(
            `http://interviewapi.ngminds.com/api/getAllProducts`   
        );
        setAllProducts(res.data.products);
        // console.log(res.data.products)
    };

    const handlePage = (page) => {
        setCurrentPage(page);
    };

    const setNext = () => {
        if (currentPage === page + displayPages - 1) {
            setPage(page + 1);
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const setPrev = () => {
        if (currentPage === page) {
            setPage(page - 1);
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="row" style={{ userSelect: 'none' }}>
            <div className="col-sm-8">
                <ul className="pagination">
                    <li
                        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                        onClick={() => setPrev()}
                        style={{
                            pointerEvents: `${currentPage === 1 ? "none" : ""}`,
                            cursor: "pointer",
                        }}
                    >
                        <a className="page-link">Previous</a>
                    </li>
                    {
                        Array.from({ length: displayPages }, (_, i) => i).map(pageNo => {
                            if (page + pageNo <= Math.ceil(allProducts.length / itemsPerPage)) {
                                return (
                                    <li
                                        key={pageNo}
                                        className={`page-item ${currentPage === page + pageNo ? "active" : ""
                                            }`}
                                        onClick={() => handlePage(page + pageNo)}
                                    >
                                        <a className="page-link">{page + pageNo}</a>
                                    </li>
                                )
                            }
                        })
                    }
                    <li
                        className={`page-item ${currentPage ===
                            Math.floor(allProducts.length / itemsPerPage) + 1
                            ? "disabled"
                            : ""
                            }`}
                        onClick={() => setNext()}
                        style={{
                            pointerEvents: `${currentPage ===
                                Math.floor(allProducts.length / itemsPerPage) + 1
                                ? "none"
                                : ""
                                }`,
                            cursor: 'pointer'
                        }}
                    >
                        <a className="page-link">Next</a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-4 text-right">
                <div style={{ margin: "25px 0" }}>
                    <label htmlFor="" className="control-label">
                        Items Per Page:
                    </label>
                    <select
                        name=""
                        id=""
                        defaultValue={"5"}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Pagination