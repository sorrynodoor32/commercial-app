import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Laptop",
        },
        {
          cateImg: "./images/category/cat2.png",
          cateName: "PC Dong Bo",
        },
        {
          cateImg: "./images/category/cat3.png",
          cateName: "Linh kien PC",
        },
        {
          cateImg: "./images/category/cat4.png",
          cateName: "Man Hinh PC",
        },
        {
          cateImg: "./images/category/cat5.png",
          cateName: "Phim - Chuot - Tai nghe",
        },
        {
          cateImg: "./images/category/cat6.png",
          cateName: "Ban - ghe Gaming",
        },
    ]
  return (
    <>
        <div className="category">
          {
            data.map((value, index) => {
              return(
                <div className="box f_flex" key={index}>
                  <img src={value.cateImg} alt="" />
                  <span>{value.cateName}</span>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Categories