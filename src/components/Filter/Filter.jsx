import React from 'react';
import { FormInput, Label } from "./Filter.style"
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filtersSlice';


export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    const handleFilter = (value) => {
        dispatch(setFilter(value.target.value.trim()))

    }

    return (
        <Label>
            Find Contacts: 
            <FormInput type="text" name="filter"
                value={filter} onChange={handleFilter}></FormInput>
        </Label>
    )
}