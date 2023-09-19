import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then((response) => response.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data))
            .then(data => {
                const phonesData = data.data.data;
                const phonesWithFakedData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('_')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakedData);
                setPhones(phonesWithFakedData);
            })
    }, []);


    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;