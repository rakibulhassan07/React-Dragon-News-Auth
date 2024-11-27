import logo from '../../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto mb-6 mt-6' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;