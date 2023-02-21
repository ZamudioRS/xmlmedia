export default function BulletPointsList(props) {
    return (
             <ul>
            {props.list.map(item =>  <li key={item}><p className="text-muted"><small>{item}</small></p> </li>)}
        </ul>
    )
}