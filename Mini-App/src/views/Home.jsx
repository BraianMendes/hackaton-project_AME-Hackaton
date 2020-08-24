<Window>
	
	<Touchable height={350} block backgroundColor={'#ED0059'} onClick={this.navigateTo}>
		<ImageBackground
			width={'1000%'}
			height={350}
			marginTop={-60}
			backgroundSize={350}
			backgroundPosition={'center center'}
			backgroundRepeat={'no-repeat'}
			source={require('../assets/pictures/logo-top.png')}>&nbsp;</ImageBackground>
			
		</Touchable>
	<Touchable heigth={2000} block backgroundColor={'#ED0059'} marginTop={-100} onClick={this.navigateTo} >
		<FlexBox block width={500} alignItems={"center"} alignContent={"center"} justifyContent={"center"}>
			<Title fontSize={50} color={'#fff'} fontFamily={'Lilita One'} alignSelf={"center"}>AME Data</Title>
		</FlexBox>
	</Touchable>	
	<Touchable height={150} block backgroundColor={'#ED0059'} onClick={this.navigateTo}>
	&nbsp; .
	</Touchable>
	{/* <ImageBackground
		width={'100%'}
		marginTop={40}
		height={120}
		backgroundSize={100}
		backgroundPosition={'center center'}
		backgroundRepeat={'no-repeat'}
		source={require('../assets/pictures/logo-ame.png')}>&nbsp;</ImageBackground>
	<Title block textAlign={'center'} fontSize={24}>Ame Mini-App</Title>
	<Separator marginBottom={0} marginTop={40} height={1.5} />
	<ListView items={this.state.items} onItemSelect={this.navigateTo}/> */}
</Window>
