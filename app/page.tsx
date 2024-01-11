import styles from './page.module.css'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import heroHomeImage from '../public/images/riveter-home.jpeg'
import { SignUpCTA } from './components/SignUpCTA';
import { GridItem } from './components/ui/GridItem';
import { MediaTextBlock } from './components/copyright/MediaTextBlock';
import { Heading } from './components/typography/Heading';
import EmployersInfo from './components/home/EmployersInfo';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box maxWidth="810px" sx={{margin: '0 auto'}}>
        <Box maxWidth="681px" sx={{textAlign: 'center', margin: '56px auto auto'}}>
          <Heading scale="XL">Bridging the gap between quality talent and the trade industry.</Heading>
        </Box>
        <Box sx={{marginTop: '52px'}}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <GridItem xs={12} md={6}>
              <SignUpCTA
                  heading="Hiring?"
                  copy="We personalize sourcing to match skilled professionals to the unique needs of each business."
                />
            </GridItem>
            <GridItem xs={12} md={6}>
              <SignUpCTA
                heading="Looking for a new role?"
                copy="Create a profile to get connected with businesses in the trade industry."
              />
            </GridItem>
          </Grid>
        </Box>
        <MediaTextBlock
          marginTop="64px"
          imgSrc={heroHomeImage}
          alt="stockimg"
          imgWidth={390}
          imgHeight={320}
          imgStyles={{borderRadius: '8px', filter: 'grayscale(1)', opacity: .8}}
          heading="Job seekers"
          subHeading="Get connected with a job you love"
          copy="Take control of your career and work in an industry that excites you and aligns with your career goals."
        />
      </Box>
      <EmployersInfo styles={styles} />
    </main>
  )
}
