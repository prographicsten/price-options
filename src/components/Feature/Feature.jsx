import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    // console.log(feature)


    return (
        <div>
            <span className='flex  gap-2'><span className='flex items-center'><i className='bx bxs-check-circle text-black '></i></span> {feature}</span>
        </div>
    );
};

Feature.PropTypes = {
    feature: PropTypes.string.isRequired,
}

export default Feature;