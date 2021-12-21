import Link from 'next/link';
import Image from 'next/image';

const Logo = (props: any) => {
	return (
		<div className="logo" style={props.style == "header" ? {position: "absolute", left: "50px"} :{position: "relative" }} >
			<Link href="/">
			<a>
			<Image
              src="/images/transp_logo2.png"
              alt="Picture of the author"
                 width={200}
              height={138}
       loading="eager"
       priority={true}
               
            />
    		{/* <a style={{color: 'darkgreen', fontWeight: "bold", textTransform: 'uppercase', fontSize: '20px' }}>Fast Cargo</a> */}
    		</a>
  		</Link>
		</div>
		)
}

export default Logo;
