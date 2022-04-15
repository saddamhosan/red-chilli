import React from 'react';
import breakfast1 from '../../images/breakfast/breakfast1.png';
import breakfast2 from '../../images/breakfast/breakfast2.png';
import breakfast3 from '../../images/breakfast/breakfast3.png';
import breakfast4 from '../../images/breakfast/breakfast4.png';
import breakfast5 from '../../images/breakfast/breakfast5.png';
import breakfast6 from '../../images/breakfast/breakfast6.png';
import SingleD from './SingleD';


const allData=[
    {"id":1,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast1 },
    {"id":2,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast2 },
    {"id":3,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast3 },
    {"id":4,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast4 },
    {"id":5,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast5 },
    {"id":6,"name":"Healthy Meal Plan", "detail":"How we dream our future ","price":23.99,"img":breakfast6 },
]

const Breakfast = () => {
    return (
      <div className="grid grid-cols-3 gap-10 m-10 ">
        {allData.map((data) => (
          <SingleD key={data.id} data={data} />
        ))}
      </div>
    );
};

export default Breakfast;