import React, { use, useState } from "react";
import productService from "../service/product.service";

const AddProduct = () => {


    const [product, setProduct]=useState({
        productName : " ",
        description : " ",
        price : " ",
        status : " "
    })


    const handleChange = (e) =>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value}) 
    }


    const ProductRegister=(e)=>{
        e.preventDefault();
        productService
            .saveProduct(product)
            .then((res)=>{
                console.log("Product Added Successfully...")
                setMsg("Product Added Successfully...")
                setProduct({
                    productName : " ",
                    description : " ",
                    price : " ",
                    status : " "
                })

            })
            .catch((error)=>{
                console.log(error)
            })
            console.log(product);
    }


    const [msg , setMsg] = useState("");


    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3 ">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Product
                            </div>

                            {
                                msg && 

                                <p className="fs-4 text-center text-success">{msg}</p>
                            }

                            <div className="card-body">
                                <form onSubmit={(e) => ProductRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Product Name : </label>
                                        <input 
                                            type="text" 
                                            name="productName" 
                                            className="form-control" 
                                            required
                                            onChange={(e)=>handleChange(e)}
                                            value={product.productName}
                                            
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Product Descriptipn : </label>
                                        <input 
                                            type="text" 
                                            name="description" 
                                            className="form-control" 
                                            placeholder="Enter Product Descriptipn"
                                            onChange={(e)=>handleChange(e)}
                                            value={product.description}
                                            required                                        />
                                    </div>
                
                                    <div className="mb-3">
                                        <label>Enter Product Price : </label>
                                        <input 
                                            type="text" 
                                            name="price" 
                                            className="form-control" 
                                            placeholder="Enter Product Price"
                                            onChange={(e)=>handleChange(e)}
                                            value={product.price}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Product Status : </label>
                                        <input 
                                            type="text" 
                                            name="status" 
                                            className="form-control" 
                                            placeholder="Enter Product Status"
                                            onChange={(e)=>handleChange(e)}
                                            value={product.status}
                                            required
                                        />
                                    </div>

                                    <button className="btn btn-primary col-md-12">Submit</button>

                                </form>

                            </div>
                        </div>
                    </div>        
                </div>

            </div> 
            

        </>
    )
}

export default AddProduct;