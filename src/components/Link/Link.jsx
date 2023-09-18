import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='hover:bg-red-500 hover:text-white hover:rounded-tl-lg hover:rounded-br-lg my-1'>
                <a className='px-5' href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;