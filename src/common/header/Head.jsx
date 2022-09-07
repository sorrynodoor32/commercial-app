import React from "react"

const Head = () => {
  return (
    <>
       <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-phone"></i>
                    <label>+084 904 924 323</label>
                    <i className="fa fa-envelope"></i>
                    <label>nguyensang@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span></span>
                    <label htmlFor="">EN</label>
                    <span></span>
                    <label htmlFor="">VN</label>
                </div>
            </div>
       </section>
    </>
  )
}

export default Head