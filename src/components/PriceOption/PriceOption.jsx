import Feature from "../Feature/Feature";
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    // console.log(option);
    const {name, price, features} = option;

    return (
        <div className="flex flex-col bg-blue-400 rounded-lg text-white py-5 px-4">
            <h2 className="text-center">
                <span className="text-5xl font-bold">${price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center my-2 font-bold">{name}</h4>
            <div className="flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-600 w-full py-3 rounded-tl-3xl rounded-br-3xl hover:bg-black">Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object.isRequired,
}

export default PriceOption;