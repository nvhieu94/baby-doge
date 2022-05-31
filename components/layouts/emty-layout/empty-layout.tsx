import { LayoutProps } from '@/models/index'
import * as React from 'react'
import {Box} from '@mui/system'

const EmptyLayout =({ children }: LayoutProps) => {
	return <Box>{children}</Box>
}
export default EmptyLayout;
 