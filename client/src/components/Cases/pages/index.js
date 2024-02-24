import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				margin="0px 0px 32px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 33px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="15px 15px 15px 15px"
				sm-margin="0px 0px 10px 0px"
				justify-content="center"
				width="100%"
			>
				<Text
					font="--headline1"
					color="--light"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Cases
				</Text>
				<Text
					font="--lead"
					color="--light"
					text-align="center"
					md-width="100%"
					opacity=".5"
					max-width="600px"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="1 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1220&q=80"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Advertising
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--light" opacity=".5">
							Lorem ipsum dolor sit amet, consectetur
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="2 / span 2"
					lg-grid-column="2 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Branding
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--light" opacity=".5">
							Lorem ipsum dolor sit amet, consectetur
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					lg-align-items="flex-start"
					sm-width="100%"
					grid-column="1 / span 2"
					lg-grid-column="1 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Logotype
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--light" opacity=".5">
							Lorem ipsum dolor sit amet, consectetur
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="3 / span 1"
					lg-grid-column="2 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Branding
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--light" opacity=".5">
							Lorem ipsum dolor sit amet, consectetur
						</Text>
					</Box>
				</LinkBox>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64874dfb477c3a0019b3248a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});