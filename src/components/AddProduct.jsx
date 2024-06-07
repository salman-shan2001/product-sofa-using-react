import React from 'react'
import Navebar from './Navebar'

const AddProduct = () => {
    return (
        <div>
            <Navebar/>
            <center><h1><u>ADD PRODUCT HERE</u></h1></center>
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row g-3">


                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Product Title</label>
                                <input type="text" class="form-control" />
                            </div>

                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Product Code</label>
                                <input type="text" class="form-control" />
                            </div>

                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Product Code</label>
                                <textarea name="" id="" class="form-control"></textarea>
                            </div>

                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Prize</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">category</label>
                                <select name="" id="" class="form-control">
                                    <option value="Electronic">Select</option>
                                    <option value="Electronic">Electronic</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Food">Food</option>
                                </select>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">mfd</label>
                                <input type="date" name="" id="" class="form-control" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">exp</label>
                                <input type="date" name="" id="" class="form-control" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Brand</label>
                                <select name="" id="" class="form-control">
                                    <option value="Electronic">Select</option>
                                    <option value="Electronic">hp</option>
                                    <option value="Fashion">Samsung</option>
                                    <option value="Food">acer</option>
                                </select>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label class="form-lebel">Customercare number</label>
                                <textarea name="" id="" class="form-control"></textarea>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Product Image</label>
                                <input type="file" name="" id="" class="form-" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-lebel">Distributer name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button class="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
