import React from 'react'
import CardUser from '../../components/CardUser/CardUser';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const CategoryPage = () => {

  const [chars, setChar] = useState([]);

  let { categoryId } = useParams();

  let especiesFiltradas = chars.filter((element) => {
    return element.species === categoryId;
  }); 

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setChar(json.data.results)
    );
  }, []);
  return (
    <div className='Cards-List'>
      {especiesFiltradas.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <CardUser char={char} />
          </div>
        );
      })}
    </div>
  )
}

export default CategoryPage

//rafce echo "# PreEntrega2TelloParra"
