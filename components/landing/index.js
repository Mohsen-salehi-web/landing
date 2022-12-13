import React from 'react';
import Book from "../book/book";

function Index({setStatusPopup}) {



    return (
        <>
            <section className="top-section d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-light">
                    <h3 className="col-12 text-center   fw-bold">یلدایی شگفت انگیز</h3>
                    <h1 className="col-12 text-center  display-1 fw-bold  ">با الانزا</h1>
                    <img src="img/anar.png" className="img-hendevaneh img3 col-4 " alt=""/>
                </div>
                <img src="img/hendevaneh.png" className="img-hendevaneh img1" alt=""/>
            </section>
            <section className="col-12 p-4">
                <figure className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                    <img src="img/Amazing-yalda.png" alt=""/>
                    <figcaption className="col-12 h2 mt-4 fw-bold text-center">
                        <span className="text-success">تخفیف </span>
                        های
                        <span className="text-danger">   یلدایی </span>
                        الانزا
                    </figcaption>

                </figure>
            </section>
            <section
                className="col-12 flex-wrap  flex-column-reverse flex-xl-row  position-relative  p-2  d-flex justify-content-center align-items-center">
                <img src="img/hendevaneh.png" className="img-hendevaneh img2" alt=""/>
                <img src="img/anar.png" className="img-hendevaneh img3 col-12 col-xl-3" alt=""/>
                <div className="col-12 col-xl-5   border-danger position-relative">
                    <img src="img/anar.png" className="img-hendevaneh img3 col-6 " alt=""/>
                    <Book setStatusPopup={setStatusPopup}/>
                </div>
                <div className="col-12 flex-wrap col-xl-6 p-3 py-5">
                    <img src="img/hendevaneh.png" className="img-hendevaneh img1  col-2 " alt=""/>
                    <figure className="col-12 p-2 d-flex justify-content-center align-items-center ">
                        <img src="/img/banner.png" className="col-12 col-xl-6 img-fluid" alt=""/>
                    </figure>

                    <form dir="rtl"
                          className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
                        <label className="col-12 d-flex justify-content-center align-items-center my-2">
                            <input type="text" name="fullName" id="fullName"
                                   className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-dark bg-opacity-10"
                                   placeholder="نام و نام خانوادگی"/>
                        </label>
                        <label className="col-12 d-flex justify-content-center align-items-center my-2">
                            <input type="text" name="phone" id="phone"
                                   className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-dark bg-opacity-10"
                                   placeholder=" شماره تلفن همراه  "/>
                        </label>

                        <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                            <button className="border-0 rounded p-2 px-5 btn-accept text-light  fw-bold  shadow">ثبت
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="col-12 p-xl-5 py-4 p-2 my-5 banner-center d-flex justify-content-center align-items-center">
                <h2 dir="rtl" className="d-none d-xl-flex m-0 p-0 text-light">به فال نیک بگیر ، و از الانزا هدیه بگیر...</h2>
                <h6 dir="rtl" className="d-block d-xl-none m-0 p-0 text-light">به فال نیک بگیر ، و از الانزا هدیه بگیر...</h6>
            </section>
            <footer className="col-12 d-flex flex-wrap justify-content-between justify-content-xl-evenly align-items-center position-relative">
                <img src="img/barg.png" className="img-hendevaneh barg position-absolute d-none d-xl-flex" alt=""/>
                <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>
                <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>
                 <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>
                 <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>
                 <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>
                 <figure className="col-5 col-xl-1 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid " alt=""/>
                    <figcaption className="text-primary fw-bold">
                        سریتا
                    </figcaption>
                </figure>


                <img src="img/anar.png" className="img-hendevaneh img2 col-12 col-xl-1" alt=""/>
                <img src="img/hendevaneh.png" className="img-hendevaneh img2 translate-middle col-12 col-xl-1" alt=""/>
            </footer>
        </>

    );
}

export default Index;