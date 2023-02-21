import ReactStars from "react-rating-stars-component";
import Link from "next/link";

export default function Rating(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
    <>
    <div style={props.center ?{justifyContent:'center', display:'flex' }: {}}>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
        </div>
        <small>
            <Link href={props.externalUrl}>Read review</Link></small>
            </>
    );
}