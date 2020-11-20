import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";

const CartEmpty = () => {
  return (
    <Card
      style={{
        marginBottom: 20,
        padding: 10,
        paddingBottom: 20,
        maxWidth: 300,
        margin: "80px auto"
      }}
    >
      <Typography variant="h6">You dont have any item in Cart</Typography>
      <Button
        mode="contained"
        variant="contained"
        style={{
          backgroundColor: "#BBBBBB",
          padding: 5,
          color: "#ffffff",
          marginTop: 10
        }}
      >
        Browse Products
      </Button>
    </Card>
  );
};

const CartLayout = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        display: "flex",
        padding: 10,
        marginBottom: 20,
        borderBottom: 0,
        outline: 0,
        maxWidth: 800,
        margin: "0 auto"
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            style={{ height: 140 }}
            image={data.img}
            title="Paella dish"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography
              variant="h5"
              style={{ textAlign: "left", color: "#757575" }}
            >
              {data.title}
            </Typography>
            <Grid style={{ display: "flex", marginTop: 10 }}>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ textAlign: "left", color: "#BBBBBB" }}
              >
                Rs. {data.price}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#757575"
                }}
              >
                Rating {data.rating}
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 15
              }}
            >
              <ButtonGroup
                variant="contained"
                style={{
                  borderTopLeftRadius: "50%",
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  borderTopRightRadius: "50%"
                }}
                aria-label="contained primary button group"
              >
                <Button
                  style={{
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%"
                  }}
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: data.id })
                  }
                >
                  +
                </Button>
                <Button style={{ backgroundColor: "#F9E5E4" }}>
                  {data.amount}
                </Button>
                <Button
                  style={{
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%"
                  }}
                  onClick={() =>
                    data.amount === 1
                      ? dispatch({ type: "REMOVE", payload: data.id })
                      : dispatch({ type: "DECREASE", payload: data.id })
                  }
                >
                  -
                </Button>
              </ButtonGroup>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
const Cart = () => {
  const CartItems = useSelector((state) => state.cart);
  return (
    <>
      {CartItems ? (
        <CartEmpty />
      ) : (
        CartItems.map((item) => {
          return <CartLayout key={item.id} data={item} />;
        })
      )}
    </>
  );
};

export default Cart;
