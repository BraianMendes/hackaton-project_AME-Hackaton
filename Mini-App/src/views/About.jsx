<Window>
	<ImageBackground
		width={'100%'}
		height={200}
		backgroundSize={100}
		backgroundPosition={'center center'}
		backgroundRepeat={'no-repeat'}
		source={require('../assets/pictures/logo-ame.png')}>&nbsp;</ImageBackground>
	<Title block textAlign={'center'} fontSize={24}>Detalhes desta versão</Title>
	<Separator marginBottom={0} marginTop={40} height={1.5} />
	<View padding={20}>
		<Title>Este mini-app foi desenvolvido utilizando as seguintes versões:</Title>
		<Text>Versão da biblioteca de componentes: <Text fontWeight={800}>1.4.5</Text></Text>
		<Text>Versão da API de Super Client: <Text fontWeight={800}>2.0.2</Text></Text>
	</View>
</Window>
