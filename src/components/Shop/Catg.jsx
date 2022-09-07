import React from 'react'

const Catg = () => {
    
        const data = [
            {
              cateImg: "./images/category/cat-1.png",
              cateName: "Dell",
            },
            {
              cateImg: "./images/category/cat-2.png",
              cateName: "Lenovo",
            },
            {
              cateImg: "./images/category/cat-1.png",
              cateName: "Toshiba",
            },
            {
              cateImg: "./images/category/cat-2.png",
              cateName: "HP",
            },
            {
              cateImg: "./images/category/cat-1.png",
              cateName: "Sony",
            },
            {
              cateImg: "./images/category/cat-2.png",
              cateName: "Acer",
            },
          ]
    
  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>Brand</h1>
                <h1>Shops</h1>
            </div>
            {
                data.map((value, index) => {
                    return <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
            })}
            <div className="box box2">
                <button>View All Brands</button>
            </div>
        </div>
    </>
  )
}

export default Catg