import { Grid, makeStyles } from '@material-ui/core';
import logo from '../logo.svg'

const useSttyles = makeStyles((theme) => ({}));

const TextToTheRight = (props) => {

    return (

        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}>

            <Grid item xs={4}>
                <img src="https://static.wixstatic.com/media/4e053c_f7cb473277524cdba9b2caa587ab123f~mv2.jpg/v1/fill/w_405,h_395,al_c,q_80,usm_0.66_1.00_0.01/4e053c_f7cb473277524cdba9b2caa587ab123f~mv2.webp" alt='This is a test' width={500}></img>
            </Grid>

            <Grid item xs={4}>

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={4}>

                    <Grid item xs>
                        <typography variant="h6">PERSONAL SHOPPER</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>




                </Grid>

            </Grid>

        </Grid>

    );

}
const TextToTheLeft = (props) => {

    return (

        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}>

        
            <Grid item xs={4}>

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={4}>

                    <Grid item xs>
                        <typography variant="h6">PERSONAL SHOPPER</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>
                    <Grid item xs>
                        <typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</typography>
                    </Grid>




                </Grid>

            </Grid>

            <Grid item xs={4}>
                <img src="https://static.wixstatic.com/media/4e053c_316eab6f2f8146f6bac2e897f9d981b5~mv2.png/v1/fill/w_405,h_395,al_c,q_85,usm_0.66_1.00_0.01/4e053c_316eab6f2f8146f6bac2e897f9d981b5~mv2.webp" alt='This is a test' width={500}></img>
            </Grid>

        </Grid>

    );

}

export function TextWithImage(props) {

    const classes = useSttyles();

    return  (
        <Grid>
        <TextToTheRight />
        <TextToTheLeft />
        </Grid>
    )
        
    


}