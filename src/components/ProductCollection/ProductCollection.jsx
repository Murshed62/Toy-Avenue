import React, { useEffect, useState } from "react";
import Marvel from "../Marvel/Marvel";
import Transformer from "../Transformer/Transformer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Avengers from "../Avengers/Avengers";



const ProductCollection = () => {
  const [active, setActive] = useState(0);
  const [subCategoryOne, setSubCategoryOne] = useState([]);
  const [subCategoryTwo, setSubCategoryTwo] = useState([]);
  const [subCategoryThree, setSubCategoryThree] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        const subCategory1 = data.filter((item) => item.selected === "marvel");
        const subCategory2 = data.filter((item) => item.selected === "avengers");
        const subCategory3 = data.filter((item) => item.selected === "transformers");
        setSubCategoryOne(subCategory1);
        setSubCategoryTwo(subCategory2);
        setSubCategoryThree(subCategory3);
        
      });
  }, []);

  const handleSubCategory = (index) => {
    setActive(index);

  };

  return (
    <div className="lg:mx-52 mb-10">


    <Tabs selectedIndex={active} onSelect={handleSubCategory}>
      <TabList className="my-3 lg:mx-20">
        
        <Tab className="btn mb-6 w-64 lg:w-[200px] btn-primary mr-2">Marvel</Tab>
        <Tab className="btn mb-6 w-64 btn-primary mr-2">Avenger</Tab>
        <Tab className="btn w-64 btn-primary">Transformers</Tab>
      </TabList>

      <TabPanel>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          subCategoryOne.map(subCate => <Marvel key={subCate._id} subCate={subCate}></Marvel>)
        }
        </div>
      </TabPanel>
      

      <TabPanel>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
        {
          subCategoryTwo.map(subCate => <Avengers key={subCate._id} subCate={subCate}></Avengers>)
        }
        </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          subCategoryThree.map(subCate => <Transformer key={subCate._id} subCate={subCate}></Transformer>)
        }
        </div>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default ProductCollection;
