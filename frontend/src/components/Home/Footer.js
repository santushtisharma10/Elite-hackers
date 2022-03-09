import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Solutions</Heading>
			<FooterLink href="#">We help the customers to find best solutions for their business</FooterLink>
			
		</Column>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Career</FooterLink>
			<FooterLink href="#">Courses</FooterLink>
			
		</Column>
		<Column>
			<Heading>Impact</Heading>
			<FooterLink href="#">Creators awards</FooterLink>
			<FooterLink href="#">Ideas </FooterLink>
			<FooterLink href="#">Services and Testimonials</FooterLink>
			
		</Column>
		<Column>
			<Heading>Subscribe</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
