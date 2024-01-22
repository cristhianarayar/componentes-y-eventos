import './Style.css'
const SocialButton = ({icon}) => {
    return (
      <>
        <div className="icon-container border border-black rounded-circle py-3 px-3 ">
          <img className='iconos' src={icon} />
        </div>  
      </>
    );
  };
  
  export default SocialButton;
  