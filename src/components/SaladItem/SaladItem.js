import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';
import { SaladContext } from '../SaladMaker/SaladMaker';

const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: 'lightgrey solid 1px',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
  }
});

export default function SaladItem({ image, name }) {
  const classes = useStyles();
  const { setSalad } = useContext(SaladContext);
  const user = useContext(UserContext);
  const favorite = user.favorites.includes(name);
  const [id, updateId] = useState(0);
  // alternatively we could also useReducer here reducer = key => key + 1.
  // But we'd need to define an additional function and pass it into useReducer(reducer, 0)
  // which seems more complicated
  function update() {
    setSalad({
      name,
      image, 
      id: `${name}-${id}`,

    });
    updateId(id+1);
  };
  return(
    <div className={classes.wrapper}>
        <h3>
          {name}
        </h3>
        <span className={classes.favorite} aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
          {favorite ? '😋' : ''}
        </span>
        <button className={classes.add} onClick={update}>
          <span className={classes.image} role="img" aria-label={name}>{image}</span>
        </button>
    </div>
  )
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}