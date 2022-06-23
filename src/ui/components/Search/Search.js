import { MdPersonSearch } from "react-icons/md";
import { useState, useContext } from "react";
import { BaseUrl } from "../../../data/services/BaseUrl";
import { UsersContext } from "../../../data/AppContext/AppContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Search.css";

export const Search = () => {
  const { items, setItems, setUrl } = useContext(UsersContext);  
  const [results,setResults]  = useState(50)
  const [input, setInput] = useState("");  
  
  function handleInputSearch(e) {
    e.preventDefault();
    {
      const Ind = items.filter(
        (item, i, arr) => item.name.first === input || item.nat === input
      );     
      if (input.length === 0) {
        e.preventDefault();
        
      }
      if (Ind.length == 0) {
        return;
      } else {
        setItems(Ind);
      }
      
    }
   
  }
  const handleChange = (event) => {
    event.preventDefault()    
    setResults(event.target.value)
    setUrl(`${BaseUrl}?results=${event.target.value}`)
  };

  return (
    <>
      <form onSubmit={handleInputSearch}>
        <div className="container">
          <a
           href="/"
            className="back"
          >
            <BsFillArrowLeftSquareFill />
          </a>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="inputSearch"
            type={"search"}
            placeholder={"Searching (name or nationality)"}
            value={input}
          />
          <button type="submit" className="btn">
            <MdPersonSearch className="MdPersonSearch" />
          </button>         
          <div className="form">
      <Box sx={{  minWidth: 80  }} >
      <FormControl   fullWidth>
        <InputLabel id="demo-simple-select-label">Patients</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={results}
          label="patients"
          onChange={handleChange}        >
          <MenuItem value={50}>50</MenuItem>          
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={250}>250</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={350}>350</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
        </div>
      </form>      
    </>
  );
};
