import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { GridItem } from '../ui/GridItem';
import { Heading } from '../typography/Heading';
import { SignUpButton } from '../SUSI/SignUpButton';
import { LearnMoreLink } from '../nav/LearnMoreLink';
import { Divider } from '../ui/Divider';
import { Subheading } from '../typography/Subheading';
import styles from '../../page.module.css'

// todo: fix props and types
const GridItemRow = ({icon, subheadingText, copy}: {icon: any, subheadingText: string, copy: string}) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className={styles.employersListz}>
      <GridItem xs={2}>{icon}</GridItem>
      <GridItem xs={10}>
        <>
          <Subheading scale="SMALL">{subheadingText}</Subheading>
          <p>{copy}</p>
        </>
      </GridItem>
    </Grid>
  )
}

// todo: fix any type
export const EmployersInfo = () => {
  return (
    <Box maxWidth="912px" width="100%" sx={{background: '#fff', marginTop: '82px', margin: '82px auto 0', borderRadius: '8px', padding: '28px 52px 24px'}}>
      <Grid container rowSpacing={2} columnSpacing={2} className={styles.employersCallout}>
        <GridItem xs={12} md={5} styles={styles.employersCallout}>
          <Box sx={{display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
              <Subheading scale="SMALL">Employers</Subheading>
              <Heading scale="S">Identifying and sourcing the best talent and best fit for small business owners.</Heading>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'block'}, justifyContent: {xs: 'space-between', md: 'flex-start', width: '100%'}}}>
            <SignUpButton />
            <LearnMoreLink />
          </Box>
          </Box>
        </GridItem>
        <GridItem xs={12} md={7} styles={styles.employersCallout}>
          <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
            <Grid container rowSpacing={2} columnSpacing={2} className={styles.employersList}>
              <GridItemRow
                icon={<GroupsIcon sx={{fontSize: '60px', color: '#0054b6'}} />}
                subheadingText="Talent Pipeline."
                copy="Tap into a motivated talent pool and connect with ambitious individuals eager to grow in or break into your industry." />
            </Grid>
            <Divider />
            <Grid container rowSpacing={2} columnSpacing={2} className={styles.employersList}>
              <GridItemRow
                icon={<PsychologyIcon sx={{fontSize: '60px', color: '#0054b6'}} />}
                subheadingText="Fill the talent gaps."
                copy="We analyze candidates' skills that break the mold to infuse your organization with a fresh perspective." />
            </Grid>
            <Divider />
            <Grid container rowSpacing={2} columnSpacing={2} className={styles.employersList}>
              <GridItemRow
                icon={<HandshakeIcon sx={{fontSize: '60px', color: '#0054b6'}} />}
                subheadingText="Hire better talent faster"
                copy="The candidates on Riveter are qualified and ready to interview. Our approach is designed to alleviate hiring challenges and provide you with a seamless hiring process."
              />
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}