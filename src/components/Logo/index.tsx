import Link from 'next/link'

const Logo = () => {
	return (
		<>
			<Link href="/">
    		<a style={{color: 'darkgreen', fontWeight: "bold", textTransform: 'uppercase', fontSize: '20px' }}>Fast Cargo</a>
  		</Link>
		</>
		)
}

export default Logo;
