// import React from 'react';
// import Album from '../portfolio/Portfolio';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import MediaCard from '../portfolio/Card';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                kaito
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const cardStyles = makeStyles((theme) => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//         marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(6),
//     },
// }));

const cards = [1, 2, 3, 4, 5, 6];

const imageArray = ["../../public/5oclockSomewhere", "../../public/dayPlannerFull", "../../public/GYTimes", "../../public/myNotes", "../../public/tsg", "../../public/weatherDashboardFull.pdf"];
console.log(imageArray);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));


export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            kaito_portfolio
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            I am continually learning and improving my coding skills. If you see something you'd like to comment on or discuss, please contact me!
            </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="secondary" href={'/'}>
                                        Contact
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className={classes.root}>
                        <Grid container spacing={3}>

                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../5oclockSomewhere.png"}
                                    project="5 O'Clock Somewhere"
                                    technologies="HTML, CSS, JavaScript, jQuery, Moment.js, Third Party APIs"
                                    github="https://github.com/ksmera01/Its-5OClock-Somewhere"
                                    url="https://ksmera01.github.io/Its-5OClock-Somewhere/"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../tsg.png"}
                                    project="Team Generator Site"
                                    technologies="HTML, CSS, JavaScript, npm packages (Inquirer, Jest)"
                                    github="https://github.com/kaito47/team-summary-generator"
                                    url="https://kaito47.github.io/day_planner"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../myNotes.png"}
                                    project="My Notes Site"
                                    technologies="HTML, CSS, JavaScript, AJAX Calls, API Routing, Heroku Deployment"
                                    github="https://github.com/kaito47/my-notes"
                                    url="https://rocky-springs-10338.herokuapp.com/"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../GYTimes.png"}
                                    project="Giph You Times"
                                    technologies="HTML, CSS, JavaScript, Moment.js, Third Party APIs, NPM Packages,
                                    MySQL"
                                    github="https://github.com/jasonstevens13/giph-you-times"
                                    url="https://ancient-depths-99799.herokuapp.com/"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../dayPlannerFull.png"}
                                    project="Day Planner"
                                    technologies="HTML, CSS, JavaScript, Local Storage"
                                    github="https://github.com/kaito47/day_planner"
                                    url="https://kaito47.github.io/day_planner"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <MediaCard
                                    image={"../../../weatherDashboardFull.png"}
                                    project="Weather Dashboard"
                                    technologies="HTML, CSS, JavaScript, Moment.js, Third Party APIs"
                                    github="https://github.com/kaito47/weather_dashboard"
                                    url="https://kaito47.github.io/weather_dashboard/"
                                />
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    ~site continues to be updated with additional content~
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Thanks for stopping by!
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment >
    );
}