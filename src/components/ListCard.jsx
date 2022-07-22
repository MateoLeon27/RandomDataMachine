import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Fragment } from "react-is";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    minwidth: 200,
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  media: {
    height: 180,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListCard(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: 10 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia component="img" height="200" image={props.images} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {" "}
                  <p>{props.summary}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={props.share}>
                Share
              </Button>
              <Button size="small" color="primary" href={props.learn}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
