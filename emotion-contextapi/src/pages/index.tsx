import { Button } from '@/components/atoms/button';
import { Typography } from '@/components/atoms/typography';

export default function Home() {
	return (
		<>
			<Typography level="h1">TYPO TEST</Typography>
			<Typography as="span" color="red">
				TYPO TEST
			</Typography>
			<Button size="small" type="secondary">
				<span>🏠</span>
				<p>TEST</p>
			</Button>
			<Button varient="outlined">
				<span>🏠</span>
				<p>TEST</p>
			</Button>
			<Button size="large" varient="subtle">
				<span>🏠</span>
				<p>TEST</p>
			</Button>
		</>
	);
}
