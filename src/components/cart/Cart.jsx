import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";
import "./cart.scss";
import Checkout from "./Checkout";

const TAX_RATE = 0.16;

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
function subtotal(items) {
  return items
    .map(({ price }) => parseInt(price.replace("JD", "")))
    .reduce((sum, i) => sum + i, 0);
}

function Cart() {
  const state = useSelector((state) => state.cart);
  console.log("cart", state);
  const invoiceSubtotal = subtotal(state);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const classes = useStyles();

  return (
    <div className="table">
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">
                  {Number(parseInt(row.price.replace("JD", "")))}
                </TableCell>
                <TableCell align="right">
                  {ccyFormat(Number(parseInt(row.price.replace("JD", "")))) * 1}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Checkout />
    </div>
  );
}

export default Cart;
