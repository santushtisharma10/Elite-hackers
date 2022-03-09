import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 40px;
background: #e7e7e7;
position: relative;
bottom: 0;
width: 100%;
margin-top:800px;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #999999;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: #3898db;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: black;
margin-bottom: 20px;
font-weight: bold;
`;