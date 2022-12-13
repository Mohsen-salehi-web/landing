import React, {useState} from 'react';

function Book({setStatusPopup}) {
    const [classStatus , setClassStatus] = useState()


    const getFal = () =>{
        setClassStatus('open')
        setTimeout(()=>{
            setStatusPopup(true)

        },3000)
        setTimeout(()=>{
            setClassStatus('')
        },4000)

    }

    // document.getElementById("openbook").addEventListener("click" , ()=>{
    //     document.getElementsByClassName("book")[0].classList.add("open")
    //     document.getElementsByClassName("page")[0].classList.add("open")
    //     setTimeout(()=>{
    //         document.getElementsByClassName("popup")[0].style.visibility = "visible"
    //         document.getElementsByClassName("popup")[0].style.opacity = "1"
    //     },2000)
    //     document.getElementsByClassName("popup")[0].addEventListener("click" , ()=>{
    //         document.getElementsByClassName("popup")[0].style.visibility = "hidden"
    //         document.getElementsByClassName("popup")[0].style.opacity = "0"
    //     })
    // })
    // document.getElementById("closebook").addEventListener("click" , ()=>{
    //     document.getElementsByClassName("book")[0].classList.remove("open")
    //     document.getElementsByClassName("page")[0].classList.remove("open")
    // })

    return (
        <>
            <div className="component d-flex align-items-center flex-wrap">
                <ul className="align d-flex justify-content-center align-items-center p-0 m-0">
                    <li className={classStatus ? "d-flex justify-content-center align-items-center stage" : "d-flex justify-content-center align-items-center"}  >
                        <figure className={classStatus ? 'open book ' : "book"}>

                            <ul className='hardcover_front'>
                                <li>
                                    <div className="coverDesign blue">

                                    </div>
                                </li>
                                <li></li>
                            </ul>


                            <ul className={classStatus ? 'open page' : "page"}>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                                <li>
                                    <img src="https://www.beytoote.com/images/Hafez/14.gif" alt=""/>
                                </li>
                            </ul>



                            <ul className='hardcover_back'>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className='book_spine'>
                                <li></li>
                                <li></li>
                            </ul>
                        </figure>
                    </li>
                </ul>
               <div className="col-12 d-flex justify-content-center align-items-center">
                   <button onClick={getFal} className="col-6 col-xl-3 btn-accept border-0 rounded p-2 text-light ">فال من</button>
               </div>
            </div>
        </>
    );
}

export default Book;