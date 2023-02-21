import "bootstrap/dist/css/bootstrap.css";
import CopyButton from '@/component/copy-button/copy-button'
import VisitButton from '@/component/visit-button/visit-button'
import Rating from '@/component/rating/rating'
import BulletPointsList from '@/component/bullet-points-list/bullet-points-list'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row ">
                <div className="col-mg-4 col-lg-2">
                        <img src="../../ellipse.png"  alt='pic' className="rounded-circle  mx-auto d-block" />
                        <div className="row mx-auto text-center d-block d-lg-block d-lg-none d-xl-block d-xl-none">
                            <Rating externalUrl={props.data.externalUrl} center={true} />
                        </div>
                    </div>
                    <div className=" col-mg-4 col-lg-6">
                        <div>
                            <p className="text-primary text-center text-lg-start">[{props.data.ctbrand_name}][{props.data.ctproduct_name}]</p>
                        </div>
                        <div>
                            <p className="fw-bold text-break text-center text-lg-start">{props.data.ctoffer_tc}</p>
                        </div>
                        <div>
                            <p className="text-muted text-center text-lg-start "><small>Terms & Conditions Apply</small></p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col text-center text-lg-start">
                                    <div>
                                    <CopyButton code={props.data.ctpromo_code} />
                                    </div>
                                    <div>
                                    <VisitButton props={props.data.externalUrl}></VisitButton>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-lg-4 d-none d-lg-block d-xl-noned-xl-block">
                        <Rating externalUrl={props.data.externalUrl} />
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