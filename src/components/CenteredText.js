import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#f5f7f9'
    }
}));

export function CenteredText() {

    const classes = useStyles();

    return <Grid className={classes.container} spacing={3} container direction="column" justifyContent="space-around" alignItems="center">

        <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="bool">
            Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing 
            Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing 
        </Typography>
        </Grid>

        <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="bool">
        Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing 
            Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing
        </Typography>
        </Grid>

        <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="bool">
        Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing 
            Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing
        </Typography>
        </Grid>

       

        
    </Grid>
};

