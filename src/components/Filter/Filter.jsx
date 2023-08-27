import React from 'react';
import FilterStyled from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterStyled>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </FilterStyled>
  );
};

export default Filter;
