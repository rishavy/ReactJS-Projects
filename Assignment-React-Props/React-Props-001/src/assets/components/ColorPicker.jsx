import React from 'react';

const ColorPicker = ({ colors }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {colors.map(color => (
                <div key={color.id} className="m-4 bg-[#eee] rounded-md shadow-md hover:shadow-xl">
                    <div className="w-40 h-40 " style={{ backgroundColor: color.code }}></div>
                    <h3 className="mx-2 text-xl font-semibold mt-2 text-[#000000] ">{color.code}</h3>
                    <h4 className="mx-2 text-xl font-semibold m-2" style={{ color: color.code }}>{color.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default ColorPicker;
