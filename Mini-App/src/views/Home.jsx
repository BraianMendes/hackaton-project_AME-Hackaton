<Window>
	<ImageBackground
		width={'100%'}
		marginTop={40}
		height={120}
		backgroundSize={100}
		backgroundPosition={'center center'}
		backgroundRepeat={'no-repeat'}
		source={require('../assets/pictures/logo-ame.png')}>&nbsp;</ImageBackground>
	<Title block textAlign={'center'} fontSize={24}>Ame Mini-App</Title>
	<Separator marginBottom={0} marginTop={40} height={1.5} />
	<ListView items={this.state.items} onItemSelect={this.navigateTo}/>
</Window>
