<Window>
	<ImageBackground
		width={'100%'}
		height={200}
		backgroundSize={100}
		backgroundPosition={'center center'}
		backgroundRepeat={'no-repeat'}
		source={require('../assets/pictures/logo-ame.png')}>&nbsp;</ImageBackground>
	<Title block textAlign={'center'} fontSize={24}>Documentação</Title>
	<Separator marginBottom={0} marginTop={40} height={1.5} />
	<View padding={20}>
		<Title textAlign={'justify'}>Todas as informações sobre os componentes, as API's de comunicação e outros detalhes você encontra em nosso portal de desenvolvimento.</Title>
		<SolidButton fontWeight={800} onClick={this.accessPortal}>PORTAL DE DESENVOLVIMENTO</SolidButton>
	</View>
</Window>
