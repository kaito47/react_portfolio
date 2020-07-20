
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../aboutMe/Header';
import MainFeaturedPost from '../aboutMe/MainFeaturedPost';
import FeaturedPost from '../aboutMe/FeaturedPost';
// import Sidebar from '../aboutMe/Sidebar';
import Footer from '../aboutMe/Footer';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'Portfolio', url: '/portfolio' },
];

const mainFeaturedPost = {
    title: "Hi, I'm Kait",
    description:
        "",
    image:
        "https://www.nanalyze.com/app/uploads/2017/01/Brain-Computer-Interface-Teaser.jpg",
    imgText: 'Brain-Computer Interface',
    linkText: '',
};

const featuredPosts = [
    {
        description:
            "I'm a junior front end developer, currently employed as a Clinicial Specialist in the Deep Brain Stimulation Division for Medtronic, Inc.",
        image: '../../../profilepic.jpg',
        imageText: 'Profile Pic of Kait',
    },
    {
        description:
            "I live in Philadelphia with my dog Remi and cat Phil. I enjoy playing bass guitar, listening to music, dancing, and going on outdoor adventures!",
        image: 'https://www.nanalyze.com/app/uploads/2017/01/Brain-Computer-Interface-Teaser.jpg',
        imageText: 'Image Text',

    },
];

// const social = [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
// ];


export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                        <div className="buttons">
                            <Button variant="contained" color="secondary" href="https://github.com/kaito47" target="_blank" justify="center">
                                Click for Github
</Button>
                            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/kait-o-shaughnessy-b9b3871a6/" target="_blank">
                                Click for LinkedIn
</Button>
                            <Button variant="contained" color="secondary">Email: oshaughnessykm@gmail.com</Button>
                            <Button variant="contained" color="primary" href="../../public/2020CV.pdf" target="_blank">
                                Click for Resume
                        </Button>
                        </div>
                    </Grid>
                </main>
            </Container >
            <Footer title="Footer" description="Thanks for stopping by!" />
        </React.Fragment >
    );
}