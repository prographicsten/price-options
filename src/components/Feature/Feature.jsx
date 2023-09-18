import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Feature = ({feature}) => {
    console.log(feature)


    return (
        <div>
            <p className='flex items-center gap-2'><BsFillCheckCircleFill className='text-black'></BsFillCheckCircleFill> {feature}</p>
        </div>
    );
};

Feature.PropTypes = {
    feature: PropTypes.string.isRequired,
}

export default Feature;