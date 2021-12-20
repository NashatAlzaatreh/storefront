import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';

function SimpleCart() {
  const state = useSelector((state) => state);
  const dispatcher = useDispatch();

  return (
    <ul>
      {state.cart.map((prod) => {
        return (
          <li key={prod.name}>
            {prod.name} <HighlightOffSharpIcon color="secondary" onClick={() => dispatcher(removeFromCart(prod.id))} />
          </li>
        );
      })}
    </ul>
  );
}

export default SimpleCart;