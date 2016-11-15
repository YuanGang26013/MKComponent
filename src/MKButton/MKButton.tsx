/**
 * Created by Gene on 2016/11/9.
 */

export default function(props:MKComponentProps.MKButtonProps) {

    return (
        <button className="mk-button" onClick={props.onClick}>{props.text}</button>
    )
}