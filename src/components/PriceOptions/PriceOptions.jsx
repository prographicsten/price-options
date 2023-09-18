import PriceOption from "../PriceOption/PriceOption";
import PropTypes from 'prop-types';

const PriceOptions = () => {

    // priceOptions

const priceOptions = [
        {
        id: 1,
        name: "Basic Membership",
        features: [
            "Access to gym facilities",
            "Locker room access",
            "Cardio equipment",
            "Weights and resistance training",
            "Personal training available at an additional cost",
        ],
        price: 29,
        },
        {
        id: 2,
        name: "Premium Membership",
        features: [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Sauna and steam room access",
            "Nutritional counseling included",
            "Discounts on personal training sessions",
        ],
        price: 49,
        },
        {
        id: 3,
        name: "Family Membership",
        features: [
            "All features of Premium Membership",
            "Special family locker room access",
            "Childcare services available during workouts",
            "Family nutrition planning sessions",
        ],
        price: 99,
        },
    ];


  
    return (
        <div className=" mb-10">
            <h2 className="text-3xl lg:text-5xl text-center my-5">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
            {
                priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

PriceOptions.PropTypes = {
    option: PropTypes.object.isRequired,
}

export default PriceOptions;