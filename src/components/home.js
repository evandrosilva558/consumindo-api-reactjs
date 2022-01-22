import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Button, Card, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material';


export default function Home() {
    return (
      <main style={{ backgroundColor: '#CFD8DC' }}>
        <AppBar position="fixed"   sx={{ flexGrow: 1, paddingRight: 10 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
            Quality Fruits
          </Typography>
        </Toolbar>
      </AppBar>
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, marginTop: 5 }}>
        <Card sx={{ maxWidth: 1045, borderRadius: 5, resize: "cover"}}>
        <CardMedia
          component="img"
          height="600vw"
          src={require('../image/image3.jpg')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            benefits of fruits
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Among the numerous benefits, they give energy, delay premature aging,
          help with constipation, act as tranquilizers, which positively impacts sleep quality and anxiety control,
           in addition to playing a fundamental role for the correct and balanced functioning of the intestine.
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" size="medium" color="success"  style={{ margin: 30 }}
      ><Link to="/routefruits" style={{ textDecoration: 'none', color: 'white' }}>List all Fruits</Link></Button>
      </Container>
    </main>
    );
  }