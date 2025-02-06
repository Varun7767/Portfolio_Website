import './styles.css';


const PageHeaderContent = (props) => {
    const {headerText,icon} = props;

    return(
        <div className="wrapper">
            <h2 className='wrapper-heading'>{headerText}</h2>
            <span className='wrapper-image'>{icon}</span>
        </div>
    )

}

export default PageHeaderContent;
