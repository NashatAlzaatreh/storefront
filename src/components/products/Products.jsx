import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { removeProduct, activeProduct } from "../../store/actions";
import { Link } from "react-router-dom";
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { green } from "@material-ui/core/colors";
import "./products.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

function Products() {
  // const state = useSelector((state) => state);
  const state = useSelector((state) => state.products);
  const dispatcher = useDispatch();
  const classes = useStyles();

  return (
    <div className="products">
      {state.map((prod) => {
        return (
          <div className="cards" key={prod.name}>
            <Card className={classes.root} key={prod.name}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  image={prod.image}
                  title={prod.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {prod.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {prod.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {prod.inStock} left
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {prod.price} JD
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => dispatcher(removeProduct(prod))}
                >
                  <AddShoppingCartOutlinedIcon style={{ color: green[500] }} />
                  Add
                </Button>
                {/* <Button size="small" color="primary">
              Learn More
              </Button> */}
                <Link
                  to="/product"
                  onClick={() => dispatcher(activeProduct(prod))}
                >
                  <Button size="small" color="primary">
                    <BallotOutlinedIcon style={{ color: green[500] }} />
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
