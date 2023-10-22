import './PrimaryButton.scss';


export function PrimaryButton({content}){
    return(
        <button className="primary-btn" type="button">
            {content}
        </button>
    );
}