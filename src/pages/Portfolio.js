import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import beach from './images/beach.jpg';
import dog from './images/dog.jpg';
import mountain from './images/mountain.jpg';
import leaf from './images/leaf.jpg';
import art from './images/art.jpg';
import stars from './images/stars.jpg';
import icon from '../components/assets/github.png';
import { Container } from '@mui/system';
import './css/portfolio.css';

const data = [
  {
    projectName: 'ZoominLife',
    description: 'Project 1',
    description2: 'Click to go to Website',
    img: mountain,
    git: 'https://github.com/ablanke94/ZoominLife',
    link: 'https://ablanke94.github.io/ZoominLife/',
  },
  {
    projectName: 'Quacker',
    description: 'Project 2',
    description2: 'Click to go to Website',
    img: stars,
    git: 'https://github.com/cycoconutz/Project-2-Quacker',
    link: 'https://glacial-shelf-75917.herokuapp.com/',
  },
  {
    projectName: 'Exprssn',
    description:
      'Project 3: GraphQL, Express, Apollo, Heroku, Bulma, Materialize, JWToken',
    description2: 'Click to go to Website',
    img: art,
    git: 'https://github.com/HunterMcGrew/EXPRSSN',
    link: 'https://quiet-reaches-45814.herokuapp.com/',
  },
  {
    projectName: 'Employee Tracker',
    description: 'uses MySQL',
    img: dog,
    git: 'https://github.com/UpLiftL1f3/EmployeeTracker',
  },
  {
    projectName: 'Tech Blog',
    description: 'Uses MySQL for the back end as well as a front end',
    img: beach,
    git: 'https://github.com/UpLiftL1f3/TechBlog',
  },
  {
    projectName: 'Express Note Taker',
    description: 'Uses Express ',
    img: leaf,
    git: 'https://github.com/UpLiftL1f3/ExpresseNoteTaker',
  },
];

export default function Portfolio() {
  return (
    <div id="div">
      <div id="pageContainer">
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Past Projects
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Here are a few of my latest projects I've worked on
          </Typography>
        </Container>

        <section id="cardContainer">
          {data.map((project) => (
            <Card
              sx={{ maxWidth: 345 }}
              style={{ width: 500, marginRight: 20 }}
            >
              <a href={project.link} target="_blank" style={{ color: 'black' }}>
                <CardMedia
                  component="img"
                  style={{ height: 200 }}
                  image={project.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    style={{
                      fontWeight: 'bolder',
                      fontSize: 25,
                      textAlign: 'center',
                      borderBottom: 'solid',
                      marginBottom: 10,
                    }}
                  >
                    {project.projectName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{ fontWeight: 'bolder', fontSize: 15 }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    href={project.git}
                    target="_blank"
                    className={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <img src={icon} style={{ height: 40 }} alt="img"></img>
                  </Button>
                  <h1>{project.description2}</h1>
                </CardActions>
              </a>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
