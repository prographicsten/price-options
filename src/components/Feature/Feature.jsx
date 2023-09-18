import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Feature = ({feature}) => {
    console.log(feature)


    return (
        <div>
            <p className='flex items-center gap-2'><i className='bx bxs-check-circle text-black'></i> {feature}</p>
        </div>
    );
};

Feature.PropTypes = {
    feature: PropTypes.string.isRequired,
}

export default Feature;