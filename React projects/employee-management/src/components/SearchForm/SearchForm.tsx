import React from 'react';
import styles from './SearchForm.module.css';

type search={
    setQuery:React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({setQuery}:search) => {
    return ( 
        <div className={styles['search-form']}>
            <h1>Find Employee</h1>
            <input type="search" name="search" placeholder="Search by id, name, dept, or position" onChange={(e) => setQuery(e.target.value)}/>
        </div>
    );
}

export default SearchForm;