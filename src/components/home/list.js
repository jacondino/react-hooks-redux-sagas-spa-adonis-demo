import React from 'react'
import 'react-quill/dist/quill.snow.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import renderHTML from 'react-render-html';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
    },
    grid: {
        padding: theme.spacing(3, 1, 2),
    },
}));

export default function List(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                {props.list ? props.list.map((item, i) =>
                    <Grid className={classes.grid} key={i} xs={3} item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://picsum.photos/200/150"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <div>{renderHTML(item.content)}</div>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <div>{renderHTML(item.content)}</div>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                            </Button>
                                <Button size="small" color="primary">
                                    Learn More
                            </Button>
                                <Button size="small" color="default">
                                    Excluir
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ) : <h1>Loading...</h1>}
            </Grid>
        </div>
    );
}