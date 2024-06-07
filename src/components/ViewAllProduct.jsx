import React, { useState } from 'react'
import Navebar from './Navebar'

const ViewAllProduct = () => {

    const [data, changedata] = useState(

        [
            { "name": " Fabric Sofa Three Seater", "prize": 29000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-3_18_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Two Seater", "prize": 25000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-2_16_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa one Seater", "prize": 20000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5024-1_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500" },
            { "name": " Fabric Sofa Set 3+2 Seater", "prize": 40000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf201741_3_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Three Seater", "prize": 29000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-3_18_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Two Seater", "prize": 25000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-2_16_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa one Seater", "prize": 20000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5024-1_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500" },
            { "name": " Fabric Sofa Set 3+2 Seater", "prize": 40000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf201741_3_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Three Seater", "prize": 29000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-3_18_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Two Seater", "prize": 25000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-2_16_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa one Seater", "prize": 20000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5024-1_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500" },
            { "name": " Fabric Sofa Set 3+2 Seater", "prize": 40000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf201741_3_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa Two Seater", "prize": 25000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5022-2_16_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300" },
            { "name": " Fabric Sofa one Seater", "prize": 20000, "img": "https://www.royaloakindia.com/media/catalog/product/s/f/sf5024-1_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500" },
            
        ]
    )


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {
                            data.map(
                                (value, index) => {
                                    return <div className="row g-3">
                                        <div className="col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.img} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <a href="#" class="btn btn-primary">{value.prize}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct
