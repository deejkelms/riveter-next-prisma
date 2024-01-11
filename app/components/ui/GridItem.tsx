import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

export const GridItem = ({xs, md, children, styles}: {xs: number, md?: number, children: ReactElement, styles?: any}) => {
	return (
		<Grid item xs={xs} md={md} className={styles ?? ''}>
			{children}
		</Grid>
	)
}