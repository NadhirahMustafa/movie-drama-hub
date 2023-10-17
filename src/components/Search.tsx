import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { movieInterface } from '../interface/interface';
import { searchProps } from '../interface/component.interface';
import { searchTxt } from '../constant/text';

const Search: React.FC<searchProps> = ({ init, onSearch, resetList }) => {

    const [value, setValue] = useState('');
    const handleClick = () => {
        filteredData();
    };

    const handleReset = () => {
        setValue('');
        resetList();
    };

    const filteredData = () => {
        let result = value !== '' ? init.filter(
            (movie: movieInterface) =>
                movie.title.toLowerCase().includes(value.toString().toLowerCase())
        ) : init
        onSearch(result);
    };

    return (
        <Grid className='search--padding'>
            <Grid container className='common--justify'>
                <Grid item className='search--textfield-padding'>
                    <TextField
                        type="text"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        placeholder={searchTxt.search}
                        size='small'
                    />
                </Grid>
                <Grid item className='common--button-padding'><Button onClick={handleClick}><p className="button--color button--libre-style">{searchTxt.search}</p></Button></Grid>
                <Grid item><Button onClick={handleReset}><p className="button--color button--libre-style">{searchTxt.reset}</p></Button></Grid>
            </Grid>
        </Grid>
    );
}

export default Search;
