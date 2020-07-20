
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../aboutMe/Header';
import MainFeaturedPost from '../aboutMe/MainFeaturedPost';
import FeaturedPost from '../aboutMe/FeaturedPost';
import Sidebar from '../aboutMe/Sidebar';
import Footer from '../aboutMe/Footer';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'Portfolio', url: '/portfolio' },
];

const mainFeaturedPost = {
    title: 'Hi, my name is Kait',
    description:
        "",
    image:
        "https://www.nanalyze.com/app/uploads/2017/01/Brain-Computer-Interface-Teaser.jpg",
    imgText: 'Brain-Computer Interface',
    linkText: '',
};

const featuredPosts = [
    {
        title: 'A bit about me:',
        description:
            "I'm a junior front end developer, currently employed as a Clinicial Specialist in the Deep Brain Stimulation Division for Medtronic, Inc.",
        image: '../public/profilepic.jpg',
        imageText: 'Profile Pic of Kait',
    },
    {
        title: 'Contact',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://www.nanalyze.com/app/uploads/2017/01/Brain-Computer-Interface-Teaser.jpg',
        imageText: 'Image Text',
        social: [
            { name: 'GitHub', icon: GitHubIcon },
            { name: 'Twitter', icon: TwitterIcon },
        ],
    },
];

// const posts = [post1, post2, post3];

const sidebar = {
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
    ],
};

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
                            <FeaturedPost key={post.title} post={post} social={sidebar.social} />
                        ))}
                    </Grid>
                    {/* <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="From the firehose" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid> */}
                </main>
            </Container>
            <Footer title="Footer" description="Thanks for stopping by!" />
        </React.Fragment>
    );
}