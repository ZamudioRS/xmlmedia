import { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.css";
import CopyButton from '@/component/copy-button/copy-button'
import VisitButton from '@/component/visit-button/visit-button'
import Rating from '@/component/rating/rating'
import BulletPointsList from '@/component/bullet-points-list/bullet-points-list'
import Image from 'next/image'


export default function CardClientSide() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://kwm6eoos53.execute-api.us-east-1.amazonaws.com/prod/results')
      .then((res) => res.json())
        .then((data) => {
          setData(JSON.parse(data.body).contents[0].data)
          setLoading(false)
        })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Card data</p>
  
    return (
            <div className="card">
                <div className="card-body">
                    <div className="row ">
                        <div className="col-mg-4 col-lg-2">
                        <img src="../../ellipse.png"  alt='pic' className="rounded-circle  mx-auto d-block" />
                            <div className="row mx-auto text-center d-block d-lg-block d-lg-none d-xl-block d-xl-none">
                            <Rating externalUrl={data.externalUrl} center={true} />
                            </div>
                        </div>
                        <div className=" col-mg-4 col-lg-6">
                            <div>
                                <p className="text-primary text-center text-lg-start">[{data.ctbrand_name}][{data.ctproduct_name}]</p>
                            </div>
                            <div>
                                <p className="fw-bold text-break text-center text-lg-start">{data.ctoffer_tc}</p>
                            </div>
                            <div>
                                <p className="text-muted text-center text-lg-start "><small>Terms & Conditions Apply</small></p>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center text-lg-start">
                                        <div>
                                        <CopyButton code={data.ctpromo_code} />
                                        </div>
                                        <div>
                                        <VisitButton props={data.externalUrl}></VisitButton>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
    
    
                        </div>
                        <div className="col-lg-4 d-none d-lg-block d-xl-noned-xl-block">
                            <Rating externalUrl={data.externalUrl} />
                            <BulletPointsList list={['Sed ut perspiciatis unde omnis iste natus','Perspiciatis unde omnis iste natus error sit','Unde omnis iste natus error sit']}/>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
            </div>
    )
}