import React from 'react'
import Navebar from './Navebar'

const SearchProduct = () => {
  return (
    <div>
        <Navebar/>
        <center><h1>SEARCH HERE</h1></center>
      <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label class="form-lebel">Product code</label>
                        <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <button class="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SearchProduct
