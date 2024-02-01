import React, { useState } from 'react'
import data from '../rest-countries-api-with-color-theme-switcher-master/rest-countries-api-with-color-theme-switcher-master/data.json'
import '../component/Country.css'


const Country = () => {
  const [selectedOption, setSelectedOption] = useState ('');
  const [country, setCountry] = useState (data);
  const [select, setSelect] = useState ('');
  const [currentpage, setCurrentpage] = useState (1);
  const [CountriesPerPage, setCountriesPerPage] = useState(25);
  const [bgcolor, setbgColor] = useState (false)

  const indexOflastCountry = currentpage * CountriesPerPage
  const indexOffirstCountry = indexOflastCountry - CountriesPerPage
    
 

  
  const continent = [
    'Asia',
    'Europe',
    'Americas',
    'Polar',
    'Oceania',
    'Antartic Ocean',
    'Africa',
  ];
  
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const foundRegion = country.filter((item)=>item.region === selectedOption);
  const handleChanged = (e) => {
    setSelect (e.target.value);
    const searchItems = country.filter((product)=> {
      const {name} = product
      return name.toLowerCase().includes(select.toLowerCase())
    })
    setCountry(searchItems)
  }

  // dark mode
  const dark = () => {
    setbgColor(!bgcolor)
  }

  // countries variables changed

    const Ahmad = indexOflastCountry
    const Dunie = indexOffirstCountry
    const result = (country.slice(Dunie,Ahmad))
    
   //handle click next


   const handleNext = () => {
    setCurrentpage(currentpage + 1)
   }

   const handleClick = () => {
    setCurrentpage (currentpage - 1)
   }

    // page numbering

    const pageNumber = [];
    
     for (let i = 1; i <= Math.ceil(country.length/CountriesPerPage); i++) {
      pageNumber.push(i);
      
     }
    //  console.log(country.length)
   
    
  return (
      <div style={{backgroundColor: bgcolor? 'black' : 'tan'}}>

        
       <div className='ahm' >


        <input type='text' placeholder='Search-Region' className='inp' onChange={(e) => handleChanged(e)} />
          <select className='slc'
          name='continent'
          value={selectedOption}
          onChange={(e)=> handleChange(e)}>  
          <option>continent</option>
            {continent.map((option)=>(
             <option key={option[0]}>{option}</option>
            ))}
          </select>
        <button onClick={dark} className='btn'>Dark mode</button>
       </div>
       <div className='ahm' style={{backgroundColor: bgcolor? 'black' : 'yellowgreen'}}>
             {foundRegion.length > 0 
          ? foundRegion.map((country) => {
                      return (
                        <div className='dv1' key={country.name}>
                           <img src={country.flags.svg}/>
                          <p>{country.name}</p>
                          <p>{country.region}</p>
                          <p>{country.population}</p>
                         
                          
                          
                        </div>
                      );
                      }) 
                       
             : result.map((country) =>{
                return( 
                <div className='dv1' key={country.name}>
                    <img src={country.flags.svg}/>
                    <p>{country.name}</p>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                    
                  </div>
                );

            })}
             
       </div>
       <section>
        <button onClick={()=> handleNext()}>Previous</button>
        {pageNumber.map((page) => {
        return <span style={{marginRight:'8px', cursor:'pointer',fontSize:'20px'}} onClick={()=> setCurrentpage(page)}>{page}</span>})}
        <button onClick={() => handleClick()}>Next</button>
       </section>
      
      </div>
      
  );
};

export default Country
